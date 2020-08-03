<?php

namespace App\Repository;

interface ProductRepositoryInterface
{

    public function all();

    public function findById($productId);

    public function update($request, $productId);

    public function delete($productId);

    public function create($request);
}
