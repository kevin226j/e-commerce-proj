export interface IProductProps {
    id: string;
    productName: string;
    productDescription: string;
    productImage: string
    productPrice: string;
    isFreeShipping: boolean;

    productModel?: string;
    productColor?: string;
    productDelivery?: string;
    productBeforePrice?: string;
}