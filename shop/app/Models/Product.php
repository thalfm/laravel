<?php

namespace Thalfm\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

/**
 * Thalfm\Models\Products
 *
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Product newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Product newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Product query()
 * @mixin \Eloquent
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property string $description
 * @property float $price
 * @property int $stock
 * @property bool $active
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Product findSimilarSlugs($attribute, $config, $slug)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Product whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Product whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Product whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Product whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Product whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Product wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Product whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Product whereStock($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Product whereUpdatedAt($value)
 * @property-read \Illuminate\Database\Eloquent\Collection|\Thalfm\Models\Category[] $categories
 */
class Product extends Model
{
    use Sluggable;

    protected $fillable = ['name', 'price', 'description', 'active'];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
