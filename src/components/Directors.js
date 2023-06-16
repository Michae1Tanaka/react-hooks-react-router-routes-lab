import React from "react";
import { directors } from "../data";
import { v4 as uuid } from "uuid";

function Directors() {
  const directorsMap = directors.map((director) => {
    return (
      <div key={uuid()}>
        <h3>{director.name}</h3>
        <ul>
          {director.movies.map((movie) => {
            return <li key={uuid()}>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsMap}
    </div>
  );
}

export default Directors;
