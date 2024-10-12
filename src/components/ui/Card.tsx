import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return <div className={`rounded-lg p-6 border ${className}`}>{children}</div>;
}
