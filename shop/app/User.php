<?php

namespace Thalfm;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

/**
 * Thalfm\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\User query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Thalfm\User whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
