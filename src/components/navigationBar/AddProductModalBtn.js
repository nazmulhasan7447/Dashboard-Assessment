import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import AddProduct from "./AddProduct";

const AddProductModalBtn = ({ handleShow }) => {
    return (
        <React.Fragment>
            <div className="add_product_btn">
                <button type='button' onClick={()=>handleShow()}>
                    add product
                </button>
            </div>
        </React.Fragment>
    );
}

export default AddProductModalBtn;