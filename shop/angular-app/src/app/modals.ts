export interface Category {
    id?: number;
    name: string;
    active: boolean;
    readonly created_at?: string;
}

export interface Product {
    id?: number,
    name: string,
    readonly slug?: string,
    price: number,
    description: string,
    readonly stock?: number,
    active: boolean
    readonly created_at?: string;
}

export interface ProductCategory {
    product: Product,
    categories: Category[]
}