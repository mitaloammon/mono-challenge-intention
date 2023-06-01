<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class intention extends Model
{
    protected $table = 'intentions';

    protected $primaryKey = 'id';

    use HasFactory;
}
