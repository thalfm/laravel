import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify/notify-message.service";
import {Injectable} from "@angular/core";
import {CategoryListComponent} from "./category-list.component";

@Injectable({
    providedIn: 'root'
})
export class CategoryListInsertService {

    private _categoryListComponent: CategoryListComponent;

    constructor(private notifyMessage: NotifyMessageService){}

    set categoryListComponent(value: CategoryListComponent) {
        this._categoryListComponent = value;
    }

    showModalInsert() {
        this._categoryListComponent.categoryNewModel.showModal();
    }

    onSuccesInsert() {
        this.notifyMessage.success('Categoria criada com sucesso.');
        this._categoryListComponent.getCategories();
    }

    onErrorInsert($event: HttpErrorResponse) {
        console.log($event);
    }
}