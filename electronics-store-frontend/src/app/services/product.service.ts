import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Category } from '../types/category';
import { Product } from '../types/product';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient) {}

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(`${environment.apiUrl}/categories`);
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${environment.apiUrl}/products`);
    }
}
