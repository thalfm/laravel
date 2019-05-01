<?php

namespace Thalfm\Http\Controllers\Api;

use Illuminate\Http\Request;
use Thalfm\Http\Controllers\Controller;
use Thalfm\Http\Requests\ProductOutputRequest;
use Thalfm\Http\Resources\ProductOutputResource;
use Thalfm\Models\ProductOutput;

class ProductOutputController extends Controller
{

    public function index()
    {
        $outputs = ProductOutput::with('product')->paginate();
        return ProductOutputResource::collection($outputs);
    }

    public function store(ProductOutputRequest $request)
    {
        $output = ProductOutput::create($request->all());
        return new ProductOutputResource($output);
    }

    public function show(ProductOutput $output)
    {
        return new ProductOutputResource($output);
    }
}
