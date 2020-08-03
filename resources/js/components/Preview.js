import React from "react";
import { withRouter } from "react-router-dom";

export const Preview = ({ history }) => {
    const product_name = history.location.state.product_name;
    const product_price = history.location.state.product_price;
    const product_full_details = history.location.state.product_full_details;
    const product_description = history.location.state.product_description;

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
                        Product Name: <span>{product_name}</span>
                    </h4>

                    <div className="rating">10 reviews</div>
                    <p>{product_full_details}</p>

                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <h4 className="pre-cost">
                                <span className="glyphicon glyphicon-usd"></span>
                                $ {product_price}
                            </h4>
                        </div>
                    </div>
                    <div className="space-ten"></div>
                    <div className="btn-ground p-5">
                        <button type="button" className="btn btn-primary p-2">
                            Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Preview);
