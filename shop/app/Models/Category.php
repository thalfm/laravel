<?php

namespace Thalfm\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

/**
 * Thalfm\Models\Category
 *
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property bool $active
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Category findSimilarSlugs($attribute, $config, $slug)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Category newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Category newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Category query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Category whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Category whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Category whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Category whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Category whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\Models\Category whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property-read \Illuminate\Database\Eloquent\Collection|\Thalfm\Models\Product[] $products
 */
class Category extends Model
{
    use Sluggable;

    protected $fillable = ['name', 'active'];

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

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }
}
