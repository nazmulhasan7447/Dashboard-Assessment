import React from "react";
import '../../assets/css/productList.css';
import ProductTable from "./ProductTable";

const ProductList = () => {

    return (
        <React.Fragment>
            <div className="container">

                <div className="row mt-5">
                    <div className="col-6">
                        <div className="productList__header">
                            <h3>
                                All Products
                            </h3>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="product_list_sortings">
                            <div className='content'>
                                <label>Sort by:</label>
                                <select name="sort_product_list">
                                    <option>All products</option>
                                    <option>Price</option>
                                    <option>Max used</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductTable />
            </div>
        </React.Fragment>
    );
}

export default ProductList;