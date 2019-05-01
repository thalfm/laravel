<?php

use Illuminate\Database\Seeder;
use Thalfm\Models\Product;
use Thalfm\Models\ProductInput;

class ProductInputTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = Product::all();
        factory(ProductInput::class, 150)
            ->make()
            ->each(function (ProductInput $input) use ($products) {
                $product = $products->random();
                $input->product_id = $product->id;
                $input->save();
                $product->stock += $input->quantity;
                $product->save();
            });
    }
}
