import React from "react";
import './style.css'

let Card = ({character}) => {
  return(
      <div key={character.id} className="container">
              <img src={character.image} alt=""></img>
              <h6>{character.name}</h6>
      </div>
  )
}

export default Card;
