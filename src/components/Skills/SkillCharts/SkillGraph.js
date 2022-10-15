import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import './skillgraph.css';

export class SkillGraph extends Component {
    render() {
        const data = {
            labels: ["HTML", "CSS", "JavaScript", "React", "Redux"],
            datasets: [
                {
                    label: 'Top self learning Web technologies',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [95, 80, 75, 90, 68],
                },
            ],
        };
        const data2 = {
            labels: ["JavaScript", "Python", "Java", "C", "C++"],
            datasets: [
                {
                    label: 'Top self learning Programming language',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)"
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)"
                    ],
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [90, 80, 78, 80, 64],
                },
            ],
        };
        return (
            <div style={{marginTop:"20px"}} className="skillgraph_Main">
                <h2>Skills Graph</h2>
                <hr />
                <div data-aos="zoom-in" className="skillgraph_data">
                    <Line className="skillgraph_inner" data={data} />
                </div>
                <div data-aos="zoom-in" className="skillgraph_data">
                    <Bar className="skillgraph_inner" data={data2} />
                </div>
            </div>
        )
    }
}

export default SkillGraph;
