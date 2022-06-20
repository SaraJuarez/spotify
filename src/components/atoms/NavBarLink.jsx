import React from "react";
import { IconContext } from "react-icons";

import { StyledNavBarLinkDiv, StyledLink } from "../styles/navBarLink.styled";

function NavBarLink(props) {
  const { icon, title, url } = props;
  return (
    <StyledNavBarLinkDiv to={url}>
      <StyledLink>
        <IconContext.Provider value={{ color: "white" }}>
          {icon}
        </IconContext.Provider>
        <p>{title}</p>
      </StyledLink>
    </StyledNavBarLinkDiv>
  );
}

export default NavBarLink;
