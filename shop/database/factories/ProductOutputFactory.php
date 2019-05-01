<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use Faker\Generator as Faker;
use Thalfm\Models\ProductOutput;

$factory->define(ProductOutput::class, function (Faker $faker) {
    return [
        'quantity' => $faker->numberBetween(1, 10)
    ];
});
