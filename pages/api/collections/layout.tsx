import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>{children}</div>
      <div className="fixed right-8 bottom-8 bg-blue-500 p-2"> Create New</div>
    </div>
  );
};

export default layout;
