<?php

namespace Thalfm\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Thalfm\Events\ProductInputWasCreated;
use Thalfm\Events\ProductOutputWasCreated;
use Thalfm\Listeners\AddProductStock;
use Thalfm\Listeners\SubProductStock;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        ProductInputWasCreated::class => [
            AddProductStock::class
        ],
        ProductOutputWasCreated::class => [
            SubProductStock::class
        ]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
