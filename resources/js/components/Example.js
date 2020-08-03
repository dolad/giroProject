import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import ProductDetail from "./ProductDetail";
import "./Staging.scss";
import Edit from "./Edit";
import Staging from "./Staging";
import AddProduct from "./AddProduct";
import Preview from "./Preview";

export default class Example extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Staging} />
                        <Route path="/product" component={ProductDetail} />
                        <Route path="/add-product" component={AddProduct} />
                        <Route
                            exact
                            path="/preview-product"
                            component={Preview}
                        />
                        <Route exact path="/preview-product" component={Edit} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

if (document.getElementById("app")) {
    ReactDOM.render(<Example />, document.getElementById("app"));
}
