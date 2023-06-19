/** Author: Anshuman singh*/
/**This model is used for the order details provided by the user */
import { Product } from "./product.model";

export interface MyOrderDetails {
    orderId: number;
    orderFullName: string;
    orderFullOrder: string;
    orderContactNumber: string;
    orderAlternateContactNumber: string;
    orderStatus: string;
    orderAmount: number;
    product: Product;
    user: any;
}