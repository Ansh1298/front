import { OrderQuantity } from "./order-quantity.model";

export interface OrderDetails {
    fullName: string;
    fullAddress: string;
    contactNumber: string;
    emailId: string;
    transactionId: string,
    orderProductQuantityList: OrderQuantity[];
}