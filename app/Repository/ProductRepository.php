<?php

namespace App\Repository;

use App\Product;
use App\Repository\ProductRepositoryInterface;

class ProductRepository implements ProductRepositoryInterface
{
    protected $guarded = [];

    public function all()
    {
        return Product::orderBy('name')
            ->with('category')
            ->get()
            ->map->format();
    }

    public function findById($productId)
    {
        return Product::where('id', $productId)->with('category')->firstorFail();
    }

    public function update($productId)
    {
        $product = Product::where('id', $productId)->firstorFail();

        $product->update(request()->only("name"));
    }
    public function delete($productId)
    {
        $product = Product::where('id', $productId)->delete();
    }
}
