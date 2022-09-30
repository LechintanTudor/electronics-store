import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListContainerComponent } from './components/containers/product-list-container/product-list-container.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { HeaderBarComponent } from './components/presentational/header-bar/header-bar.component';
import { ProductFilterFormComponent } from './components/presentational/product-filter-form/product-filter-form.component';
import { ProductListComponent } from './components/presentational/product-list/product-list.component';
import { ProductEffects } from './state/product.effects';
import { productReducer } from './state/product.reducer';

@NgModule({
    declarations: [
        AppComponent,
        HeaderBarComponent,
        ProductPageComponent,
        ProductListContainerComponent,
        ProductFilterFormComponent,
        ProductListComponent,
    ],
    imports: [
        // Angular
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,

        // Material
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,

        // NgRx
        StoreModule.forRoot({ product: productReducer }),
        EffectsModule.forRoot([ProductEffects]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
