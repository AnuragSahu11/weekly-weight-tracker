import React from 'react'
import { Line } from 'react-chartjs-2'

function LineChart(props) {
    const data = {
        labels: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
        datasets: [
            {
                label:'Weight',
                data:props.weekData
            }
        ]
    }
    return (
        <div className='LineChart' >
            <Line data={data} />
        </div>
    )
}

export default LineChart
