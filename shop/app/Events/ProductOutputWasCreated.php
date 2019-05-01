<?php
/**
 * Created by PhpStorm.
 * User: thales
 * Date: 01/05/2019
 * Time: 13:45
 */

namespace Thalfm\Events;


use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Thalfm\Models\ProductOutput;

class ProductOutputWasCreated
{
    use Dispatchable, SerializesModels;

    /**
     * @var ProductOutput
     */
    public $productOutput;

    public function __construct(ProductOutput $productOutput)
    {
        $this->productOutput = $productOutput;
    }
}