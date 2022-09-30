import { getCategories, getProducts } from 'src/app/state/product.actions';
import {
    selectCategories,
    selectProducts,
} from 'src/app/state/product.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-product-list-container',
    templateUrl: './product-list-container.component.html',
    styleUrls: ['./product-list-container.component.scss'],
})
export class ProductListContainerComponent implements OnInit {
    categories$ = this.store.select(selectCategories);
    products$ = this.store.select(selectProducts);

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(getCategories());
        this.store.dispatch(getProducts());
    }
}
