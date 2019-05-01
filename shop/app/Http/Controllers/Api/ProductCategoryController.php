<?php

namespace Thalfm\Http\Controllers\Api;

use Illuminate\Database\Eloquent\Collection;
use Thalfm\Http\Controllers\Controller;
use Thalfm\Http\Requests\ProductCategoryRequest;
use Thalfm\Http\Resources\ProductCategoryResource;
use Thalfm\Models\Category;
use Thalfm\Models\Product;

class ProductCategoryController extends Controller
{
    public function index(Product $product)
    {
        return new ProductCategoryResource($product);
    }


    public function store(ProductCategoryRequest $request, Product $product)
    {
        $changed = $product->categories()->sync($request->categories);
        $categoriesId = $changed['attached'] ?? 0;
        /** @var Collection $categories */
        $categories = Category::whereIn('id', $categoriesId)->get();

        return $categories->count() ? response()->json(new ProductCategoryResource($product), 201) : $categories;
    }


    public function destroy(Product $product, Category $category)
    {
        $product->categories()->detach($category->id);

        return response()->json([], 204);
    }
}
