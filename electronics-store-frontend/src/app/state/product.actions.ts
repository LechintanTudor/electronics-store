import { createAction, props } from '@ngrx/store';
import { Category } from '../types/category';
import { Product } from '../types/product';

export const getCategories = createAction('[Product List] Get Categories');

export const getCategoriesSuccess = createAction(
    '[API] Get Categories Success',
    props<{ categories: Category[] }>()
);

export const getCategoriesError = createAction(
    '[API] Get Categories Error',
    props<{ error: string }>()
);

export const getProducts = createAction('[Prouct List] Get Products');

export const getProductsSuccess = createAction(
    '[API] Get Products Success',
    props<{ products: Product[] }>()
);

export const getProductsError = createAction(
    '[API] Get Products Error',
    props<{ error: string }>()
);
