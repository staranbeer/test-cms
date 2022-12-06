import { ReactNode } from "react";

const Card = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`card p-5 border rounded-lg shadow-md lg:min-w-[20rem] flex flex-col gap-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
