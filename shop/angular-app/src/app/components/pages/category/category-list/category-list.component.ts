import {Component, OnInit, ViewChild, forwardRef} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {CategoryNewModalComponent} from "../category-new-modal/category-new-modal.component";
import {CategoryEditModelComponent} from "../category-edit-model/category-edit-model.component";
import {CategoryDeleteModalComponent} from "../category-delete-modal/category-delete-modal.component";
import {CategoryHttpService} from "../../../../services/http/category-http.service";
import {Category} from "../../../../modals";
import {NotifyMessageService} from "../../../../services/notify/notify-message.service";

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

    categories: Array<Category> = [];

    @ViewChild(CategoryNewModalComponent)
    categoryNewmodel: CategoryNewModalComponent;
    @ViewChild(CategoryEditModelComponent)
    categoryEditModel: CategoryEditModelComponent;
    @ViewChild(CategoryDeleteModalComponent)
    categoryDeleteModel: CategoryDeleteModalComponent;

    categoryId: number;

    constructor(private categoryHttp: CategoryHttpService, private notifyMessage: NotifyMessageService) {
    }

    ngOnInit() {
        this.getCategories()
    }

    getCategories() {
        this.categoryHttp.list()
            .subscribe(response => {
                this.categories = response.data
            })
    }


    showmodalInsert() {
        this.categoryNewmodel.showModal();
    }

    onSuccesInsert() {
        this.notifyMessage.success('Categoria criada com sucesso.');
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
        this.notifyMessage.error(`Ocorreu um erro ao tentar excluir uma categooria.
        Verifique se esta categoria não esta relacionada com um produto.`);
    }
}
