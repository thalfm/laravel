import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../../modals";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class CategoryHttpService {

    private token = window.localStorage.getItem('token');
    private base_path = 'http://localhost:8010/api/categories';
    private headers = {
        'Authorization': `Bearer ${this.token}`
    };
    private options = {headers: this.headers};

    constructor(private http: HttpClient) {
    }

    list(): Observable<{ data: Array<Category> }> {
        const token = window.localStorage.getItem('token');
        return this.http.get<{ data: Array<Category> }>(this.base_path, this.options);
    }

    get(id: number): Observable<Category> {
        const token = window.localStorage.getItem('token');
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
