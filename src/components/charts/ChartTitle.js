import React from "react";

const ChartTitle = ({title}) => {
    return (
        <React.Fragment>
            <div className="">
                <h3 className="mt-5">{title}</h3>
            </div>
        </React.Fragment>   
    );
}

export default ChartTitle;