<?php

namespace App\Repository;

interface CategoryRepositoryInterface
{

    public function all();

    public function findById($productId);

    public function update($productId);

    public function delete($productId);
}
