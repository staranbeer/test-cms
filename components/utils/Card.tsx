import { ReactNode } from "react";

const Card = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <article className={`p-4 py-6 rounded-lg shadow-md bg-white ${className}`}>
      {children}
    </article>
  );
};

export default Card;
