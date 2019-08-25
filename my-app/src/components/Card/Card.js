import React from "react";
import "../../App.css";

const Card = props => {
    return (
        <div
            style={{ backgroundImage: `url(${props.src})` }}
            alt={props.alt}
            className="block"
            onClick={() => props.handleClick(props.name)}>
        </div>
    )
};

export default Card;