import { $, component$, useOnWindow, useVisibleTask$ } from '@builder.io/qwik';
import ApexCharts from "apexcharts";
import moment from 'moment';




interface Props {
    size?: number;
}


export const Chart04 =  component$(({ size=512 }:Props) => {


    //See if document chage size (width)
    useOnWindow(
        "resize",
        $(() => {
            const window1 = window.innerWidth;
            
            console.log(window1)
        })
    );

    useVisibleTask$(()=>{
        
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
            width: size,
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
          }
        }

        const chartSelector = document.querySelectorAll("#chartfour");
        
        if (chartSelector.length) {
            const chartfour = new ApexCharts(
            document.querySelector("#chartfour"),
            chartfourOptions
            );
            chartfour.render();
        }

        
    })


    return(
        <>
        <div class="rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-lg  sm:px-7.5 ">
            <div class="flex mb-3  mx-auto justify-center  ">

                <div class="mb-2 ">
                    <div id="chartfour" class="mx-auto flex justify-center items-center" ></div>
                </div>

            </div>
        </div>
        </>
    )
});