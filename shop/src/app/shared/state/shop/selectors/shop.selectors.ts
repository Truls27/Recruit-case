// NgRX
import { Cart,  Product, User } from 'src/app/shared/services/models/user.model';
import {
    createFeatureSelector,
    createSelector,
    createSelectorFactory,
    defaultMemoize,
} from '@ngrx/store';

// Internal
import * as fromShop from '../reducers/shop.reducer';

export const selectShopState = createFeatureSelector<fromShop.ShopState>(
    fromShop.SHOP_FEATURE_KEY
);

/**
 * Select all products
 */
 export const selectProducts = createSelectorFactory<
     fromShop.ShopState,
     Product[]
 >((projector) => defaultMemoize(projector, undefined))(
    selectShopState,
    (state: fromShop.ShopState): Product[] => 
        state.products
 );


