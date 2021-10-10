import type { ReactElement, CSSProperties, ReactNode } from "react";
import { createElement } from "react";
import cn from "classnames";

interface StackProps {
  type: "horizontal" | "vertical";
  gap?: number;
  children: ReactNode;
  tag?: string;
}

export function Stack({
  tag = "div",
  type,
  gap,
  children,
}: StackProps): ReactElement {
  const className = cn("stack", {
    "stack--horizontal": type === "horizontal",
    "stack--vertical": type === "vertical",
  });
  const style = {
    "--gap": `${gap}px`,
  } as CSSProperties;

  return createElement(tag, { className, style }, children);
}
