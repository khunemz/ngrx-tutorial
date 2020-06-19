import { ProductState } from '../products/state/product.reducer';

// Whole application's state
export interface State {
    products: ProductState ,
    user: any;
}