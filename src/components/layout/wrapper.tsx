import type { ReactElement, ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps): ReactElement {
  return <div className="wrapper">{children}</div>;
}
