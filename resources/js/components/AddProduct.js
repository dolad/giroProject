import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const AddProduct = ({ history }) => {
    const [formInput, setFormInput] = useState({
        product_name: "",
        product_price: 0,
        product_description: "",
        product_full_detail: ""
    });
    const [selectedCategories, setSelectedCategories] = useState(0);
    const {
        product_name,
        product_price,
        product_description,
        product_full_detail
    } = formInput;

    const [category, setCategory] = useState([]);
    // const [image, setImage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const fetchCategory = async () => {
        await axios
            .get("/api/category")
            .then(response => {
                setCategory(response.data.data);
            })
            .catch(e =>
                console.log(e => {
                    setErrorMessage("Something went wrong check your internet");
                })
            );
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    const handleChange = name => event => {
        setFormInput({ ...formInput, [name]: event.target.value });
    };

    const selectOptionHandler = event => {
        setSelectedCategories(event.target.value);
        setErrorMessage("You must Select a category");
    };

    // handling file change //
    // const fileChangeHandler = event => {
    //     let files = event.target.files || event.dataTransfer.files;
    //     if (!files.length) return;
    //     createImage(files[0]);
    // };

    // const createImage = file => {
    //     let reader = new FileReader();
    //     reader.onload = e => {
    //         setImage(e.target.result);
    //     };
    //     reader.readAsDataURL(file);
    // };

    // Select option  handler

    console.log("categories", selectedCategories);

    const selectOption = () => {
        return (
            <select
                class="form-control"
                value={selectedCategories}
                onChange={e => selectOptionHandler(e)}
            >
                {category &&
                    category.map(cat => (
                        <option key={cat.id} value={cat.id}>
                            {cat.name}
                        </option>
                    ))}
            </select>
        );
    };

    const clickSubmit = event => {
        event.preventDefault();
        axios({
            method: "POST",
            url: "/api/product",
            data: {
                name: product_name,
                category_id: parseInt(selectedCategories),
                description: product_description,
                full_details: product_full_detail,
                price: parseInt(product_price)
            }
        })
            .then(response => {
                // go to a new routes
                console.log(response.data.data.name);
                history.push({
                    pathname: "/preview-product",
                    state: {
                        product_name: response.data.data.name,
                        product_price: response.data.data.price,
                        product_full_details: response.data.data.full_details,
                        product_description: response.data.data.data
                    }
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    const formLogin = () => (
        <div class="bg-gradient-primary">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-12 col-md-9">
                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                <div class="row">
                                    <div class="col-lg-10">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h1 class="h4 text-gray-900 mb-4">
                                                    Add you Product here !!
                                                </h1>
                                            </div>
                                            <form
                                                class="user"
                                                encType="multipart/form-data"
                                            >
                                                <div class="form-group">
                                                    <input
                                                        type="Title"
                                                        class="form-control form-control-user"
                                                        id="exampleInputEmail"
                                                        aria-describedby="emailHelp"
                                                        onChange={handleChange(
                                                            "product_name"
                                                        )}
                                                        value={product_name}
                                                        placeholder="Add Product Title"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <input
                                                        type="Title"
                                                        class="form-control form-control-user"
                                                        id="exampleInputEmail"
                                                        aria-describedby="emailHelp"
                                                        onChange={handleChange(
                                                            "product_description"
                                                        )}
                                                        value={
                                                            product_description
                                                        }
                                                        placeholder="Add Short Description"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <input
                                                        type="number"
                                                        class="form-control form-control-user"
                                                        aria-describedby="emailHelp"
                                                        onChange={handleChange(
                                                            "product_price"
                                                        )}
                                                        value={product_price}
                                                        placeholder="Price"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleFormControlFile1">
                                                        Add Image here
                                                    </label>
                                                    <input
                                                        type="file"
                                                        class="form-control-file"
                                                        onChange={e =>
                                                            fileChangeHandler(e)
                                                        }
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleFormControlSelect1">
                                                        Select Category
                                                    </label>
                                                    {selectOption()}
                                                </div>
                                                <div class="form-group">
                                                    <textarea
                                                        class="form-control"
                                                        id="exampleFormControlTextarea1"
                                                        rows="3"
                                                        value={
                                                            product_full_detail
                                                        }
                                                        onChange={handleChange(
                                                            "product_full_detail"
                                                        )}
                                                    ></textarea>
                                                </div>

                                                <button
                                                    class="btn btn-primary btn-user btn-block"
                                                    onClick={clickSubmit}
                                                >
                                                    submit
                                                </button>
                                                <hr />
                                            </form>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    return <>{formLogin()}</>;
};

export default withRouter(AddProduct);
