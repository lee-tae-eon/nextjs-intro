import React, { ReactChild, ReactChildren } from "react";
import Nav from "./Nav";

interface LayoutProps {
  children: ReactChild | ReactChildren;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
}
