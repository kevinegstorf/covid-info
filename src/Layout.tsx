import React, { ReactNode } from "react";
import { NavBar } from "./components";

interface Props {
  children: ReactNode;
}
export default function Layout(props: Props) {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  );
}
