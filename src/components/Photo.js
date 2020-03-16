import React, {Component} from "react";

export default function Photo(props) {
    return(
        <div onClick={props.openPopup}>
            <img src={props.link} alt=""/>
        </div>
    )
}
