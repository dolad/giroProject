<?php

namespace App\Repository;

interface CategoryRepositoryInterface
{

    public function all();

    public function findById($productId);

    public function update($productId, $request);

    public function delete($productId);
    public function create($request);
}
