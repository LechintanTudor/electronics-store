import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

const selectProductState = createFeatureSelector<ProductState>('product');

export const selectCategories = createSelector(
    selectProductState,
    (state) => state.categories
);

export const selectProducts = createSelector(
    selectProductState,
    (state) => state.selectedProducts
);
