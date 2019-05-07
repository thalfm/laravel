import {Component, OnInit, ViewChild, forwardRef} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {CategoryNewModalComponent} from "../category-new-modal/category-new-modal.component";
import {CategoryEditModelComponent} from "../category-edit-model/category-edit-model.component";
import {CategoryDeleteModalComponent} from "../category-delete-modal/category-delete-modal.component";

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

    categories: Array<{id:number, name:string, active:boolean, created_at:string}> = [];

    @ViewChild(CategoryNewModalComponent)
    categoryNewmodel:CategoryNewModalComponent;
    @ViewChild(CategoryEditModelComponent)
    categoryEditModel:CategoryEditModelComponent;
    @ViewChild(CategoryDeleteModalComponent)
    categoryDeleteModel:CategoryDeleteModalComponent;

    categoryId:number;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.getCategories()
    }

    getCategories() {
        const token = window.localStorage.getItem('token');
        this.http.get<{data: Array<{id:number, name:string, active:boolean, created_at:string}>}>('http://localhost:8010/api/categories', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .subscribe(response => {
                this.categories = response.data
            })
    }


    showmodalInsert() {
        this.categoryNewmodel.showModal();
    }

    onSuccesInsert() {
        this.getCategories();
    }

    onErrorInsert($event: HttpErrorResponse) {
        console.log($event);
    }

    showModalEdit(id: number) {
        this.categoryId = id;
        this.categoryEditModel.showModal();
    }

    onSuccesEdit() {
        this.getCategories();
    }

    onErrorEdit($event: HttpErrorResponse) {
        console.log($event);
    }

    showModalDelete(id: number) {
        this.categoryId = id;
        this.categoryDeleteModel.showModal();
    }

    onSuccesDelete() {
        this.getCategories();
    }

    onErrorDelete($event: HttpErrorResponse) {
        console.log($event);
    }
}
