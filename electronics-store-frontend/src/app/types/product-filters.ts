export interface ProductFilters {
    name: string;
    categoryId: number;
}

export const noProductFilters: ProductFilters = {
    name: '',
    categoryId: 0,
};
