import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <article className="p-4 py-6 rounded-lg shadow-md bg-white">
      {children}
    </article>
  );
};

export default Card;
