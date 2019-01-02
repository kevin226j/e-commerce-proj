export interface IInputProps {
    name: string;
    value: string;
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