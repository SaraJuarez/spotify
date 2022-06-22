import styled from "styled-components";

export const SongComponentContainer = styled.div`
  display: flex;
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const SongComponentTitle = styled.div`
  display: flex;
  flex-direction: column;
  grid-column-start: 2;
  width: 100%;
  p {
    color: white;
    margin: 0;
  }
`;

export const SongComponentNumber = styled.div`
  width: 10%;
  grid-column-start: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
  }
`;

export const SongComponentDuration = styled.div`
  grid-column-start: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
  }
`;
