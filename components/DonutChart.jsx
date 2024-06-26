// // components/DonutChartComponent.jsx
// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import { Chart, ArcElement, Title, Tooltip, Legend } from 'chart.js'; // Import necessary elements

// // Register necessary elements
// Chart.register(ArcElement, Title, Tooltip, Legend);

// // Component definition
// const DonutChartComponent = () => {
//   const data = {
//     labels: ['Toys', 'Books', 'Electronics', 'Clothing'],
//     datasets: [
//       {
//         label: 'Sales by Category',
//         data: [2494284.72, 1251566.98, 650613.71, 639590.94],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.6)',
//           'rgba(54, 162, 235, 0.6)',
//           'rgba(255, 206, 86, 0.6)',
//           'rgba(75, 192, 192, 0.6)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Sales by Category',
//       },
//     },
//   };

//   return (
//     <div className='w-full md:col-span-1 relative lg:h-[70vh] h-[70vh] m-auto p-4 border rounded-lg bg-white'>
//       <Doughnut data={data} options={options} />
//     </div>
//   );
// };

// export default DonutChartComponent;
// components/DonutChartComponent.jsx
// components/DonutChartComponent.jsx

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Title, Tooltip, Legend } from 'chart.js'; // Import necessary elements
import { data } from '../data/data'; // Import your data

// Register necessary elements
Chart.register(ArcElement, Title, Tooltip, Legend);

// Component definition
const DonutChart = () => {
  // Extracting data from your data structure
  const labels = data.categorySales.map(item => item._id); // Extracting category names
  const salesData = data.categorySales.map(item => item.totalSales); // Extracting total sales

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Sales by Category',
        data: salesData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
        
      }]


    };



  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales by Category',
        color:'white',
      },

    },
  };

  return (
    <div className='w-full md:col-span-1 relative lg:h-[70vh] h-[70vh] m-auto p-4 border rounded-lg bg-gray-900'>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default DonutChart;
