<?php

namespace Thalfm\Http\Controllers\Api;

use Thalfm\Http\Controllers\Controller;
use Thalfm\Http\Requests\ProductInputRequest;
use Thalfm\Http\Resources\ProductInputResource;
use Thalfm\Models\ProductInput;
use Illuminate\Http\Request;

class ProductInputController extends Controller
{

    public function index()
    {
        $inputs = ProductInput::with('product')->paginate();
        return ProductInputResource::collection($inputs);
    }

    public function store(ProductInputRequest $request)
    {
        $input = ProductInput::create($request->all());
        $product = $input->product;
        $product->stock += $input->quantity;
        $product->save();
        return new ProductInputResource($input);
    }

    public function show(ProductInput $input)
    {
        return new ProductInputResource($input);
    }
}
