import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddProduct = ({show, handleClose}) => {

    return (
        <React.Fragment>

            <Row>
                <Col md={12}>
                    <Modal show={show} onHide={handleClose} size='lg' className="add_prodct_modal" centered>
                        <Modal.Header className="modal_header" closeButton closeVariant="white">
                            <Modal.Title>Add Product</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Product name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="productName"
                                        className="productName"
                                        placeholder="Enter your product name"
                                        autoFocus
                                    />
                                </Form.Group>

                                <Form.Group className="row mb-3" controlId="exampleForm.ControlInput1">
                                    <Col>
                                        <Form.Label>Brand</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="brandName"
                                            className="brand"
                                            placeholder="Enter brand name"
                                            autoFocus
                                        />
                                    </Col>

                                    <Col>
                                        <Form.Label>Ram/Rom</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="ramROm"
                                            className="ramRom"
                                            placeholder="Ram/Rom"
                                            autoFocus
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="">Tag</Form.Label>
                                    <Form.Select className="tag" name="tags" id="">
                                        <option>Search and select</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="price"
                                        className="price"
                                        placeholder="50,000"
                                        autoFocus
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>

                        <Modal.Footer className="modal_footer">
                            <Button className="cancel" onClick={handleClose}>
                                <FontAwesomeIcon icon={solid('times-circle')} /> Cancel
                            </Button>
                            <Button className="publish" onClick={handleClose}>
                                <FontAwesomeIcon icon={solid('check-circle')} /> Publish
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>

        </React.Fragment>
    );
}

export default AddProduct;