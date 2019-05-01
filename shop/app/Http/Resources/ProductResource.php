<?php

namespace Thalfm\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'price' => (float)$this->price,
            'description' => $this->description,
            'stock' => (int)$this->stock,
            'active' => (boolean)$this->active,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}