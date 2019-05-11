import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify/notify-message.service";
import {Injectable} from "@angular/core";
import {ProductListComponent} from "./product-list.component";

@Injectable({
    providedIn: 'root'
})
export class ProductListInsertService {

    private _productListComponent: ProductListComponent;

    constructor(private notifyMessage: NotifyMessageService){}

    set productListComponent(value: ProductListComponent) {
        this._productListComponent = value;
    }

    showModalInsert() {
        this._productListComponent.productNewModel.showModal();
    }

    onSuccesInsert() {
        this.notifyMessage.success('Produto criado com sucesso.');
        this._productListComponent.getCategories();
    }

    onErrorInsert($event: HttpErrorResponse) {
        console.log($event);
    }
}