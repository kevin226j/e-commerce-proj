import * as React from "react";
import { IInputProps } from "../interfaces/IInputProp";


export const Input: React.StatelessComponent<IInputProps> = (props) => {
    return (
        <React.Fragment>
            <div className={formatWrapperClass(props)}>

                { addIconOrLabel(props) }

                <input type={props.type}
                    id={props.id}
                    className={props.className}
                    name={props.name}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={onChangeInput(props)}
                />
            </div>
        </React.Fragment>
    );

}

const chooseIcon = (val:string) => {
    let icon: string = 'fa ';
    switch(val) {
        case 'user': 
            return icon += 'fa-user'
        case 'envelope':
            return icon += 'fa-envelope'
        case 'phone':
            return icon += 'fa-phone'
        case 'lock': 
            return icon += 'fa-lock'
        case 'credit-card':
            return icon += 'fa-credit-card'
        default :
            return icon += ''
    }
}

const formatWrapperClass = (props: IInputProps) => {
    const wrapperClass = (!props.isIcon) ? 'form-group' : 'form-group input-group';
    return props.error ? `${wrapperClass} has-error` : wrapperClass;
}

const addIconOrLabel = (props: IInputProps) => {
    return (props.isIcon) ? 
    <div className="input-group-prepend">
        <span className="input-group-text"> <i className={chooseIcon(props.icon)}></i> </span>
    </div>
    :
    <label>{props.label}</label>
}

const onChangeInput = (props: IInputProps) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.name, e.target.value);
}