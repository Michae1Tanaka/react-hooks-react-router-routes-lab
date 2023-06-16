import React from "react";
import { movies } from "../data";
import { v4 as uuid } from "uuid";

function Movies() {
  const moviesMap = movies.map((movie) => {
    return (
      <div key={uuid()}>
        <h3>Title: {movie.title}</h3>
        <h4>Time (in minutes): {movie.time}</h4>
        <ul>
          {movie.genres.map((genre) => {
            return <li key={uuid()}>{genre}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesMap}
    </div>
  );
}

export default Movies;
