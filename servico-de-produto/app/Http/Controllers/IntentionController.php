<?php

namespace App\Http\Controllers;

use App\Models\Intention;
use Illuminate\Http\Request;

class IntentionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Intention::with('product')->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return response(Intention::create($request->all()));
    }

    /**
     * Display the specified resource.
     */
    public function show(Intention $products)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Intention $products)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Intention $products)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Intention $products)
    {
        //
    }
}
