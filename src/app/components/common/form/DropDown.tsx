import * as React from 'react'
import { IDropDownListProps } from '../../../interfaces'

export const DropDown: React.StatelessComponent<IDropDownListProps> = (props) => {
    var options = props.options.map((option) => {
        return (<option key={option.key} value={option.key}>{option.value}</option>);
    });
 
    return (
        
            <select className={formatWrapperClass(props)} style={{ width: props.width }} value={props.selectedValue ? props.selectedValue : props.placeHolder} onChange={onChangeInput(props)} id={props.name}>
                <option key={props.placeHolder} disabled={true}>{props.placeHolder}</option>
                {options}
            </select>
        
    )
}

const formatWrapperClass = (props: IDropDownListProps) => {
    const wrapperClass = 'form-control';
    return props.error ? `${wrapperClass} has-error` : wrapperClass;
}

const onChangeInput = (props: IDropDownListProps) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChange(e.target.name, e.target.value);
}