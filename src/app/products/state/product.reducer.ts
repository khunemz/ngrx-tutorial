import { Product } from '../product';
import * as fromRoot from '../../state/app.state'
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductActions, ProductActionTypes } from './product.action';


export interface State extends fromRoot.State {
    products: ProductState
}

export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product;
    currentProductId: number;
    products: Product[];
}

const initialState : ProductState = {
    showProductCode : true , 
    currentProduct: null , 
    currentProductId: 0 ,
    products : []
}

const getProductFreatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(getProductFreatureState , state => state.showProductCode);


export const getCurrentProductId = createSelector(
    getProductFreatureState,
    state => state.currentProductId
  );
  
  export const getCurrentProduct = createSelector(
    getProductFreatureState,
    getCurrentProductId,
    (state, currentProductId) => {
      if (currentProductId === 0) {
        return {
          id: 0,
          productName: '',
          productCode: 'New',
          description: '',
          starRating: 0
        };
      } else {
        return currentProductId ? state.products.find(p => p.id === currentProductId) : null;
      }
    }
  );
export function reducer (state: ProductState = initialState , action: ProductActions) : ProductState {
    switch (action.type) {
        case ProductActionTypes.ToggleProductCode:

            return {
                ...state , showProductCode: action.payload
            };
        case ProductActionTypes.SetCurrentProduct:
            return {
                ...state , currentProduct: { ...action.payload }
            };
        case ProductActionTypes.ClearcurrentProduct:
            return {
                ...state , currentProduct: null
            };
        case ProductActionTypes.InitializeCurrentProduct:
            return {
                ...state , 
                currentProduct: {
                    id: 0 , productName: '' , productCode: '' , description: '' , starRating: 0  
                }
            }
        default:
            return state;
    }
}