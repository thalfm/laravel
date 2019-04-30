<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use Thalfm\Models\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name' => $faker->city,
        'price' => $faker->randomFloat(2, 100, 1000),
        'description' => $faker->text(2000)
    ];
});
