import {Injectable} from "@angular/core";
import {ProductListComponent} from "./product-list.component";
import {NotifyMessageService} from "../../../../services/notify/notify-message.service";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ProductListEditService {

    private _productListComponent: ProductListComponent;

    constructor(private notifyMessage: NotifyMessageService){}

    set productListComponent(value: ProductListComponent) {
        this._productListComponent = value;
    }

    showModalEdit(id: number) {
        this._productListComponent.productId = id;
        this._productListComponent.productEditModel.showModal();
    }

    onSuccesEdit() {
        this.notifyMessage.success('Produto editado com sucesso.');
        this._productListComponent.getCategories();
    }

    onErrorEdit($event: HttpErrorResponse) {
        console.log($event);
    }
}