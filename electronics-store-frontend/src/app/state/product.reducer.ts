import { createReducer, on } from '@ngrx/store';
import { Category } from '../types/category';
import { LoadingStatus } from '../types/loading-status';
import { Product } from '../types/product';
import { ProductFilters, noProductFilters } from '../types/product-filters';
import {
    getCategories,
    getCategoriesError,
    getCategoriesSuccess,
    getProducts,
    getProductsError,
    getProductsSuccess,
} from './product.actions';

export interface ProductState {
    loadingStatus: LoadingStatus;
    error: string | null;
    categories: Category[];
    productFilters: ProductFilters;
    selectedProducts: Product[];
}

export const initialState: ProductState = {
    loadingStatus: LoadingStatus.Initial,
    error: null,
    categories: [],
    productFilters: { name: '', categoryId: 0 },
    selectedProducts: [],
};

export const productReducer = createReducer(
    initialState,

    on(getCategories, (state) => ({
        ...state,
        loadingStatus: LoadingStatus.Loading,
    })),
    on(getCategoriesSuccess, (state, { categories }) => ({
        ...state,
        loadingStatus: LoadingStatus.Success,
        error: null,
        categories,
    })),
    on(getCategoriesError, (state, { error }) => ({
        ...state,
        loadingStatus: LoadingStatus.Error,
        error,
    })),
    on(getProducts, (state) => ({
        ...state,
        loadingStatus: LoadingStatus.Loading,
        productFilters: noProductFilters,
    })),
    on(getProductsSuccess, (state, { products }) => ({
        ...state,
        loadingStatus: LoadingStatus.Success,
        error: null,
        selectedProducts: products,
    })),
    on(getProductsError, (state, { error }) => ({
        ...state,
        loadingStatus: LoadingStatus.Error,
        error,
    }))
);
