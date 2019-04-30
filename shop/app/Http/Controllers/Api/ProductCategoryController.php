<?php

namespace Thalfm\Http\Controllers\Api;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Thalfm\Http\Controllers\Controller;
use Thalfm\Models\Category;
use Thalfm\Models\Product;

class ProductCategoryController extends Controller
{
    public function index(Product $product)
    {
        return $product->categories;
    }


    public function store(Request $request, Product $product)
    {
        $changed = $product->categories()->sync($request->categories);
        $categoriesId = $changed['attached'] ?? 0;
        /** @var Collection $categories */
        $categories = Category::whereIn('id', $categoriesId)->get();

        return $categories->count() ? response()->json($categories, 201) : $categories;
    }


    public function destroy($id)
    {
        //
    }
}
