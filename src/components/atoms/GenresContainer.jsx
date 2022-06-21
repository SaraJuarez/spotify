import React from "react";

import { GenresStyledDiv, NoGenres } from "../styles/genresContainer.styled";
function GenresContainer({ genres }) {
  return (
    <div>
      {genres.length > 0 ? (
        <GenresStyledDiv>
          {genres.map((element, index) => {
            return <p key={index}>{element}</p>;
          })}
        </GenresStyledDiv>
      ) : (
        <div>
          <NoGenres>No genres info available</NoGenres>
        </div>
      )}
    </div>
  );
}

export default GenresContainer;
