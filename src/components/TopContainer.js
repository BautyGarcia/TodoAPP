import React from "react";
import "./TopContainer.css";

export default function TopContainer( { onClick } ) {
    return <div className="top-container">
        <input className="todoInput" type="text" placeholder="Enter a Todo"></input>
        <button className="addButton" onClick={onClick}>ADD</button>
    </div>
}