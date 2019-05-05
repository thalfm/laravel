import {Component, OnInit, ViewChild, forwardRef} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {CategoryNewModalComponent} from "../category-new-modal/category-new-modal.component";

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

    categories: Array<{id:number, name:string, active:boolean, created_at:string}> = [];

    @ViewChild(CategoryNewModalComponent)
    categoryNewmodel:CategoryNewModalComponent;
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
}
