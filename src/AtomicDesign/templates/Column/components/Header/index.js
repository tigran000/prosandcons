import React from "react";
import HeaderWrapper from "./HeaderWrapper";

function Header({ type }) {
  return <HeaderWrapper isPros={type === "pros"}> {type}</HeaderWrapper>;
}

export default Header;
