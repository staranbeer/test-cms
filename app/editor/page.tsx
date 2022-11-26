"use client";
import { useState } from "react";
import Editor from "../../components/Editor";
import Result from "../../components/Result";

const Page = () => {
  const [resultCode, setResultCode] = useState("The result will show up here");

  return (
    <div>
      <Editor />
      <Result code={resultCode} />
    </div>
  );
};

export default Page;
