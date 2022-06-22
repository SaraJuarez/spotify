import styled from "styled-components";

export const GenresStyledDiv = styled.div`
  grid-area: 1/2/2/2;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 300px;
  p {
    margin: 5px;
    background-color: #cecedc;
    color: white;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const NoGenres = styled.p`
  color: white;
  text-decoration: line-through;
`;
