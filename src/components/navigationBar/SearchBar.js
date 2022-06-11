import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import ProductListContext from "../context/ProductListContext";
import { product_list } from "../../productList";

const NavSearchBar = () => {

    const { rootData } = useContext(ProductListContext);
    const {setRootData} = useContext(ProductListContext);

    // function for searching product by title or brand
    const searchByTitleOrBrand = (searchText) => {
        

        let searchedProductList = product_list.filter((product)=>product.phone_title.toLowerCase().includes(searchText) || product.brand.toLowerCase().includes(searchText));
        
        if (searchText !== '' && searchedProductList.length > 0) {
            
            setRootData(()=>{
                return {...rootData, products:searchedProductList, searchedText: searchText}
            })
        }

        if(searchedProductList.length <= 0) {
            setRootData(()=>{
                return {...rootData, products:searchedProductList, searchedText: searchText}
            })
        }


        // else {
        //     setRootData(()=>{
        //         return {...rootData, products:product_list, searchedText: searchText}
        //     })
        // }
    }


    return (
        <React.Fragment>
            <form>
                <input type='text' name="searchProduct" placeholder="Search by Title or Brand" onChange={(e)=>searchByTitleOrBrand(e.target.value)} />
                <button type="submit"><FontAwesomeIcon icon={solid('search')} /></button>
            </form>
        </React.Fragment>
    );
}

export default NavSearchBar;