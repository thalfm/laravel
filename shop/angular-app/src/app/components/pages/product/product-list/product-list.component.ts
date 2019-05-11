import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductNewModalComponent} from "../product-new-modal/product-new-modal.component";
import {ProductEditModelComponent} from "../product-edit-model/product-edit-model.component";
import {ProductDeleteModalComponent} from "../product-delete-modal/product-delete-modal.component";
import {ProductHttpService} from "../../../../services/http/product-http.service";
import {Product} from "../../../../modals";
import {ProductListInsertService} from "./product-list-insert.service";
import {ProductListEditService} from "./product-list-edit-service";
import {ProductListDeleteService} from "./product-list-delete.service";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: Array<Product> = [];

    @ViewChild(ProductNewModalComponent)
    productNewModel: ProductNewModalComponent;
    @ViewChild(ProductEditModelComponent)
    productEditModel: ProductEditModelComponent;
    @ViewChild(ProductDeleteModalComponent)
    productDeleteModel: ProductDeleteModalComponent;

    productId: number;

    pagination = {
        page: 1,
        totalItems: 0,
        itemsPerPage: 15
    };

    constructor(
        private productHttp: ProductHttpService,
        public productListInsertService: ProductListInsertService,
        public productListEditService: ProductListEditService,
        public productListDeleteService: ProductListDeleteService
    ) {
        this.productListInsertService.productListComponent = this;
        this.productListEditService.productListComponent = this;
        this.productListDeleteService.productListComponent = this;
    }

    ngOnInit() {
        this.getCategories()
    }

    getCategories() {
        this.productHttp.list(this.pagination.page)
            .subscribe(response => {
                this.products = response.data;
                this.pagination.totalItems = response.meta.total;
                this.pagination.itemsPerPage = response.meta.per_page;
            })
    }

    pageChanged(page: number) {
        this.pagination.page = page;
        this.getCategories();
    }
}
