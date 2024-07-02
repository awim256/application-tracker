"use client";

import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";

export default function BarChart({series, title}: { series: ApexAxisChartSeries, title: string }) {
    const options: ApexOptions = {
        chart: {
            type: 'bar',
            height: 350,
        },
        dataLabels: {
            enabled: false,
        },
        title: {
            text: title,
            align: 'center',
        },
    }

    console.log(series)

    return (
        <Chart options={options} series={series} height={350} type="bar"/>
    )
}
