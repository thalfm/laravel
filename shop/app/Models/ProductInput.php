<?php

namespace Thalfm\Models;

use Illuminate\Database\Eloquent\Model;

class ProductInput extends Model
{
    protected $fillable = ['quantity', 'product_id'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
