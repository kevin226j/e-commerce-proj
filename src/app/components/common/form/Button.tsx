import * as React from "react";
import { IButtonProps } from "../interfaces";


export const Button: React.StatelessComponent<IButtonProps> = (props) => {
    return (
        <div className="form-group">

            <button type="button"
                className={"btn btn-primary btn-block " + props.className}
                onClick={props.onClick}
            >
                {props.label}
            </button>
        </div>
    );
};