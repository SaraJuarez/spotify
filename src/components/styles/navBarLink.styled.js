import styled from "styled-components";

export const StyledNavBarLinkDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75px;
  min-height: 75px;
  opacity: 0.5;
  width: 100%;

  :hover {
    opacity: 1;
    background: linear-gradient(to right, #7873dd, transparent 95%);
  }
`;

export const StyledLink = styled.div`
  display: flex;
  align-items: center;
  p {
    color: white;
    margin-left: 5px;
  }
`;
