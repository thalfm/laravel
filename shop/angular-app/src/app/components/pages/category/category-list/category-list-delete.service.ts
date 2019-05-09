import {CategoryListComponent} from "./category-list.component";
import {NotifyMessageService} from "../../../../services/notify/notify-message.service";
import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CategoryListDeleteService {
    private _categoryListComponent: CategoryListComponent;

    constructor(private notifyMessage: NotifyMessageService){}

    set categoryListComponent(value: CategoryListComponent) {
        this._categoryListComponent = value;
    }

    showModalDelete(id: number) {
        this._categoryListComponent.categoryId = id;
        this._categoryListComponent.categoryDeleteModel.showModal();
    }

    onSuccesDelete() {
        this.notifyMessage.success('Categoria exluída com sucesso.');
        this._categoryListComponent.getCategories();
    }

    onErrorDelete($event: HttpErrorResponse) {
        console.log($event);
        this.notifyMessage.error(`Ocorreu um erro ao tentar excluir uma categooria.
        Verifique se esta categoria não esta relacionada com um produto.`);
    }
}