import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import ProductListContext from "../context/ProductListContext";
import { product_list } from "../../productList";

const NavSearchBar = () => {

    const { rootData } = useContext(ProductListContext);
    const {setRootData} = useContext(ProductListContext);
    const {setProductList} = useContext(ProductListContext);
    
    // console.log(rootData)

    const searchByTitleOrBrand = (searchText) => {

        if (searchText !== '') {
            console.log(`search text: ${searchText}`)
            let updated_productList = rootData.products.filter((product)=>product.phone_title.toLowerCase().includes(searchText) || product.brand.toLowerCase().includes(searchText));
            
            setRootData(()=>{
                return {...rootData, products:updated_productList, searchedText: searchText}
            })
        }

        else {
            setRootData(()=>{
                return {...rootData, products:product_list, searchedText: searchText}
            })
        }
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