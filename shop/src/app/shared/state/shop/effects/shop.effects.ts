// Angular
import { Injectable } from '@angular/core';

// NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
// RxJs
import {
    catchError,
    map,
    concatMap,
    takeUntil,
    tap,
} from 'rxjs/operators';
import { of } from 'rxjs';


// Internal
import * as ShopActions from '../actions/shop.actions';
import { ShopApi } from '../../../services/api/shop.api';

@Injectable()
export class ShopEffects {
    constructor(
        private actions$: Actions,
        private shopApi: ShopApi,

    ) {}
    loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShopActions.loadProducts),
            concatMap(() =>
                this.shopApi.getProducts().pipe(
                    tap((products) => console.log(products)),
                    map((products) => ShopActions.loadProductsSuccess({products})),
                    catchError((error) =>
                        of(ShopActions.loadProductsFailure({ error }))
                    ),
                    takeUntil(
                        this.actions$.pipe(ofType(ShopActions.applicationClosed))
                    )
                )
            )
        );
    });

    reloadProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShopActions.reloadProducts),
            concatMap((action) =>
                this.shopApi
                    .getProducts()
                    .pipe(
                        map((products) =>
                            ShopActions.loadProductsSuccess({ products })
                        ),
                        catchError((error) =>
                            of(ShopActions.loadProductsFailure({ error }))
                        ),
                        takeUntil(
                            this.actions$.pipe(
                                ofType(ShopActions.applicationClosed)
                            )
                        )
                    )
            )
        );
    });

}
