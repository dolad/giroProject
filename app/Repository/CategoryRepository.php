<?php

namespace App\Repository;

use App\Category;
use App\Repository\CategoryRepositoryInterface;
use Illuminate\Support\Facades\Validator;


class CategoryRepository implements CategoryRepositoryInterface
{
    protected $guarded = [];

    public function all()
    {
        $category = Category::all();
        return $this->sendResponse($category, "all product retreived", 200);
    }

    public function findById($categoryId)
    {
        $category = Category::where('id', $categoryId)->firstorFail();
        return $this->sendResponse($category, "category created successfully", 200);
    }

    public function update($request, $categoryId)
    {
        $input = $this->validate($request);
        $category = Category::where('id', $categoryId)->firstorFail();
        $category->update($input);
        return $this->sendResponse($category, "category created successfully", 201);
    }
    public function delete($categoryId)
    {
        $category = Category::where('id', $categoryId)->delete();
        return $this->sendResponse($category, "category created successfully", 204);
    }

    public function create($request)
    {
        $input = $this->validate($request);
        $category = Category::create($input);
        return $this->sendResponse($category, "category created successfully", 201);
    }

    public function validate($request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'name' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error', $validator->errors());
        }

        return $input;
    }
    public function sendResponse($result, $message, $code = 200)
    {
        $response = [
            'success' => true,
            'data' => $result,
            'message' => $message,
        ];

        return response()->json($response, $code);
    }

    public function sendError($error, $errorMessage = [], $code = 404)
    {

        $response = [
            'success' => false,
            'message' => $error,
        ];

        if (!empty($errorMessage)) {
            $response['data'] = $errorMessage;
        }

        return response()->json($response, $code);
    }
}
