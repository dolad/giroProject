<?php

namespace App\Repository;

use App\Category;
use App\Repository\CategoryRepositoryInterface;

class CategoryRepository implements CategoryRepositoryInterface
{
    protected $guarded = [];

    public function all()
    {
        return Category::all();
    }

    public function findById($categoryId)
    {
        return Category::where('id', $categoryId)->firstorFail();
    }

    public function update($categoryId)
    {
        $product = Category::where('id', $categoryId)->firstorFail();

        $product->update(request()->only("name"));
    }
    public function delete($categoryId)
    {
        $product = Category::where('id', $categoryId)->delete();
    }
}
