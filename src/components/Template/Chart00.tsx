import {  component$, useVisibleTask$, } from '@builder.io/qwik';

import ApexCharts from "apexcharts";



export const Chart01 =  component$(() => {

    const options = {
        chart: {
            type: 'bar'
        },
        series: [{
            name: 'sales',
            data: [30,40,45,50,49,60,70,91,125]
        }],
        xaxis: {
            categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
        }
    }


    useVisibleTask$(()=>{
        const grafica = new ApexCharts(document.querySelector("#chart"), options);
        grafica.render()
    })

    
    return(
        <>
            <div
            class="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-lg  sm:px-7.5 xl:col-span-8">
                <div class="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
                    <div class="flex w-full flex-wrap gap-3 sm:gap-5">
                    <div class="flex min-w-47.5">
                        <span class="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
                        <span class="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
                        </span>
                        <div class="w-full">
                        <p class="font-semibold text-primary">Total Revenue</p>
                        <p class="text-sm font-medium">12.04.2022 - 12.05.2022</p>
                        </div>
                    </div>
                    <div class="flex min-w-47.5">
                        <span
                        class="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
                        <span class="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
                        </span>
                        <div class="w-full">
                        <p class="font-semibold text-secondary">Total Sales</p>
                        <p class="text-sm font-medium">12.04.2022 - 12.05.2022</p>
                        </div>
                    </div>
                    </div>
                    <div class="flex w-full max-w-45 justify-end">
                    <div class="inline-flex items-center rounded-md bg-whiter p-1.5 ">
                        <button
                        class="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card ">
                        Day
                        </button>
                        <button
                        class="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card ">
                        Week
                        </button>
                        <button
                        class="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card">
                        Month
                        </button>
                    </div>
                    </div>
                </div>
                <div>
                    <div id="chartOne" class="-ml-5">
                        

                    <div id="chart">
                        
                    </div>


                    </div>
                </div>
            </div>
        </>
    )
});