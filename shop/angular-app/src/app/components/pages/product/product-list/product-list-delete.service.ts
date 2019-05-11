import {ProductListComponent} from "./product-list.component";
import {NotifyMessageService} from "../../../../services/notify/notify-message.service";
import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ProductListDeleteService {
    private _productListComponent: ProductListComponent;

    constructor(private notifyMessage: NotifyMessageService){}

    set productListComponent(value: ProductListComponent) {
        this._productListComponent = value;
    }

    showModalDelete(id: number) {
        this._productListComponent.productId = id;
        this._productListComponent.productDeleteModel.showModal();
    }

    onSuccesDelete() {
        this.notifyMessage.success('Categoria exluída com sucesso.');
        this._productListComponent.getCategories();
    }

    onErrorDelete($event: HttpErrorResponse) {
        console.log($event);
        this.notifyMessage.error(`Ocorreu um erro ao tentar excluir um produto.`);
    }
}