"use client";
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
      className={`p-5 border rounded-lg shadow-md lg:min-w-[20rem] ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
