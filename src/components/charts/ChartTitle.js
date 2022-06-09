import React from "react";
import '../../assets/css/chartTitle.css';

const ChartTitle = ({title}) => {
    return (
        <React.Fragment>
            <div className="chart_title">
                <h3 className="mt-5">{title}</h3>
            </div>
        </React.Fragment>   
    );
}

export default ChartTitle;