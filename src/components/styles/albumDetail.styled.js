import styled from "styled-components";

export const AlbumDetailContainer = styled.div`
  padding: 30px;
  display: flex;
  background: linear-gradient(
    90deg,
    rgba(76, 135, 152, 1) 0%,
    rgba(39, 71, 80, 1) 100%
  );
`;

export const AlbumDetailHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 20px;
  p {
    color: white;
  }
`;

export const AlbumDetailType = styled.p`
  font-size: 12px;
`;

export const AlbumDetailName = styled.p`
  font-size: 50px;
`;

export const AlbumDetailSongList = styled.div`
  padding: 30px;
  background: linear-gradient(
    90deg,
    rgba(213, 214, 214, 1) 0%,
    rgba(18, 18, 18, 1) 100%
  );

  /*   background: linear-gradient(
    90deg,
    rgba(241, 243, 244, 1) 0%,
    rgba(18, 18, 18, 1) 100%
  ); */
  display: grid;
  grid-template-columns: 10% 85% 5%;
  grid-row-gap: 10px;
  /*   width: 100%; */
`;
