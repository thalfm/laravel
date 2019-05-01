<?php

namespace Thalfm\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class ProductInput extends Model
{
    use Notifiable;

    protected $fillable = ['quantity', 'product_id'];

    protected $dispatchesEvents = [
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
