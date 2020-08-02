<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Category;

class Product extends Model
{
    protected $fillable = [
        'name', 'category_id', 'full_details', 'description', 'price', ''
    ];

    public function format()
    {
        return [
            'product_name' => $this->name,
            'product_description' => $this->description,
            "product_price" => $this->price,
            "product_category" => $this->category->name,
        ];
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
