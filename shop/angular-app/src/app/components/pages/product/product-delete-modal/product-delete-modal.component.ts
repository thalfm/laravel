import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {Product} from "../../../../modals";
import {ProductHttpService} from "../../../../services/http/product-http.service";

@Component({
    selector: 'product-delete-modal',
    templateUrl: './product-delete-modal.component.html',
    styleUrls: ['./product-delete-modal.component.css']
})
export class ProductDeleteModalComponent implements OnInit {

    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>()

    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>()

    _productId: number;

    product: Product = null;

    constructor(private productHttp: ProductHttpService) {
    }

    ngOnInit() {
    }

    @Input()
    set productId(value: number) {
        this._productId = value;

        if (!this._productId) {
            return;
        }

        this.productHttp
            .get(value)
            .subscribe(product => this.product = product)
    }

    showModal() {
        this.modal.show();
    }

    destroy() {
        this.productHttp
            .destroy(this._productId)
            .subscribe(product => {
                this.modal.hide();
                this.onSuccess.emit(product);
            }, error => this.onError.emit(error))
    }

}
