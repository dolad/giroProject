<?php

namespace App\Repository;

interface ProductRepositoryInterface
{

    public function all();

    public function findById($productId);

    public function update($productId);

    public function delete($productId);
}
