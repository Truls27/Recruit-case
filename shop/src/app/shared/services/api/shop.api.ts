// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Rxjs
import { Observable } from 'rxjs';

// Internal
import { environment } from '../../../../environments';
import { User, Product, Cart } from '../models/user.model';

export const PARAM_PAGE_NUMBER = 'pageNumber';
export const PARAM_PAGE_SIZE = 'pageSize';

@Injectable({
    providedIn: 'root',
})
export class ShopApi {
    constructor(private http: HttpClient) {}

    public getProducts(
        keyword?: string,
    ): Observable<Product[]> {
        const options = {
        };
        return this.http.get<Product[]>(
            `${environment.JSON_API}products`
        );
    }

    public postProducts(
    ): Observable<Product> {
        const options = {
        };

        return this.http.post<Product>(
            `${environment.JSON_API}products`,
            options
        );
    }

    public putProducts(
        product_id?: string,

    ): Observable<Product> {
        const options = {
        };

        return this.http.put<Product>(
            `${environment.JSON_API}products` + {product_id},
            options
        );
    }

    public getUsers(
        user_id: number,
    ): Observable<User[]> {
        const options = {
        };

        return this.http.get<User[]>(
            `${environment.JSON_API}users` + {user_id},
            options
        );
    }

    public getCarts(
        user_id: number,
    ): Observable<Cart[]> {
        const options = {
        };

        return this.http.get<Cart[]>(
            `${environment.JSON_API}carts` + {user_id},
            options
        );
    }
}
