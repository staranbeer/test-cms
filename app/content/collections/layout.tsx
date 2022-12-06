import Link from "next/link";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="p-10">{children}</div>
      <Link
        href="/content/editor"
        className="fixed cursor-pointer right-8 bottom-8 bg-blue-500 px-6 py-2 text-white font-bold"
      >
        {" "}
        Create New
      </Link>
    </div>
  );
};

export default layout;
