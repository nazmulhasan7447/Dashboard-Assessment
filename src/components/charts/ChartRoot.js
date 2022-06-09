import React, {useState, useEffect, createContext, useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import BarChart from "./BarChart";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, Title, BarElement, Tooltip, Legend } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import faker from 'faker';
import '../../assets/css/pieChart.css';
import ChartTitle from './ChartTitle';
import { product_list } from "../../productList";
import '../../assets/css/mediaQueries.css';
import { pieChartcontextObj } from "../context/PieChartContext";
import Sources from './Source';




const ChartRoot = () => {
    

    const [brandsProductPercentage, setBrandsProductPercentage] = useState({daraz: 0, bikroy: 0, pickaboo: 0});

    // prototype function for calculating percentage(%) of products based on seller name
    const filterBrandProductPercentage = (productList, brand) => {
        let noOfProducts = productList.filter((product) => product.seller_name === brand).length;
        let percentage = (noOfProducts * 100) / (productList.length);
        return percentage.toFixed(2);
    }


    useEffect(() => {
        let darazBrndProductPercntage = filterBrandProductPercentage(product_list, 'Daraz');
        let bkroyBrndProductPercntage = filterBrandProductPercentage(product_list, 'Bikroy');
        let pickabooBrndProductPercntage = filterBrandProductPercentage(product_list, 'Pickaboo');

        setBrandsProductPercentage(()=>{
            return {...brandsProductPercentage, daraz: darazBrndProductPercntage, bikroy: bkroyBrndProductPercntage, pickaboo: pickabooBrndProductPercntage}
        })

    }, [product_list])

    // data for pie chart
    let data = {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
            
                data: [brandsProductPercentage.daraz,  brandsProductPercentage.bikroy, brandsProductPercentage.pickaboo],
                backgroundColor: [
                    'rgba(132, 175, 39, 1)', // daraz
                    'rgba(0, 149, 160, 1)', // pickaboo
                    'rgba(255, 194, 57, 1)', // bikroy
                ],
                borderColor: [
                    'rgba(132, 175, 39, 1)',
                    'rgba(255, 194, 57, 1)',
                    'rgba(0, 149, 160, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


    // prototype function for checking condition of each product
    const checkCondition = (condition_type) => {
        let noOfProducts = product_list.filter((product, index)=>product[condition_type] === true).length
        return noOfProducts;
    }

    // options and data for bar chart
    const options = {

        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: false,
                text: 'Bar Chart',
            },
        },
        scales: {
            yAxis: {
                min: 0,
                max: 200,
            },
        },
    };

    const labels = ['Official', 'Unofficial', 'Without Warrenty', 'Used'];

    const [condition, setConditioin] = useState({officail: 0, unofficial: 0, withoutWarrenty: 0, used: 0});



    const bar_data = {
        labels,
        datasets: [
            {
                label: 'Condition',
                data: labels.map((label) => {
                    var noOfPorducts;
                    if (label === "Official") {
                        noOfPorducts = checkCondition('official_warranty');
                    }
                    if (label === "Unofficial") {
                        noOfPorducts = checkCondition('unofficial_warranty');
                    }
                    if (label === "Without Warrenty") {
                        noOfPorducts = checkCondition('no_warranty');
                    }
                    if (label === "Used") {
                        noOfPorducts = checkCondition('used_phone');
                    }
                    return noOfPorducts;
                }),
                backgroundColor: 'rgba(0, 149, 160, 1)',
                barThickness: 25,
            },
        ],
    };
    // options and data for bar chart ends


    return (
        <React.Fragment>
            <Container>
                <Row>
                    <pieChartcontextObj.Provider value={{data, brandsProductPercentage}}>
                        <Sources />
                    </pieChartcontextObj.Provider>

                    <BarChart options={options} bar_data={bar_data} />
                </Row>
            </Container>
        </React.Fragment>
    );
}



export default ChartRoot;