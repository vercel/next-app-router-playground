import React from "react";
import StyledJsxRegistry from './registry';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <StyledJsxRegistry>{children}</StyledJsxRegistry>;
}
