<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{

    protected $table = 'addresses';

    protected $fillable = ['id', 'uf', 'city', 'country', 'intentionId'];

    protected $guarded = ['id'];

    use HasFactory;
}
