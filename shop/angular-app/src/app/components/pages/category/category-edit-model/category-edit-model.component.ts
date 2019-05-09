import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {Category} from "../../../../modals";
import {CategoryHttpService} from "../../../../services/http/category-http.service";

@Component({
    selector: 'category-edit-model',
    templateUrl: './category-edit-model.component.html',
    styleUrls: ['./category-edit-model.component.css']
})
export class CategoryEditModelComponent implements OnInit {

    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>()

    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>()

    _categoryId: number;

    category: Category = {
        name: '',
        active: true
    };

    constructor(private categoryHttp: CategoryHttpService) {
    }

    ngOnInit() {
        this.category = {
            name: '',
            active: true
        };
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

    submit() {
        this.categoryHttp
            .update(this._categoryId, this.category)
            .subscribe(category => {
                this.modal.hide();
                this.onSuccess.emit(category);
            }, error => this.onError.emit(error))
    }
}
