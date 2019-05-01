<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use Thalfm\Models\ProductInput;
use Faker\Generator as Faker;

$factory->define(ProductInput::class, function (Faker $faker) {
    return [
        'quantity' => $faker->numberBetween(1, 10)
    ];
});
