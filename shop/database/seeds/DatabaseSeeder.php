<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CategoriesTableSeeder::class);
        $this->call(ProductsTableSeeder::class);
        $this->call(ProductInputTableSeeder::class);
        $this->call(ProductOutputsTableSeeder::class);
        $this->call(UserTableSeeder::class);

    }
}
