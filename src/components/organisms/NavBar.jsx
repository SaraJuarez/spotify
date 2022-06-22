import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsHeadphones } from "react-icons/bs";
import { RiBarChartHorizontalLine } from "react-icons/ri";

import NavBarLink from "../atoms/NavBarLink";
import avatarIcon from "../styles/avatar.svg";
import {
  NavBarStyled,
  AvatarImage,
  AvatarImageContainer,
} from "../styles/navBar.styled";

function NavBar() {
  const elements = [
    {
      title: "Discover",
      icon: <BsHeadphones />,
      url: "/",
    },
    {
      title: "Search",
      icon: <AiOutlineSearch />,
      url: "#",
    },
    {
      title: "Favourites",
      icon: <AiFillHeart />,
      url: "/favs",
    },
    {
      title: "Playlists",
      icon: <AiFillPlayCircle />,
      url: "#",
    },
    {
      title: "Charts",
      icon: <RiBarChartHorizontalLine />,
      url: "#",
    },
  ];

  return (
    <NavBarStyled>
      <AvatarImageContainer>
        <AvatarImage alt="avatar icon" src={avatarIcon} />
        <p>Sara Juárez Zarco</p>
      </AvatarImageContainer>
      {elements.map((element, index) => {
        return (
          <NavBarLink
            key={index}
            title={element.title}
            icon={element.icon}
            url={element.url}
          />
        );
      })}
    </NavBarStyled>
  );
}

export default NavBar;
