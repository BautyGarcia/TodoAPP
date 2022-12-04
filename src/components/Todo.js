import React from "react";
import "./Todo.css";

export default function Todo({todo, onClick }) {

    return (
        <div className="todoContainer"> {todo}
            <div className="buttonsContainer">
                <button className="removeButton" onClick={onClick}>x</button>
            </div>
        </div>
    );
}