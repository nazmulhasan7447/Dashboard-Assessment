import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
    return (
        <>
            <center>
                <Spinner animation="border" role="status" style={{ 'color': '#0095A0', 'marginLeft': 'auto', 'marginRight': 'auto' }}>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </center>
        </>
    );
}

export default LoadingSpinner;