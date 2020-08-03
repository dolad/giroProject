import React from "react";

export const ProductDetail = () => {
    return (
        <div className="container product_view">
            <div className="row">
                <div className="col-md-6 product_img">
                    <img
                        src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"
                        className="img-responsive"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="col-md-6 product_content p-3">
                    <h4>
                        Product Id: <span>51526</span>
                    </h4>
                    <div className="rating">
                        <span>
                            <i class="fa fa-star"></i>
                        </span>
                        <span>
                            <i class="fa fa-star"></i>
                        </span>
                        <span>
                            <i class="fa fa-star"></i>
                        </span>
                        <span>
                            <i class="fa fa-star"></i>
                        </span>
                        <span>
                            <i class="fa fa-star"></i>
                        </span>
                        (10 reviews)
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry.
                    </p>

                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <h4 className="pre-cost">
                                <span className="glyphicon glyphicon-usd"></span>
                                $ 160.00
                            </h4>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <select className="form-control" name="select">
                                <option value="" selected="">
                                    Size
                                </option>
                                <option value="black">LM</option>
                                <option value="white">XX</option>
                                <option value="gold">XL</option>
                                <option value="rose gold">L</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-ten"></div>
                    <div className="btn-ground p-5">
                        <button type="button" className="btn btn-primary p-2">
                            <span class="glyphicon glyphicon-heart"></span>
                            Purchase
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
