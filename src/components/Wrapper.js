import React from "react"
import "./Wrapper.css"

export default function Wrapper({ children, onKeyDown }) {
    return <div className="wrapper" onKeyDown={onKeyDown}>{children}</div>
}