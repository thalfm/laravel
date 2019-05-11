import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/pages/login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AlertErrorComponent} from './components/bootstrap/alert-error/alert-error.component';
import {ModalComponent} from './components/bootstrap/modal/modal.component';
import {CategoryListComponent} from './components/pages/category/category-list/category-list.component';
import {CategoryNewModalComponent} from './components/pages/category/category-new-modal/category-new-modal.component';
import {CategoryEditModelComponent} from './components/pages/category/category-edit-model/category-edit-model.component';
import {CategoryDeleteModalComponent} from './components/pages/category/category-delete-modal/category-delete-modal.component';
import {ProductListComponent} from './components/pages/product/product-list/product-list.component';
import {ProductNewModalComponent} from './components/pages/product/product-new-modal/product-new-modal.component';
import {ProductEditModelComponent} from './components/pages/product/product-edit-model/product-edit-model.component';
import {ProductDeleteModalComponent} from './components/pages/product/product-delete-modal/product-delete-modal.component';
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        AlertErrorComponent,
        ModalComponent,
        CategoryListComponent,
        CategoryNewModalComponent,
        CategoryEditModelComponent,
        CategoryDeleteModalComponent,
        ProductListComponent,
        ProductNewModalComponent,
        ProductEditModelComponent,
        ProductDeleteModalComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgxPaginationModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
