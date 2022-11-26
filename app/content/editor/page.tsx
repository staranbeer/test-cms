"use client";
import { useState } from "react";
import Editor from "../../../components/Editor";
import Result from "../../../components/Result";

const Page = () => {
  const [resultCode, setResultCode] = useState("The result will show up here");

  return (
    <div className="flex divide-x-2 h-screen overflow-hidden">
      <div className="flex-1">
        <Editor setResultCode={setResultCode} />
      </div>
      <div className="flex-1">
        <Result code={resultCode} />
      </div>
    </div>
  );
};

export default Page;
