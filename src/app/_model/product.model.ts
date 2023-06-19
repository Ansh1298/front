/**Author:Anshuman Singh */
/**This model is for product details */
import { FileHandle } from "./file-handle.model";

export interface Product {
    productId: number
    productName: string,
    productDescription: string,
    productDiscountedPrice: number,
    productActualPrice: number,
    productImages: FileHandle[]
}