import styled from "styled-components";

export const NavBarStyled = styled.div`
  height: 100%;
  width: 10%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #574fd8;
  transition: 0.5s ease;
  overflow-x: hidden;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarImageContainer = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  P {
    color: white;
    font-size: 14px;
    font-weight: lighter;
  }
`;

export const AvatarImage = styled.img`
  width: 50px;
`;
