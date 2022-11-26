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
      <button
        onClick={() => {
          navigator.clipboard.writeText(resultCode);
        }}
        className="bg-blue-500 px-6 py-2 font-bold rounded-md text-white fixed right-6 top-4"
      >
        Save progress
      </button>
    </div>
  );
};

export default Page;
