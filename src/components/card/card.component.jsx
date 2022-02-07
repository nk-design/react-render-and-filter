import React from "react";
import "./card.styles.css";

export const Card = (props) => {
    return(
        <div className="card-container">
            <img src={`https://robohash.org/${props.player.id}?set=set2&size=180x180`} alt="Monster" /> 
            <h2>{props.player.name}</h2>
            <p>{props.player.email}</p>
        </div>
    )
}
