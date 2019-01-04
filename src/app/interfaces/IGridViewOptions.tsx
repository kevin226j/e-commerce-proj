export interface IGridViewOptions<T> {
    dataItems: T[];
    showAddtoCartButton?: boolean;
    showDetailsButton?: boolean;
    showEditButton?: boolean;
    showDeleteButton?: boolean;   
    onButtonClick?: (id:string, action?:string) => void;
}