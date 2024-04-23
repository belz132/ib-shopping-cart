<?php

namespace Mocking\Controllers;

use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    public function getProducts()
    {
        $path = base_path()."/Mocking/JSON/products.json";
        $json = json_decode(file_get_contents($path), true);
        return response()->json($json);

        // Define the path to the JSON file
        // $jsonPath = resource_path('Mocking/JSON/products.json');

        // Read the file content
        // $jsonData = file_get_contents($jsonPath);

        // Convert JSON to PHP array
        // $products = json_decode($jsonData, true);

        // Return as JSON response
        // return response()->json($products);
    }
}
