interface IKeyValue {
    key: string;
    value: string;
}

export interface IDropDownListProps {
    name: string;
    label: string;
    selectedValue: string;
    options: IKeyValue[];
    placeHolder: string;

    
    width?: string;
    error?: string;
    onChange: (fieldName: string, value: string) => void;
    
}