<?php

namespace Thalfm\Http\Controllers\Api;

use Thalfm\Http\Controllers\Controller;
use Thalfm\Http\Requests\ProductRequest;
use Thalfm\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        return Product::paginate(10);
    }

    public function store(ProductRequest $request)
    {
        $product = Product::create($request->all());
        $product->refresh();
        return $product;
    }

    public function show(Product $product)
    {
        return $product;
    }

    public function update(ProductRequest $request, Product $product)
    {
        $product->fill($request->all());
        $product->save();

        return $product;
    }

    /**
     * @param Product $product
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return response([], 204);
    }
}
