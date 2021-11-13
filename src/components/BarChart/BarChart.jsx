import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart() {

    const chartData = {
                    labels: ['Eagles', 'Birdies', 'Pars', 'Bogies', 'Worse'],
                    datasets: [{
                        label: 'Hole Scores',
                        data: [1, 5, 26, 13, 8],
                        backgroundColor: [
                            'Green',
                            'Blue',
                            'Gray',
                            'Yellow',
                            'Red'
                        ]
                    }]
                }
    return (
        <div>
            <Bar
                data={chartData}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    )
}

export default BarChart;