import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {Product} from "../../../../modals";
import {ProductHttpService} from "../../../../services/http/product-http.service";

@Component({
    selector: 'product-new-modal',
    templateUrl: './product-new-modal.component.html',
    styleUrls: ['./product-new-modal.component.css']
})
export class ProductNewModalComponent implements OnInit {

    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>()

    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>()

    product: Product = {
        name: '',
        active: true,
        price: 0,
        description: ''
    };

    constructor(private productHttp: ProductHttpService) {
    }

    ngOnInit() {
    }

    submit() {
        this.productHttp
            .create(this.product)
            .subscribe(product => {
                this.modal.hide();
                this.onSuccess.emit(product);
            }, error => this.onError.emit(error))
    }

    showModal() {
        this.modal.show();
    }
}
