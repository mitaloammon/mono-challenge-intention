<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Intention extends Model
{
    use HasFactory;

    protected $table = 'intentions_list';

    protected $fillable = ['id', 'name', 'addressesId'];

    protected $guarded = ['id'];

    public function product(): HasMany
    {
        return $this->hasMany(Products::class);
    }
}
