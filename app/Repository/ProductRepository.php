<?php

namespace App\Repository;

use App\Product;
use App\Repository\ProductRepositoryInterface;
use Illuminate\Support\Facades\Validator;
use Image;

class ProductRepository implements ProductRepositoryInterface
{
    protected $guarded = [];

    public function all()
    {
        $product = Product::orderBy('name')
            ->with('category')
            ->get()
            ->map->format();
        return $this->sendResponse($product, "product show successfully", 201);
    }

    public function findById($productId)
    {
        $product = Product::where('id', $productId)->with('category')->firstorFail();
        return $this->sendResponse($product, "product show successfully", 201);
    }

    public function delete($productId)
    {
        $product = Product::where('id', $productId)->delete();
        return $this->sendResponse($product, "product delete successfully", 204);
    }

    public function create($request)
    {

        $input = $this->validate($request);
        $product = Product::create($input);
        return $this->sendResponse($product, "product create successfully", 201);
    }

    public function update($request, $productId)
    {
        $input = $this->validate($request);
        $product = Product::where('id', $productId)->firstorFail();
        $product->update($input);
        return $this->sendResponse($product, 'product successfully updated', 201);
    }

    public function validate($request)
    {

        $input = $request->all();
        $validator = Validator::make($input, [
            'name' => 'required',
            'description' => 'required',
            'category_id' => "required || integer",
            'full_details' => 'required',
            'price' => 'required || integer',
            'photo' =>  'image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);
        // if ($request->get('file')) {
        //     $image = $request->get('file');
        //     $name = time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
        //     Image::make(file_get_contents($image->base64_image))->save(public_path('images/') . $name);
        //     $input['photos'] = $name;
        // }
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
