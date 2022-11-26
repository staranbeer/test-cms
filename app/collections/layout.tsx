import { ReactNode } from "react";

const EditorLayout = ({ children }: { children: ReactNode }) => {
  return <div className="p-10">{children}</div>;
};

export default EditorLayout;
