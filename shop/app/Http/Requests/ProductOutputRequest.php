<?php

namespace Thalfm\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Thalfm\Models\Product;
use Thalfm\Rules\HasStock;

class ProductOutputRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $product = Product::find($this->product_id);
        return [
            'quantity' => ['required', 'integer', 'min:1', new HasStock($product)],
            'product_id' => 'required||exists:products,id'

        ];
    }
}
