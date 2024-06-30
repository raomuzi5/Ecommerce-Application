import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-blog-dashboard',
  templateUrl: './blog-dashboard.component.html',
  styleUrls: ['./blog-dashboard.component.scss']
})
export class BlogDashboardComponent implements OnInit {

  public totalLeads: EChartOption = {};
  public totalConnections: EChartOption = {};
  public articals: EChartOption = {};
  public categories: EChartOption = {};
  public socialWidgetOptions:Array<any> = new Array<any>();
  public earningChartOption: any = {
      tooltip: {
          trigger: 'axis'
      },
      grid: {
          left: "5%",
          top: "5%",
          right: "5%",
          bottom: "10%"
      },
      calculable: true,
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2015', '2016', '2017', '2018', '2019', '2020'],
          axisLine: {
              show: false,
              lineStyle: {
                  color: "#888"
              }
          },
          axisTick: {
              show: false
          },
      },
      yAxis: {
          type: 'value',
          axisLine: {
              show: false,
              lineStyle: {
                  color: "#888"
              }
          },
          axisTick: {
              show: false
          },
          splitLine: {
              lineStyle: {
                  color: "#1D2530"
              }
          }
      },
      series: [
          {
              name: 'WebDesign',
              type: 'line',
              smooth: true,
              color: "#FA6283",
              lineStyle: {
                  width: 1
              },
              data: [120,340,458,265,200,865]
          },
          {
              name: 'Photography',
              type: 'line',
              smooth: true,
              color: "#349EEF",
              lineStyle: {
                  width: 1
              },
              data: [610,201,450,521,215,450]
          },
          {
              name: 'Technology',
              type: 'line',
              smooth: true,
              color: "#FCCD56",
              lineStyle: {
                  width: 1
              },
              data: [301,150,501,265,280,501]
          },
          {
              name: 'Lifestyle',
              type: 'line',
              smooth: true,
              color: "#48C2C2",
              lineStyle: {
                  width: 1
              },
              data: [250,214,410,98,300,410]
          },
          {
              name: 'Sports',
              type: 'line',
              smooth: true,
              color: "#9D67FF",
              lineStyle: {
                  width: 1
              },
              data: [150,250,400,436,249,400]
          }
      ]
  };

  constructor() {
      this.totalLeads = this.loadLineAreaChartOptions([7, 6, 7, 8, 5, 9, 8, 6, 7], "#fff");
      this.totalConnections = this.loadLineAreaChartOptions([6, 5, 7, 4, 5, 3, 8, 6, 5], "#fff");
      this.articals = this.loadLineAreaChartOptions([8, 7, 7, 5, 5, 4, 8, 7, 5], "#fff");
      this.categories = this.loadLineAreaChartOptions([7, 6, 7, 8, 5, 9, 8, 6, 7], "#fff");

      this.socialWidgetOptions = [
          {
              type:"facebook",
              title:"Facebook",
              iconStyle:"zmdi zmdi-facebook-box m-r-10",
              post1:{
                  iconStyle:"zmdi zmdi-thumb-up col-blue",
                  title:"Post View",
                  value:"2365"
              },
              post2: {
                  iconStyle: "zmdi zmdi-comment-text col-red",
                  title: "Comments",
                  value: "365"
              },
              data:[
                  {
                      "title":"AMERICA",
                      "value": 50
                  },
                  {
                      "title": "CANADA",
                      "value": 15
                  },
                  {
                      "title": "ASIA",
                      "value": 35
                  }
              ]
          },
          {
              type: "dribbble",
              title: "Dribbble",
              iconStyle: "zmdi zmdi-dribbble m-r-10",
              post1: {
                  iconStyle: "zmdi zmdi-eye col-amber",
                  title: "Post View",
                  value: "365"
              },
              post2: {
                  iconStyle: "zmdi zmdi-comment-text col-red",
                  title: "Comments",
                  value: "125"
              },
              data: [
                  {
                      "title": "AMERICA",
                      "value": 50
                  },
                  {
                      "title": "CANADA",
                      "value": 15
                  },
                  {
                      "title": "ASIA",
                      "value": 35
                  }
              ]
          },
          {
              type: "twitter",
              title: "Twitter",
              iconStyle: "zmdi zmdi-twitter-box m-r-10",
              post1: {
                  iconStyle: "zmdi zmdi-thumb-up col-blue",
                  title: "Likes",
                  value: "3159"
              },
              post2: {
                  iconStyle: "zmdi zmdi-comment-text col-red",
                  title: "Twitt",
                  value: "462"
              },
              data: [
                  {
                      "title": "AMERICA",
                      "value": 50
                  },
                  {
                      "title": "CANADA",
                      "value": 15
                  },
                  {
                      "title": "ASIA",
                      "value": 35
                  }
              ]
          },
          {
              type: "youtube",
              title: "YouTube",
              iconStyle: "zmdi zmdi-youtube m-r-10",
              post1: {
                  iconStyle: "zmdi zmdi-eye col-amber",
                  title: "Views",
                  value: "5192776"
              },
              post2: {
                  iconStyle: "zmdi zmdi-youtube-play col-red",
                  title: "Subscribe",
                  value: "10000"
              },
              data: [
                  {
                      "title": "AMERICA",
                      "value": 50
                  },
                  {
                      "title": "CANADA",
                      "value": 15
                  },
                  {
                      "title": "ASIA",
                      "value": 35
                  }
              ]
          }
      ];
  }

  ngOnInit() {
  }

  loadLineAreaChartOptions(data, color) {
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
              show: false,
              min: 1
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
