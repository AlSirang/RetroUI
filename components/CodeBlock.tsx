"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/packages/ui";

interface ICodeBlock extends React.HTMLAttributes<HTMLPreElement> {}

export async function copyToClipboardWithMeta(value: string, event?: Event) {
  navigator.clipboard.writeText(value);
  if (event) {
    // trackEvent(event);
  }
}

export function CodeBlock({ className, children, ...props }: ICodeBlock) {
  const [hasCopied, setHasCopied] = React.useState(false);
  const preRef = React.useRef<HTMLPreElement>(null);

  const handleClickCopy = async () => {
    const code = preRef.current?.textContent;
    if (code) {
      setHasCopied(true);
      await navigator.clipboard.writeText(code);

      setTimeout(() => {
        setHasCopied(false);
      }, 3000);
    }
  };
  return (
    <pre
      className={cn(
        "relative overflow-x-auto rounded bg-[#282A36] mt-3 mb-6 p-4",
        className
      )}
      {...props}
    >
      <Button
        disabled={hasCopied}
        className="absolute top-4 right-4 z-10"
        size="sm"
        onClick={handleClickCopy}
      >
        {hasCopied ? "Copied" : "Copy"}
      </Button>
      <span ref={preRef}>{children}</span>
    </pre>
  );
}