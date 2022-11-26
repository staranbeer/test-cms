import { ReactNode } from "react";

const EditorLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-100"></aside>
      <div className="p-10"> {children}</div>
    </div>
  );
};

export default EditorLayout;
