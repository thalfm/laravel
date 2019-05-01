<?php

namespace Thalfm\Http\Controllers\Api;

use Illuminate\Http\Request;
use Thalfm\Common\OnlyTrashed;
use Thalfm\Http\Controllers\Controller;
use Thalfm\Http\Requests\UserRequest;
use Thalfm\Http\Resources\UserResource;
use Thalfm\Models\Product;
use Thalfm\User;

class UserController extends Controller
{
    use OnlyTrashed;

    public function index(Request $request)
    {
        $query = User::query();
        $query = $this->onlyTrashedIfRequest($request, $query);
        $users = $query->paginate(10);
        return UserResource::collection($users);
    }

    public function store(UserRequest $request)
    {
        $user = User::create($request->all());
        return new UserResource($user);
    }

    public function show(User $user)
    {
        return new UserResource($user);
    }

    public function update(UserRequest $request, User $user)
    {
        $user->fill($request->all());
        $user->save();

        return new UserResource($user);
    }

    public function destroy(User $user)
    {
        $user->delete();

        return response()->json([], 204);
    }
}
