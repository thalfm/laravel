import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/pages/login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CategoryListComponent} from './components/pages/category/category-list/category-list.component';
import { AlertErrorComponent } from './components/bootstrap/alert-error/alert-error.component';
import { ModalComponent } from './components/bootstrap/modal/modal.component';
import { CategoryNewModalComponent } from './components/pages/category/category-new-modal/category-new-modal.component';
import { CategoryEditModelComponent } from './components/pages/category/category-edit-model/category-edit-model.component';
import { CategoryDeleteModalComponent } from './components/pages/category/category-delete-modal/category-delete-modal.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        CategoryListComponent,
        AlertErrorComponent,
        ModalComponent,
        CategoryNewModalComponent,
        CategoryEditModelComponent,
        CategoryDeleteModalComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
