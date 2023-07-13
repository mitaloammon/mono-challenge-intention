<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IntentionController;

Route::resource("/intentions", IntentionController::class);
