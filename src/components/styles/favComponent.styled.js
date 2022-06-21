import styled from "styled-components";

export const FavComponentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #63beb5;
  border-radius: 15px;
  margin-bottom: 20px;
  padding: 10px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    grid-area: 1 /1/2/2;
    max-width: 300px;
    border-radius: 15px;
  }
`;

export const InfoFavComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
`;

export const FavName = styled.p`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
`;
