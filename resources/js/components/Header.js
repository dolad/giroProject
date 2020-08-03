import React from "react";
import { Link, withRouter } from "react-router-dom";

const Header = props => {
    console.log(props);
    return (
        <div>
            <nav className="navbar  navbar-light">
                <div className="container">
                    <Link className="navbar-brand" exact to="/">
                        Home
                    </Link>
                    <Link className="navbar-brand" to="/add-product">
                        Add Product
                    </Link>

                    <Link className="navbar-brand" to="/product">
                        Show products
                    </Link>

                    <Link className="navbar-brand" to="/preview-product">
                        Preview product
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default withRouter(Header);
