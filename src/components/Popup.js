import React from "react";

export default function Popup(props){
    return(
        <div className="popup">
            <div className="popup__wrapper">
                <button className="popup__close" onClick={props.closePopup}>&times;</button>
                <img src={props.link} alt=""/>
            </div>
        </div>
    )
}