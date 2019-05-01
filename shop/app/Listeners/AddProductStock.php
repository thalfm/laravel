<?php

namespace Thalfm\Listeners;

use Thalfm\Events\ProductInputWasCreated;

class AddProductStock
{

    public function handle(ProductInputWasCreated $event)
    {
        $product = $event->productInput->product;
        $product->stock += $event->productInput->quantity;
        $product->save();
    }
}
