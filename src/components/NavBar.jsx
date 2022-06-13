import React from "react";

import { NavBarStyled } from "./styles/navBar.styled";
function NavBar() {
  return (
    <NavBarStyled>
      <a>About</a>
      <a>Services</a>
      <a>Clients</a>
      <a>Contact</a>
    </NavBarStyled>
  );
}

export default NavBar;
