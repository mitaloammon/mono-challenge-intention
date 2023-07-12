<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $table = 'products_list';

    protected $fillable = ['id', 'title', 'price', 'category', 'description', 'image', 'intentionId'];

    protected $guarded = ['id'];

    use HasFactory;
}
