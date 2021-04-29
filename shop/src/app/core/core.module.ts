// Angular
import { AsyncPipe } from '@angular/common';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

// NgRx
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { BannerComponent } from '../shared/components/banner/banner.component';
import { ProductComponent } from '../shared/components/product/product.component';
import { SearchBarComponent } from '../shared/components/search-bar/search-bar.component';
import { ShopEffects, shopReducer as fromShop } from '../shared/state/shop';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from '../shared/components/product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';

// State
const STORE_MODULES = [
    EffectsModule.forRoot([
        ShopEffects
    ]),
    StoreModule.forRoot( {[fromShop.SHOP_FEATURE_KEY]: fromShop.reducer} )
];

// modules
const HTTP_MODULES = [
    HttpClientModule,
]

// Internal
const INTERNAL_COMPONENTS = [
    BannerComponent,
    SearchBarComponent,
    HomeComponent,
    ProductComponent,
    ProductListComponent,
];

const MODULES = [
    CommonModule,
    ReactiveFormsModule,
]


@NgModule({
    declarations: [...INTERNAL_COMPONENTS],
    imports: [STORE_MODULES, MODULES, HTTP_MODULES],
    providers: [HTTP_MODULES],
})
export class CoreModule {}
