import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-lg p-6 border">{children}</div>;
}
