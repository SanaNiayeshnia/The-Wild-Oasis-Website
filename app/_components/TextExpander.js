"use client";
import { useState } from "react";

export const TextExpander = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className={`text-justify`}>
      <p className={`${isExpanded ? "" : "line-clamp-6"}`}>{children}</p>
      <button
        onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
        className="underline text-primary-300 transition-all duration-300 cursor-pointer hover:text-accent-200"
      >
        {isExpanded ? "show less" : "show more"}
      </button>
    </div>
  );
};
