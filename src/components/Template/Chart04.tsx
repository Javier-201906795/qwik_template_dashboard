import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import ApexCharts from "apexcharts";
import moment from 'moment';




interface Props {
    IDdivContainer?: string;
}


export const Chart04 =  component$(({ IDdivContainer }:Props) => {
    //initialize variable
    const widthDivContainer = useSignal(1000)

    const getSizeDiv = $(()=>{
      //get width 
      let container = null
      if(IDdivContainer){
      container = document.getElementById(IDdivContainer)
      }
      if (container){
          const width = container.offsetWidth;
          return width
      }
      return null
    })


    

    useVisibleTask$(async ()=>{

      //-- Get size --
      await getSizeDiv().then((res)=>{
        res ? widthDivContainer.value = res : null
      })

      //-- Option Chart --
      const chartfourOptions = {
        series: [
        {
          name: 'Bob',
          data: [
            {
              x: 'Design',
              y: [
                new Date('2019-03-05').getTime(),
                new Date('2019-03-08').getTime()
              ]
            },
            {
              x: 'Code',
              y: [
                new Date('2019-03-08').getTime(),
                new Date('2019-03-11').getTime()
              ]
            },
            {
              x: 'Test',
              y: [
                new Date('2019-03-11').getTime(),
                new Date('2019-03-16').getTime()
              ]
            }
          ]
        },
        {
          name: 'Joe',
          data: [
            {
              x: 'Design',
              y: [
                new Date('2019-03-02').getTime(),
                new Date('2019-03-05').getTime()
              ]
            },
            {
              x: 'Code',
              y: [
                new Date('2019-03-06').getTime(),
                new Date('2019-03-09').getTime()
              ]
            },
            {
              x: 'Test',
              y: [
                new Date('2019-03-10').getTime(),
                new Date('2019-03-19').getTime()
              ]
            }
          ]
        }
      ],
      chart: {
        width: widthDivContainer.value,
        type: 'rangeBar'
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val:any) {
          const a = moment(val[0])
          const b = moment(val[1])
          const diff = b.diff(a, 'days')
          return diff + (diff > 1 ? ' days' : ' day')
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      xaxis: {
        type: 'datetime'
      },
      legend: {
        position: 'top'
      },
      responsive: [
        {
          breakpoint: 400,
          options: {
            chart: {
              width: 390
            },
          },
        },
        {
          breakpoint: 700,
          options: {
            chart: {
              width: 600
            },
          },
        },
        {
          breakpoint: 850,
          options: {
            chart: {
              width: 750
            },
          },
        },
        {
          breakpoint: 1024,
          options: {
            chart: {
              width: 950
            },
          },
        },
        {
          breakpoint: 1366,
          options: {
            chart: {
              height: 300,
            },
          },
        },
      ],
      
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      }

      //-- Select div chart
      const chartSelector = document.querySelectorAll("#chartfour");
      
      if (chartSelector.length) {
          const chartfour = new ApexCharts(
          document.querySelector("#chartfour"),
          chartfourOptions
          );
          chartfour.render();
      }
      //---END CHART---
        
    })




    return(
        <>
        <div class="rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-lg  sm:px-7.5 ">
            <div class="flex mb-3  mx-auto justify-center  ">

                <div class="mb-2 ">
                    <div id="chartfour" class="mx-auto flex justify-center items-center" >

                    </div>
                </div>

            </div>
        </div>
        </>
    )
});