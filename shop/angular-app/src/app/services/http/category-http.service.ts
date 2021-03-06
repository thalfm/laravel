import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../../modals";
import {map} from "rxjs/operators";
import {BaseHttpService} from "./base-http.service";

@Injectable({
    providedIn: 'root'
})
export class CategoryHttpService implements BaseHttpService<Category>{

    private token = window.localStorage.getItem('token');
    private base_path = 'http://localhost:8010/api/categories';
    private headers = {
        'Authorization': `Bearer ${this.token}`
    };
    private options = {headers: this.headers};

    constructor(private http: HttpClient) {
    }

    list(page:number): Observable<{ data: Array<Category>, meta:any }> {
        const params = new HttpParams({
            fromObject: {
                page: page + ""
            }
        });
        return this.http.get<{ data: Array<Category>, meta: any }>(this.base_path, {
            params: params,
            headers: this.headers
        });
    }

    get(id: number): Observable<Category> {
        return this.http
            .get<{ data: Category }>(`${this.base_path}/${id}`, this.options)
            .pipe(
                map(response => response.data)
            );
    }

    create(data: Category): Observable<Category> {
        return this.http
            .post<{ data: Category }>(this.base_path, data, this.options)
            .pipe(
                map(response => response.data)
            );
    }

    update(id: number, data: Category): Observable<Category> {
        return this.http
            .put<{ data: Category }>(`${this.base_path}/${id}`, data, this.options)
            .pipe(
                map(response => response.data)
            );
    }

    destroy(id: number): Observable<any> {
        return this.http
            .delete(`${this.base_path}/${id}`, this.options)
    }
}
