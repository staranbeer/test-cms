"use client";

import ExampleTheme from "./themes/ExampleTheme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import {
  TRANSFORMERS,
  $convertFromMarkdownString,
  $convertToMarkdownString,
} from "@lexical/markdown";

import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Dispatch, SetStateAction, useState } from "react";
import { EditorState, LexicalEditor } from "lexical";

function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>;
}

const editorConfig = {
  // The editor theme
  theme: ExampleTheme,
  namespace: "",
  // Handling of errors during update
  onError(error: Error) {},
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
};

export default function Editor({
  setResultCode,
}: {
  setResultCode: Dispatch<SetStateAction<string>>;
}) {
  const [markdown, setMarkdown] = useState<string>("");

  const onChange = (editorState: EditorState, editor: LexicalEditor) => {
    editor.update(() => {
      const md = $convertToMarkdownString(TRANSFORMERS);
      setResultCode(md);
      setMarkdown(md);
    });
  };

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <OnChangePlugin onChange={onChange} ignoreSelectionChange />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
      </div>
    </LexicalComposer>
  );
}
