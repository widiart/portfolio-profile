import React, { useEffect, useState } from 'react';
import {Card, CardBody, Image, Spacer, Button} from "@nextui-org/react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, ArcElement, RadialLinearScale, LineElement, Title, Tooltip, Legend, Filler, plugins, } from "chart.js";
import { Line, Doughnut, PolarArea } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, RadialLinearScale, Title, Tooltip, Legend, Filler );

const App = () => {
  const labels = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov","Dec"];
  const datasets = [12, 45, 67, 43, 89, 34, 67, 56, 67, 43, 89, 70];
  
  const doughnutData = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, 45, 67, 43, 89],
        backgroundColor: ['#DE3163', '#FFB4A2', '#FFF2AF', '#6E8E59', '#493D9E'],
        borderColor: ['#DE3163', '#FFB4A2', '#FFF2AF', '#6E8E59', '#493D9E'],
        hoverOffset: 4,
      },
    ],
  };
  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: 'Chart.js Doughnut Chart'
      }
    }
  }

  const line = {
    labels: labels,
    datasets: [
      {
        // Title of Graph
        label: "Line Chart",
        data: datasets,
        backgroundColor: [
          "rgba(14, 116, 144 )",
        ],
        borderColor: [
          "rgb(14, 116, 144, .5)",
        ],
        borderWidth: 1,
        barPercentage: 1,
        borderRadius: {
          topLeft: 5,
          topRight: 5,
        },
        fill: true
      },
      // insert similar in dataset object for making multi bar chart
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    elements: {
        line: {
            tension : 0.4  // smooth lines
        },
    },
    scales: {
      y:  {
        title: {
          display: false,
          text: "Percentage",
        },
        grid: {
          display: false,
        },
        beginAtZero: true,
        max: 100,
      },
      x: {
        title: {
          display: false,
          text: "Month",
        },
        grid: {
          display: false,
        }
      },
    },
  };

  const polarData = {
    labels: labels,
    datasets: [
    {
      label: 'Dataset 1',
      data: [70, 45, 67, 43, 89],
      backgroundColor: ['#DE316390', '#FFB4A290', '#FFF2AF90', '#6E8E5990', '#493D9E90'],
      borderColor: ['#DE316390', '#FFB4A290', '#FFF2AF90', '#6E8E5990', '#493D9E90'],
      hoverOffset: 4,
    }
  ]
  }

  return (
    <div>
      <div className='grid grid-cols-4 grid-rows-2 gap-4 justify-items-center'>
        <Card isBlurred className="border-none w-full h-full" shadow='sm'>
          <CardBody>
            <div className='w-full h-full'>
              <Doughnut data={doughnutData} options={doughnutOptions}/>
            </div>
          </CardBody>
        </Card>
        <Card isBlurred className="border-none w-full h-full col-span-3 row-span-2" shadow='sm'>
          <CardBody className='justify-end'>
            <div className=''>
              <Line data={line} options={options} />
            </div>
          </CardBody>
        </Card>
        <Card isBlurred className="border-none w-full h-full" shadow='sm'>
          <CardBody>
            <div className='w-full h-full'>
              <PolarArea data={polarData} options={doughnutOptions}/>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default App;