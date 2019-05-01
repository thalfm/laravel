<?php

namespace Thalfm\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Thalfm\Events\ProductOutputWasCreated;

class ProductOutput extends Model
{
    use Notifiable;

    protected $fillable = ['quantity', 'product_id'];

    protected $dispatchesEvents = [
        'created' => ProductOutputWasCreated::class
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
