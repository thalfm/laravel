<?php

namespace Thalfm\Providers;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Thalfm\Common\OnlyTrashed;
use Thalfm\Models\Category;
use Thalfm\Models\Product;
use Thalfm\User;

class RouteServiceProvider extends ServiceProvider
{
    use OnlyTrashed;
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'Thalfm\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //

        parent::boot();

        Route::bind('category', function ($value){
            /** @var Collection $collection */
           $collection = Category::whereId((int)$value)->orWhere('slug', $value)->get();
           return $collection->first();
        });

        Route::bind('product', function ($value){
            /** @var Collection $collection */
            $collection = Product::whereId((int)$value)->orWhere('slug', $value)->get();
            return $collection->first();
        });

        Route::bind('user', function ($value){
            $query = User::query();
            $request = app(Request::class);
            $query = $this->onlyTrashedIfRequest($request,$query);

            return $query->find($value);
        });
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();

        $this->mapWebRoutes();

        //
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
             ->namespace($this->namespace)
             ->group(base_path('routes/web.php'));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api')
             ->middleware('api')
             ->namespace($this->namespace)
             ->group(base_path('routes/api.php'));
    }
}
