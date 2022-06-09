import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, Title, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import faker from 'faker';
import ChartTitle from './ChartTitle';

ChartJS.register(ArcElement, CategoryScale, LinearScale, Tooltip, Title, BarElement, Legend);

const BarChart = ({ options, bar_data }) => {

    return (
        <React.Fragment>
            <Col md={6}>
                <Row>
                    <Col md={12}>
                        <ChartTitle title='Conditions' />
                    </Col>
                </Row>
                
                <Row>
                    <Col md={12}>
                        <Bar options={options} data={bar_data} />
                    </Col>
                </Row>
            </Col>
        </React.Fragment>
    );
}

export default BarChart;