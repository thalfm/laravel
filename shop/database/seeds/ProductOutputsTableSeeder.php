<?php

use Illuminate\Database\Seeder;
use Thalfm\Models\ProductOutput;

class ProductOutputsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = \Thalfm\Models\Product::all();
        factory(ProductOutput::class, 150)
            ->make()
            ->each(function (ProductOutput $output) use ($products) {
                $product = $products->random();
                $output->product_id = $product->id;
                $output->save();
                $product->stock += $output->quantity;
                $product->save();
            });
    }
}
