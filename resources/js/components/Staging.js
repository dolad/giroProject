import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Staging.scss";
import ProductDetail from "./ProductDetail";

const Staging = () => {
    const [product, setProduct] = useState([]);

    const fetchProduct = async () => {
        await axios
            .get("/api/product")
            .then(response => {
                setProduct(response.data.data);
            })
            .catch(e =>
                console.log(e => {
                    setErrorMessage("Something went wrong check your internet");
                })
            );
    };

    console.log(product);

    useEffect(() => {
        fetchProduct();
    }, []);

    const ProductList = () => {
        return (
            <>
                {product &&
                    product.map(item => {
                        <div className="col-4 col-sm-8 col-md-6 col-lg-4 align-items-center justify-content-center p-3 ">
                            <div className="card">
                                <img
                                    className="card-img"
                                    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"
                                    alt="Vans"
                                />
                                <div className="card-img-overlay d-flex justify-content-end">
                                    <a
                                        href="#"
                                        className="card-link text-danger like"
                                    >
                                        <i className="fas fa-heart"></i>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        {item.product_name}
                                    </h4>

                                    <p className="card-text">
                                        {item.product_description}
                                    </p>

                                    <div className="buy d-flex justify-content-between align-items-center">
                                        <div className="price text-success">
                                            <h5 className="mt-4">
                                                $ {item.product_price}
                                            </h5>
                                        </div>
                                        <a
                                            href="#"
                                            className="btn btn-danger mt-3"
                                        >
                                            <i className="fas fa-shopping-cart"></i>{" "}
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>;
                    })}
            </>
        );
    };

    return (
        <div className="hero">
            <div className="col-12 border p-5">
                <div className="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col col-md-9">
                            <h1 className="pt-5">Giro Product</h1>
                            <div class="hero-content col-md-8 ">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quos numquam tempora, iure
                                    delectus totam minus quam aperiam ratione
                                    dolores magni voluptates ut necessitatibus
                                    odio ipsum fuga, voluptas ab praesentium
                                    nihil?
                                </p>

                                <div class="hero-btn">
                                    <button class="btn custom-btn btn-info mr-5">
                                        Explore
                                    </button>
                                    <button class="btn custom-btn btn-info">
                                        Products
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 images">
                            <div class="graphic">
                                <img
                                    src={require("../../images/hero_landing.svg")}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row border p-5">
                <div className="col-md-10 col-lg-10 col-sm-12">
                    <div className="card-deck">
                        <div className="row">
                            <div className="container">
                                <div className="row d-flex">
                                    {ProductList()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Staging;
