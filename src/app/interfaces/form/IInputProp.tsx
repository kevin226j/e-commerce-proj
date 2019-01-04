export interface IInputProps {
    name: string;
    value: any;
    type: string;
    className: string;
    isIcon: boolean

    id?: string;
    label?: string;
    placeholder?: string;
    icon?:string
    error?: string;

    onChange: (fieldName: string, value: string) => void;
}