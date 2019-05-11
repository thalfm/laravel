import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {Product} from "../../../../modals";
import {ProductHttpService} from "../../../../services/http/product-http.service";

@Component({
    selector: 'product-edit-model',
    templateUrl: './product-edit-model.component.html',
    styleUrls: ['./product-edit-model.component.css']
})
export class ProductEditModelComponent implements OnInit {

    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>()

    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>()

    _productId: number;

    product: Product = {
        name: '',
        active: true,
        price: 0,
        description: ''
    };

    constructor(private productHttp: ProductHttpService) {
    }

    ngOnInit() {
        this.product = {
            name: '',
            active: true,
            price: 0,
            description: '',
            stock: 0
        };
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

    submit() {
        this.productHttp
            .update(this._productId, this.product)
            .subscribe(product => {
                this.modal.hide();
                this.onSuccess.emit(product);
            }, error => this.onError.emit(error))
    }
}
