<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreintentionRequest;


class IntentionController extends Controller
{

    public function store(StoreintentionRequest $request)
    {

        $intention = $request->all();

        return response()->json($intention);
    }
}
