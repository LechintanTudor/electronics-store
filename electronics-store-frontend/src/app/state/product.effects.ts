import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ProductService } from '../services/product.service';
import {
    getCategories,
    getCategoriesError,
    getCategoriesSuccess,
    getProducts,
    getProductsError,
    getProductsSuccess,
} from './product.actions';

@Injectable({
    providedIn: 'root',
})
export class ProductEffects {
    getCategories$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getCategories),
            mergeMap(() => {
                return this.productService.getCategories().pipe(
                    map((categories) => getCategoriesSuccess({ categories })),
                    catchError(() =>
                        of(
                            getCategoriesError({
                                error: 'Failed to load categories',
                            })
                        )
                    )
                );
            })
        );
    });

    getProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getProducts),
            mergeMap(() => {
                return this.productService.getProducts().pipe(
                    map((products) => getProductsSuccess({ products })),
                    catchError(() =>
                        of(
                            getProductsError({
                                error: 'Failed to load products',
                            })
                        )
                    )
                );
            })
        );
    });

    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) {}
}
