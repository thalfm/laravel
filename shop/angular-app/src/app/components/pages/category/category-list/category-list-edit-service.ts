import {Injectable} from "@angular/core";
import {CategoryListComponent} from "./category-list.component";
import {NotifyMessageService} from "../../../../services/notify/notify-message.service";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CategoryListEditService {

    private _categoryListComponent: CategoryListComponent;

    constructor(private notifyMessage: NotifyMessageService){}

    set categoryListComponent(value: CategoryListComponent) {
        this._categoryListComponent = value;
    }

    showModalEdit(id: number) {
        this._categoryListComponent.categoryId = id;
        this._categoryListComponent.categoryEditModel.showModal();
    }

    onSuccesEdit() {
        this.notifyMessage.success('Categoria editada com sucesso.');
        this._categoryListComponent.getCategories();
    }

    onErrorEdit($event: HttpErrorResponse) {
        console.log($event);
    }
}