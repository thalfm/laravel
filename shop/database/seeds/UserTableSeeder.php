<?php

use Illuminate\Database\Seeder;
use Thalfm\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 1)->create([
           'email' => 'admin@user.com'
        ]);

        factory(User::class, 50)->create();
    }
}
