import React, { HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

export function H2({ children, className }: HeadingProps) {
  return (
    <h2 className={`font-head text-4xl font-semibold ${className}`}>
      {children}
    </h2>
  );
}