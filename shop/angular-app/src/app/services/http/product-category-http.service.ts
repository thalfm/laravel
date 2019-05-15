import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product, ProductCategory} from "../../modals";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ProductCategoryHttpService {

    private token = window.localStorage.getItem('token');
    private base_path = 'http://localhost:8010/api/products';
    private headers = {
        'Authorization': `Bearer ${this.token}`
    };
    private options = {headers: this.headers};

    productId: number;
    product: Product = null;

    constructor(private http: HttpClient) {
    }

    list(productId: number): Observable<ProductCategory> {

        return this.http
            .get<{ data: ProductCategory }>(
                this.getBasePath(productId),
                this.options
            )
            .pipe(
                map(retponse => retponse.data)
            );
    }

    private getBasePath(productId:number, categoryId:number = null): string
    {
        let basePath = `${this.base_path}/${productId}/categories`;
        if (categoryId) {
            basePath += `/${categoryId}`;
        }

        return basePath;
    }

    create(productId: number, categoriesId: number[]): Observable<ProductCategory> {
        return this.http
            .post<{data: ProductCategory}>(
                this.getBasePath(productId),
                {categories: categoriesId},
                this.options
            )
            .pipe(
                map(retponse => retponse.data)
            );
    }
}
