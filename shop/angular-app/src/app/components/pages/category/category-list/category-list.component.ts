import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoryNewModalComponent} from "../category-new-modal/category-new-modal.component";
import {CategoryEditModelComponent} from "../category-edit-model/category-edit-model.component";
import {CategoryDeleteModalComponent} from "../category-delete-modal/category-delete-modal.component";
import {CategoryHttpService} from "../../../../services/http/category-http.service";
import {Category} from "../../../../modals";
import {CategoryListInsertService} from "./category-list-insert.service";
import {CategoryListEditService} from "./category-list-edit-service";
import {CategoryListDeleteService} from "./category-list-delete.service";

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

    categories: Array<Category> = [];

    @ViewChild(CategoryNewModalComponent)
    categoryNewModel: CategoryNewModalComponent;
    @ViewChild(CategoryEditModelComponent)
    categoryEditModel: CategoryEditModelComponent;
    @ViewChild(CategoryDeleteModalComponent)
    categoryDeleteModel: CategoryDeleteModalComponent;

    categoryId: number;

    pagination = {
        page: 1,
        totalItems: 0,
        itemsPerPage: 15
    };

    constructor(
        private categoryHttp: CategoryHttpService,
        public categoryListInsertService: CategoryListInsertService,
        public categoryListEditService: CategoryListEditService,
        public categoryListDeleteService: CategoryListDeleteService
    ) {
        this.categoryListInsertService.categoryListComponent = this;
        this.categoryListEditService.categoryListComponent = this;
        this.categoryListDeleteService.categoryListComponent = this;
    }

    ngOnInit() {
        this.getCategories()
    }

    getCategories() {
        this.categoryHttp.list(this.pagination.page)
            .subscribe(response => {
                this.categories = response.data;
                this.pagination.totalItems = response.meta.total;
                this.pagination.itemsPerPage = response.meta.per_page;
            })
    }

    pageChanged(page: number) {
        this.pagination.page = page;
        this.getCategories();
    }
}
