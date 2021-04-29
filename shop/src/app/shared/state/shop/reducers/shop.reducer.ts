// NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { Cart, Product, User } from 'src/app/shared/services/models/user.model';

// Internal
import * as ShopActions from '../actions/shop.actions';

export const SHOP_FEATURE_KEY = 'shop';

export interface ShopState {
    products: Product[];
    user: User;
    cart: Cart
}

export interface State {
    [SHOP_FEATURE_KEY]: ShopState;
}

export const initialState: ShopState = {
    products: [],
    user: {
        id: 0,
        name: {
            firstName: '',
            lastName: '',
        },
        phone: '',
        avatar: '',
        email: '',
        address: {
            country: '',
            city: '',
            zip: '',
            street: '',
        },
        orders: {
            id: 0,
            products: [],
        },
        role: 'CUSTOMER'
    },
    cart: {
        id: 0, // User id
        products: [],
    }
};

const shopReducer = createReducer(
    initialState,
    on(ShopActions.loadProducts, (state, action) => ({
        ...state
    })),
    on(ShopActions.loadProductsSuccess, (state, action) => ({
        ...state,
        products: action.products,
    })),
    on(ShopActions.loadProductsFailure, (state, action) => state),
    on(ShopActions.reloadProducts, (state, { product_id }) => ({
        ...state,
        products: state.products.filter((products) => products.id !== product_id),
    })),
);

export function reducer(
    state: ShopState | undefined,
    action: Action
) {
    return shopReducer(state, action);
}
