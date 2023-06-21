import React from "react";
import '../styles/buttonClear.css'

const ButtonClear = (props) => (
    <div className="button-clear" onClick={props.clear}>
        {props.children}
    </div>
);

export default ButtonClear