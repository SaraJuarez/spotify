import styled from "styled-components";

export const AlbumDetailHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const AlbumDetailHeaderPlay = styled.div`
  width: 100%;
  padding-left: 30px;
`;

export const AlbumDetailHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 3;
  border-bottom: 1px solid white;
`;

export const Div1 = styled.div`
  width: 10%;
  grid-column-start: 1;
  grid-column-end: 2;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
  }
`;

export const Div2 = styled.div`
  width: 100%;
  grid-column-start: 2;
  grid-column-end: 3;
  justify-content: start;
  align-items: center;
  p {
    color: white;
    margin: 0;
  }
`;

export const Div3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-start: 3;
`;
