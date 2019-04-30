<?php

use Illuminate\Database\Seeder;
use Thalfm\Models\Category;
use Thalfm\Models\Product;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = Category::all();
        factory(Product::class, 50)
            ->create()
            ->each(function (Product $product) use ($categories){
                $categoryId = $categories->random()->id;
                $product->categories()->attach($categoryId);
            });
    }
}
