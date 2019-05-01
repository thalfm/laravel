<?php

namespace Thalfm\Http\Controllers\Api;

use Thalfm\Http\Controllers\Controller;
use Thalfm\Models\ProductInput;
use Illuminate\Http\Request;

class ProductInputController extends Controller
{

    public function index()
    {
        return ProductInput::all();
    }

    public function store(Request $request)
    {
        //
    }

    public function show(ProductInput $productInput)
    {
        //
    }
}
