import React, {useState} from "react";
import "./Die.css";

function Die(props){
    return (
        <div className="Die">
            {/* <i class={`fas fa-dice-${props.face}`}></i> */}
            <i className={props.rolling ? `wobble ${props.face}` : props.face}></i>
        </div>
    )
}

export default Die;