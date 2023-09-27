import { PieChart } from 'react-minimal-pie-chart';

const Statistics = () => {

let totalDonation = 12

console.log(totalDonation);

    const data = [
        { title: 'One', value:12 , color: '#E38627' },
        { title: 'Two', value: 19, color: '#C13C37' },
       
      ];
    
      // Calculate the total value of all data points
      const totalValue = data.reduce((acc, item) => acc + item.value, 0);
    
      // Map the data to include percentage values as labels inside the Pie Chart slices
      const dataWithPercentageLabels = data.map((item) => ({
        ...item,
        title: parseInt(` ${(item.value / totalValue) * 100}%`), // Display the percentage as part of the title
        label: '', // Remove the default label
      }));
    return (
        <div className='w-[50%] mx-auto'>
      <PieChart
        data={dataWithPercentageLabels}
        label={({ dataEntry }) => dataEntry.title +'%'} // Display the title as the label inside the slices
        labelStyle={{
          fontSize: '12px', // Customize the font size of the labels
          fill: 'white', // Customize the font color
        }}
      />
    </div>
    );
};

export default Statistics;