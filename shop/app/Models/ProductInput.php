<?php

namespace Thalfm\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Thalfm\Events\ProductInputWasCreated;

class ProductInput extends Model
{
    use Notifiable;

    protected $fillable = ['quantity', 'product_id'];

    protected $dispatchesEvents = [
        'created' => ProductInputWasCreated::class
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
