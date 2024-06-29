"use client";

import {Card} from "@nextui-org/card";
import Chart from 'react-apexcharts'


export default function ApplicationOverview () {

  const state = {
    options: {
      chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [{
      name: 'series-1',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }]
  }


  return (
      <Card>
        <div>
          <div id="chart">
            <Chart options={state.options} series={state.series} type="bar" height={350}/>
          </div>
          <div id="html-dist"></div>
        </div>
      </Card>
  );
}
