<?php

namespace Thalfm;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

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
class User extends Authenticatable implements JWTSubject
{
    use Notifiable, SoftDeletes;

    protected $dates = ['deleted_at'];
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

    public function fill(array $attributes)
    {
        !isset($atributes['password']) ?: $attributes['password'] = bcrypt($attributes['password']);
        return parent::fill($attributes);
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->id;
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
       return [
         'email' => $this->email,
         'name' => $this->name
       ];
    }
}
