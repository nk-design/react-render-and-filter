import React from "react";
import "./cards-list.styles.css";
import {Card} from "../card/card.component";

export const CardsList = (props) => {
    return(
        <div className="card-list">
            {props.player.map(el => (
                <Card key={el.id} player={el}/>
                ))
            }
        </div>
    )
}