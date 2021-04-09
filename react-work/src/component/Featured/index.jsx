import React from "react";
import "../Nav/style.css";
import "../Stadia/style.css";
import "../Stadia/games.js";

const Featured = ({ feature }) => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2>Featured Games</h2>
      </div>
      <div className="body2">
        {feature.map((games) => {
          return (
            <div key={games}>
              {games.image} <br />
              {games.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
