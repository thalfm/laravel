<?php

namespace Thalfm\Http\Controllers\Api;

use Thalfm\Http\Controllers\Controller;
use Thalfm\Http\Requests\CategoryRequest;
use Thalfm\Http\Resources\CategoryResource;
use Thalfm\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function index()
    {
        return CategoryResource::collection(Category::paginate(5));
    }

    public function store(CategoryRequest $request)
    {
        $category = Category::create($request->all());
        $category->refresh();
        return new CategoryResource($category);
    }

    public function show(Category $category)
    {
        return new CategoryResource($category);
    }

    public function update(CategoryRequest $request, Category $category)
    {
        $category->fill($request->all());
        $category->save();

        return new CategoryResource($category);
    }

    /**
     * @param Category $category
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(Category $category)
    {
        $category->delete();

        return response()->json([], 204);
    }
}
