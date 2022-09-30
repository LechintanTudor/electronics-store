import { Category } from 'src/app/types/category';
import { ProductFilters } from 'src/app/types/product-filters';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-product-filter-form',
    templateUrl: './product-filter-form.component.html',
    styleUrls: ['./product-filter-form.component.scss'],
})
export class ProductFilterFormComponent {
    @Input()
    categories: Category[] = [];

    @Output()
    submitFilters = new EventEmitter<ProductFilters>();

    filterForm = this.fb.nonNullable.group({
        name: [''],
        category: [0],
    });

    constructor(private fb: FormBuilder) {}

    trySubmitFilters(): void {
        const name = this.filterForm.value.name ?? '';
        const categoryId = this.filterForm.value.category ?? 0;
        this.submitFilters.emit({ name, categoryId });
    }
}
