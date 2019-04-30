<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use Thalfm\Models\Category;
use Faker\Generator as Faker;

$factory->define(Category::class, function (Faker $faker) {
    return [
        'name' => $faker->colorName
    ];
});
