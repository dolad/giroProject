<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;
use Illuminate\Support\Str;


$factory->define(Product::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'description' => $faker->text,
        'full_details' => $faker->realText(),
        'price' => $faker->numberBetween($min = 50, $max = 1000),
        'category_id' => function () {
            return App\Category::inRandomOrder()->first()->id;
        },
    ];
});
