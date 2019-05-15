import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/pages/login/login.component";
import {CategoryListComponent} from "./components/pages/category/category-list/category-list.component";
import {ProductListComponent} from "./components/pages/product/product-list/product-list.component";
import {ProductCategoryListComponent} from "./components/pages/product-category/product-category-list/product-category-list.component";

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'categories/list', component: CategoryListComponent
  },
  {
    path: 'products/list', component: ProductListComponent
  },
  {
    path: 'product/:product/categories/list', component: ProductCategoryListComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
