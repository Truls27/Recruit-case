// NgRx
import { createAction, props } from '@ngrx/store';

// Internal
import { Product, User } from 'src/app/shared/services/models/user.model';

const SHOP_ACTION = '[SHOP]';
export const PRODUCTS_LOAD = 'Load products';
export const PRODUCTS_LOAD_SUCCESS = 'Load products success';
export const PRODUCTS_LOAD_FAILURE = 'Load products failure';
export const PRODUCTS_RELOAD = 'Reload products';
export const USERS_LOAD_SUCCESS = 'Load products success';
export const USERS_LOAD_FAILURE = 'Load products failure';
export const USERS_RELOAD = 'Reload products';
export const APPLICATION_CLOSED = 'Application closed'

export const loadProducts = createAction(
    `${SHOP_ACTION} ${PRODUCTS_LOAD}`,
);

export const loadProductsSuccess = createAction(
    `${SHOP_ACTION} ${PRODUCTS_LOAD_SUCCESS}`,
    props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
    `${SHOP_ACTION} ${PRODUCTS_LOAD_FAILURE}`,
    props<{ error: Error }>()
);

export const reloadProducts = createAction(
    `${SHOP_ACTION} ${PRODUCTS_RELOAD}`,
    props<{ product_id?: number }>()
);

export const applicationClosed = createAction(
    `${SHOP_ACTION} ${APPLICATION_CLOSED}`,
)