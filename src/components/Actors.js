import React from "react";
import { actors } from "../data";
import { v4 as uuid } from "uuid";
function Actors() {
  const actorsMap = actors.map((actor) => {
    return (
      <div key={uuid()}>
        <h3>{actor.name}</h3>
        <ul>
          {actor.movies.map((movie) => {
            return <li key={uuid()}>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsMap}
    </div>
  );
}

export default Actors;
