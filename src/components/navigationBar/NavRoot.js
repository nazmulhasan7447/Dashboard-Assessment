import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import '../../assets/css/navbar.css';
import NavSearchBar from "./SearchBar";
import AddProductModalBtn from "./AddProductModalBtn";
import '../../assets/css/addProduct.css';
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddProduct from "./AddProduct";

const NavRoot = () => {
    // for showing, closing add product modal
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    
    return (
        <React.Fragment>
            <nav className="navbar navbar-light">
                <Container>
                    <a className="navbar-brand">Logo</a>
                    <div className="searchBar_addProduct_section">
                        <NavSearchBar />
                        <AddProductModalBtn handleShow={handleShow} />
                        <AddProduct show={show} handleClose={handleClose} />
                    </div>
                </Container>
            </nav>
        </React.Fragment>
    );
}

export default NavRoot;