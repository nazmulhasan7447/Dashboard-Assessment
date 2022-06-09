import React, { useState, useContext } from "react";
import '../../assets/css/productList.css';
import DefaultPhoneImg from '../../assets/images/default_phone_img.jpg';
import LoadingSpinner from "./Spinner";
import ProductListContext from "../context/ProductListContext";
import { product_list } from "../../productList";

const ProductTable = () => {

    const {rootData} = useContext(ProductListContext);

    const {setProductList} = useContext(ProductListContext);

    const [productLengthLimit, setProductLengthLimit] = useState(10)

    const [showSpinner, setShowSpinner] = useState(false);

    const loadMoreProduct = () => {

        setShowSpinner(true);
        setProductLengthLimit(productLengthLimit + 10);

        let prev_productStartingLenght = productLengthLimit - 10;

        console.log(prev_productStartingLenght)
        console.log(productLengthLimit)

        setProductList(rootData.products.slice(prev_productStartingLenght, productLengthLimit))

        setTimeout(() => {
            setShowSpinner(false);
        }, 500);
    }

    return (
        <React.Fragment>

            <div className="row">
                <div className="col-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Model</th>
                                <th scope="col">Ram/Rom</th>
                                <th scope="col">Tags</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rootData.products && rootData.products.slice(1, productLengthLimit).map((product, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>
                                                    <div className="product_model_main">
                                                        <div className="prodct_img">
                                                            <img src={product.phone_images[0] || DefaultPhoneImg} alt="product model" />
                                                        </div>
                                                        <div className="product_title_brand">
                                                            <h4>{product.phone_title}</h4>
                                                            <h5>{product.brand}</h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{product.ram}/{product.storage}</td>
                                                <td>
                                                    <button type="button" className="bst_value">Best Value</button>
                                                    <button type="button" className="bst_camera">Best Camera</button>
                                                    <button type="button" className="bst_performance">Best Performance</button>
                                                </td>
                                                <td>TK {product.phone_price.toLocaleString() || '00'}</td>
                                            </tr>
                                        </>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>

                {/* <LoadingSpinner /> */}
                {
                    showSpinner && <LoadingSpinner />
                }
                <button type="button" onClick={loadMoreProduct} style={{ 'border': 'none', 'outline': 'none', 'background': '#0095A0', 'marginBottom': '20px', 'marginTop': '20px', 'color': 'white', 'width': '120px', 'height': '35px', 'borderRadius': '3px', 'marginLeft': 'auto', 'marginRight': 'auto' }}>Load More</button>
            </div>
        </React.Fragment>
    );
}

export default ProductTable;