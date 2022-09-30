import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';

const routes: Routes = [
    { path: 'products', component: ProductPageComponent },
    { path: '', pathMatch: 'full', redirectTo: 'products' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
