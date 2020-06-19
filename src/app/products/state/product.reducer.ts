import { Product}  from '../products'
import { Product } from '../product';


export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product;
    products: Product[];
}

export function reducer (state , action) {
    console.log('state : ' + state + ' , action : ' + action)
    switch (action.type) {
        case 'TOGGLE_PRODUCT_CODE':

            return {
                ...state , showProductCode: action.payload
            };

        default:
            return state;
    }
}