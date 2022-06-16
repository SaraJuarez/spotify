import React from "react";

import { StyledHeader, HeaderImage } from "../styles/header.styled";
import backImage from "../styles/hero.svg";

function Header() {
  return (
    <StyledHeader>
      <HeaderImage src={backImage} />
    </StyledHeader>
  );
}

export default Header;
