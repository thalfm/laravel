import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../modals";
import {map} from "rxjs/operators";
import {BaseHttpService} from "./base-http.service";

@Injectable({
    providedIn: 'root'
})
export class ProductHttpService implements BaseHttpService<Product>{

    private token = window.localStorage.getItem('token');
    private base_path = 'http://localhost:8010/api/products';
    private headers = {
        'Authorization': `Bearer ${this.token}`
    };
    private options = {headers: this.headers};

    constructor(private http: HttpClient) {
    }

    list(page:number): Observable<{ data: Array<Product>, meta:any }> {
        const params = new HttpParams({
            fromObject: {
                page: page + ""
            }
        });
        return this.http.get<{ data: Array<Product>, meta: any }>(this.base_path, {
            params: params,
            headers: this.headers
        });
    }

    get(id: number): Observable<Product> {
        return this.http
            .get<{ data: Product }>(`${this.base_path}/${id}`, this.options)
            .pipe(
                map(response => response.data)
            );
    }

    create(data: Product): Observable<Product> {
        return this.http
            .post<{ data: Product }>(this.base_path, data, this.options)
            .pipe(
                map(response => response.data)
            );
    }

    update(id: number, data: Product): Observable<Product> {
        return this.http
            .put<{ data: Product }>(`${this.base_path}/${id}`, data, this.options)
            .pipe(
                map(response => response.data)
            );
    }

    destroy(id: number): Observable<any> {
        return this.http
            .delete(`${this.base_path}/${id}`, this.options)
    }
}
