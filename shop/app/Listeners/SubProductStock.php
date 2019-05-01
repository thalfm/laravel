<?php
/**
 * Created by PhpStorm.
 * User: thales
 * Date: 01/05/2019
 * Time: 13:47
 */

namespace Thalfm\Listeners;


use Thalfm\Events\ProductOutputWasCreated;

class SubProductStock
{
    public function handle(ProductOutputWasCreated $event)
    {
        $product = $event->productOutput->product;
        $product->stock -= $event->productOutput->quantity;
        $product->save();
    }
}