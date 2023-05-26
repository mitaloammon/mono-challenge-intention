<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Http;


class ProductController extends Controller
{
    public function index()
    {
        $response = Http::get('https://fakestoreapi.com/products');
        $products = json_decode($response->getBody(), true);

        return response()->json($products);
    }
}
