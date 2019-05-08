import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Category} from "../../../../modals";
import {CategoryHttpService} from "../../../../services/http/category-http.service";

@Component({
    selector: 'category-delete-modal',
    templateUrl: './category-delete-modal.component.html',
    styleUrls: ['./category-delete-modal.component.css']
})
export class CategoryDeleteModalComponent implements OnInit {

    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>()

    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>()

    _categoryId: number;

    category: Category = null;

    constructor(private categoryHttp: CategoryHttpService) {
    }

    ngOnInit() {
    }

    @Input()
    set categoryId(value: number) {
        this._categoryId = value;

        if (!this._categoryId) {
            return;
        }

        this.categoryHttp
            .get(value)
            .subscribe(category => this.category = category)
    }

    showModal() {
        this.modal.show();
    }

    destroy() {
        this.categoryHttp
            .destroy(this._categoryId)
            .subscribe(category => {
                this.modal.hide();
                this.onSuccess.emit(category);
            }, error => this.onError.emit(error))
    }

}
