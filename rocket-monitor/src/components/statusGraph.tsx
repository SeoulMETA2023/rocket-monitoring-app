import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
);

export function StatusLine(props: {
    title: string,
    y: {
        max: number,
        min: number,
        step: number
    },
    dataSets: number[],
    color: string
}) {
    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: props.title,
                color: "#FFFFFF"
            },
        },
        scales: {
            y: {
                min: props.y.min,
                max: props.y.max,
                ticks: {
                    color: "#FFFFFF",
                    stepSize: props.y.step
                }
            },
        }
    };

    const labels = Array.from(props.dataSets, () => "");

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: props.dataSets,
                borderColor: `${props.color}7F`,
                backgroundColor: props.color,
            }
        ],
    };

    return (
        <Line options={options} data={data} className={"bg-gear-black border-dim-gray border-2 rounded-xl"}/>
    );
}
