<?php

namespace Thalfm\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Thalfm\Models\ProductInput;

class ProductInputWasCreated
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    /**
     * @var ProductInput
     */
    public $productInput;

    public function __construct(ProductInput $productInput)
    {
        $this->productInput = $productInput;
    }
}
