import React, {useState, useEffect, createContext, useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Pie, Bar } from 'react-chartjs-2';
import faker from 'faker';
import '../../assets/css/pieChart.css';
import ChartTitle from './ChartTitle';
import '../../assets/css/mediaQueries.css';
import { pieChartcontextObj } from "../context/PieChartContext";



const Sources = () => {
   
    return (
        <React.Fragment>
            <Col md={6}>
                <Row>
                    <Col md={12}>
                        <ChartTitle title='Sources' />
                    </Col>
                </Row>
                
                <Row>
                    <Col md={5} sm={8} xs={8}>
                        <PieChart />
                    </Col>
                    <Col md={3} sm={4} xs={4}>
                        <SellersOverallStatus />
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Col>
        </React.Fragment>
    );
}

const PieChart = ()=>{

    const {data} = useContext(pieChartcontextObj);

    return(
        <>
        <Pie data={data} />
        </>
    );
}


const SellersOverallStatus = () => {

    const { brandsProductPercentage } = useContext(pieChartcontextObj);
    return (
        <React.Fragment>
            <ul className="pie_chart_status">
                <li className="daraz">
                    Daraz: <strong>{brandsProductPercentage.daraz}%</strong>
                </li>
                <li className="bikroy">
                    Bikroy: <strong>{brandsProductPercentage.bikroy}%</strong>
                </li>
                <li className="pickaboo">
                    Pickaboo:<strong>{brandsProductPercentage.pickaboo}%</strong>
                </li>
            </ul>
        </React.Fragment>
    );
}


export default Sources;