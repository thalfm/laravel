import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Category} from "../../../../modals";
import {CategoryHttpService} from "../../../../services/http/category-http.service";

@Component({
    selector: 'category-new-modal',
    templateUrl: './category-new-modal.component.html',
    styleUrls: ['./category-new-modal.component.css']
})
export class CategoryNewModalComponent implements OnInit {

    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>()

    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>()

    category: Category = {
        name: '',
        active: true
    };

    constructor(private categoryHttp: CategoryHttpService) {
    }

    ngOnInit() {
    }

    submit() {
        this.categoryHttp
            .create(this.category)
            .subscribe(category => {
                this.modal.hide();
                this.onSuccess.emit(category);
            }, error => this.onError.emit(error))
    }

    showModal() {
        this.modal.show();
    }
}
