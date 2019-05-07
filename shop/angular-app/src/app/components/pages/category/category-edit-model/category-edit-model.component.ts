import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'category-edit-model',
  templateUrl: './category-edit-model.component.html',
  styleUrls: ['./category-edit-model.component.css']
})
export class CategoryEditModelComponent implements OnInit {

  @ViewChild(ModalComponent) modal: ModalComponent;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>()

  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>()

  _categoryId:number;

  category = {
    name: '',
    active: true
  };

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  @Input()
  set categoryId(value:number) {
    const token = window.localStorage.getItem('token');
    this._categoryId = value;
    this.http.get<any>(`http://localhost:8010/api/categories/${value}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
        .subscribe(response => {
          this.category = response.data
        })
  }

  showModal() {
    this.modal.show();
  }

  submit() {
    const token = window.localStorage.getItem('token');
    this.http.put(`http://localhost:8010/api/categories/${this._categoryId}`, this.category, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
        .subscribe(category => {
          this.modal.hide();
          this.onSuccess.emit(category);
        }, error => this.onError.emit(error))
  }
}
