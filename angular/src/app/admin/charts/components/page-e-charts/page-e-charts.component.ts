import { Component, OnInit } from '@angular/core';
import { EChartOption,ECharts } from 'echarts';
import * as echarts from 'echarts';

@Component({
    selector: 'sa-page-e-charts',
    templateUrl: './page-e-charts.component.html',
    styleUrls: ['./page-e-charts.component.css']
})
export class PageEChartsComponent implements OnInit {
    public salechart: EChartOption = {};
    public visitorsOptions: EChartOption = {};
    public visitsOptions: EChartOption = {};
    public sidebarVisible: boolean = true;
    public chartOptions: any = {};
    public pieOptions: any = {};
    public punchCardOptions: any = {};
    public LargeAreaOptions: any = {};
    public xAxisData = [];
    public data1 = [];
    public data2 = [];
    public baranimationOptions: any = {};
    public radarOptions: any = {};

    constructor() {
        this.visitorsOptions = this.loadLineChartOptions([3, 5, 1, 6, 5, 4, 8, 3], "#49c5b6");
        this.visitsOptions = this.loadLineChartOptions([4, 6, 3, 2, 5, 6, 5, 4], "#f4516c");
    }

    ngOnInit() {

        var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p'];
        var days = ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
        var data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]];

        this.chartOptions = {
            color: ["#80EBFE", "#FFC18D", "#D7A0FF", "#FF8DA3", "#88AFFF"],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['Email marketing', 'Alliance advertising', 'Video ad', 'Direct interview', 'Search engine'],
                textStyle:{
                    color: "#C2C2C2"
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                    axisLine: {
                        lineStyle: {
                            color: "#C2C2C2",
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: "#C2C2C2",
                        },
                    },
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: "#C2C2C2",
                        },
                    },
                    splitLine: {
                        show:false,
                        lineStyle: {
                            color: "#EBEEF2",
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: "#C2C2C2",
                        },
                    },
                },
            ],
            series: [
                {
                    name: 'Email marketing',
                    type: 'line',
                    stack: 'Total amount',
                    areaStyle: {},
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Alliance advertising',
                    type: 'line',
                    stack: 'Total amount',
                    areaStyle: {},
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Video ad',
                    type: 'line',
                    stack: 'Total amount',
                    areaStyle: {},
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'Direct interview',
                    type: 'line',
                    stack: 'Total amount',
                    areaStyle: { normal: {} },
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: 'Search engine',
                    type: 'line',
                    stack: 'Total amount',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: { normal: {} },
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };

        this.pieOptions = {
            color: ["#88AFFF", "#FFC18D", "#D7A0FF", "#FF8DA3", "#80EBFE"],
            title: {
                text: 'User access source',
                subtext: 'Purely fictitious',
                x: 'center',
                textStyle: {
                    color: "#C2C2C2"
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['Video ad', 'Email marketing', 'Alliance advertising', 'Direct interview', 'Search engine'],
                textStyle: {
                    color: "#C2C2C2"
                }
            },
            series: [
                {
                    name: 'Access source',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 135, name: 'Video ad' },
                        { value: 310, name: 'Email marketing' },
                        { value: 234, name: 'Alliance advertising' },
                        { value: 335, name: 'Direct interview' },
                        { value: 1548, name: 'Search engine' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        this.punchCardOptions = {
            color: ["#88AFFF"],
            title: {
                text: 'Punch Card of Github',
                textStyle: {
                    color: "#C2C2C2"
                }
            },
            legend: {
                data: ['Punch Card'],
                left: 'right',
                textStyle: {
                    color: "#C2C2C2"
                }
            },
            polar: {},
            tooltip: {
                formatter: function (params) {
                    return params.value[2] + ' commits in ' + hours[params.value[1]] + ' of ' + days[params.value[0]];
                }
            },
            angleAxis: {
                type: 'category',
                data: hours,
                boundaryGap: false,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#EBEEF2",
                        type: 'dashed'
                    }
                },
                axisLine: {
                    show: false
                },
                axisLabel:{
                    color: "#C2C2C2"
                }
            },
            radiusAxis: {
                type: 'category',
                data: days,
                axisLine: {
                    show: false
                },
                axisLabel: {
                    rotate: 45,
                    color: "#C2C2C2"
                }
            },
            series: [{
                name: 'Punch Card',
                type: 'scatter',
                coordinateSystem: 'polar',
                symbolSize: function (val) {
                    return val[2] * 2;
                },
                data: data,
                animationDelay: function (idx) {
                    return idx * 5;
                }
            }]
        };

        var base = +new Date(1968, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var date = [];

        var largeData = [Math.random() * 300];

        for (var i = 1; i < 20000; i++) {
            var now = new Date(base += oneDay);
            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
            let datum = Math.round((Math.random() - 0.5) * 20 + largeData[i - 1]);
            if (datum < 0){
                datum = (datum * -1);
            }
            largeData.push(datum);
        }

        this.LargeAreaOptions = {
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date,
                axisLine: {
                    lineStyle: {
                        color: "#C2C2C2",
                    },
                },
                axisLabel: {
                    textStyle: {
                        color: "#C2C2C2",
                    },
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                axisLine: {
                    lineStyle: {
                        color: "#C2C2C2",
                    },
                },
                splitLine: {
                    show:false,
                    lineStyle: {
                        color: "#EBEEF2",
                    },
                },
                axisLabel: {
                    textStyle: {
                        color: "#C2C2C2",
                    },
                }
            },
            dataZoom: [{
                type: 'inside',
                start: 0,
                end: 10
            }, {
                start: 0,
                end: 10,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
            series: [
                {
                    name: 'Simulation data',
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        color: 'rgb(255, 70, 131)'
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    },
                    data: largeData
                }
            ]
        };

        for (let i = 0; i < 100; i++) {
            this.xAxisData.push('Category ' + i);
            this.data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
            this.data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
        }

        this.baranimationOptions = {
            color: ["#ABC7FF", "#BF89ED"],
            legend: {
                data: ['bar', 'bar2'],
                align: 'left',
                textStyle: {
                    color: "#C2C2C2"
                }
            },
            xAxis: [
                {
                    data: this.xAxisData,
                    silent: false,
                    axisTick: {
                        alignWithLabel: true,
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#C2C2C2",
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: "#C2C2C2",
                        },
                    },
                },
            ],
            yAxis: [
                {
                    axisLine: {
                        lineStyle: {
                            color: "#C2C2C2",
                        },
                    },
                    splitLine: {
                        show:false,
                        lineStyle: {
                            color: "#EBEEF2",
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: "#C2C2C2",
                        },
                    },
                },
            ],
            series: [
                {
                    name: 'bar',
                    type: 'bar',
                    data: this.data1,
                    animationDelay: idx => idx * 10,
                },
                {
                    name: 'bar2',
                    type: 'bar',
                    data: this.data2,
                    animationDelay: idx => idx * 10 + 100,
                },
            ],
            animationEasing: 'elasticOut',
            animationDelayUpdate: idx => idx * 5,
        };

        this.radarOptions = {
            color: ["#FF7590", "#FFB375"],
            tooltip: {},
            legend: {
                data: ['Allocated Budget', 'Actual Spending'],
                textStyle: {
                    color: "#C2C2C2",
                },
            },
            radar: {
                name: {
                    textStyle: {
                        color: "#C2C2C2",
                    },
                },
                indicator: [
                    { name: 'Sales', max: 6500 },
                    { name: 'Administration', max: 16000 },
                    { name: 'Information Techology', max: 30000 },
                    { name: 'Customer Support', max: 38000 },
                    { name: 'Development', max: 52000 },
                    { name: 'Marketing', max: 25000 },
                ],
                splitArea: {
                    areaStyle: {
                        color: 'transparent',
                    },
                },
            },
            series: [
                {
                    name: 'Budget vs Spending',
                    type: 'radar',
                    data: [
                        {
                            value: [4300, 10000, 28000, 35000, 50000, 19000],
                            name: 'Allocated Budget',
                        },
                        {
                            value: [5000, 14000, 28000, 31000, 42000, 21000],
                            name: 'Actual Spending',
                        },
                    ],
                },
            ]
        }

        this.salechart = {
          dataset: {
              source: [
                  ['score', 'amount', 'product'],
                  [57.1, 78254, 'sQuare'],
                  [74.4, 41032, 'Lucid'],
                  [19.6, 91852, 'Riverra'],
                  [32.7, 20112, 'Zexx']
              ]
          },
          grid: {containLabel: true},

          xAxis: {
            name: 'amount',
            axisLabel:{
              color:'#989898'
            }
          },

          yAxis: {
            type: 'category',
            axisLabel:{
              color:'#989898'
            }
          },

          visualMap: [
            {
              orient: 'horizontal',
              left: 'center',
              min: 10,
              max: 100,
              dimension: 0,
              inRange: {
                  color: ['#D7DA8B', '#E15457']
              },
              show: false,
            }
          ],

          series: [
              {
                  type: 'bar',
                  encode: {
                      // Map the "amount" column to X axis.
                      x: 'amount',
                      // Map the "product" column to Y axis
                      y: 'product'
                  }
              }
          ],
        };
    }

    loadLineChartOptions(data, color) {
        let chartOption: EChartOption;
        let xAxisData: Array<any> = new Array<any>();

        data.forEach(element => {
            xAxisData.push("");
        });

        return chartOption = {
            xAxis: {
                type: 'category',
                show: false,
                data: xAxisData,
                boundaryGap: false,
            },
            yAxis: {
                type: 'value',
                show: false
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params, ticket, callback) {
                    return '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + color + ';"></span>' + params[0].value;
                }
            },
            grid: {
                left: '0%',
                right: '0%',
                bottom: '0%',
                top: '0%',
                containLabel: false
            },
            series: [{
                data: data,
                type: 'line',
                showSymbol: false,
                symbolSize: 1,
                lineStyle: {
                    color: color,
                    width: 1
                }
            }]
        };
    }

}
