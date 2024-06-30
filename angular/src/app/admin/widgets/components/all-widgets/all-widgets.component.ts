import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
    selector: 'sa-all-widgets',
    templateUrl: './all-widgets.component.html',
    styleUrls: ['./all-widgets.component.css']
})
export class AllWidgetsComponent implements OnInit {
    public setting: string = "Support";
    public socialOptions: Array<any> = new Array<any>();
    public socialWidgetOptions: Array<any> = new Array<any>();
    public barchartoptionone: EChartOption = {};
    public barchartoptiontwo: EChartOption = {};
    public barchartoptionthree: EChartOption = {};

    constructor() {
        // Options of Social widget
        this.socialOptions = [
            {
                type: "facebook",
                title: "Like",
                count: "123",
            },
            {
                type: "instagram",
                title: "Followers",
                count: "231",
            },
            {
                type: "twitter",
                title: "Followers",
                count: "31",
            },
            {
                type: "google",
                title: "Like",
                count: "254",
            },
            {
                type: "linkedin",
                title: "Followers",
                count: "2510",
            },
            {
                type: "behance",
                title: "Project",
                count: "121",
            },
            {
                type: "google",
                title: "Likes",
                count: "254",
            },
            {
                type: "linkedin",
                title: "Followers",
                count: "2510",
            },
            {
                type: "behance",
                title: "Project",
                count: "121",
            }
        ];

        //Social Media Options
        this.socialWidgetOptions = [
            {
                type: "facebook",
                title: "Facebook",
                iconStyle: "zmdi zmdi-facebook-box m-r-10",
                post1: {
                    iconStyle: "zmdi zmdi-thumb-up col-blue",
                    title: "Post View",
                    value: "2365"
                },
                post2: {
                    iconStyle: "zmdi zmdi-comment-text col-red",
                    title: "Comments",
                    value: "365"
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

        this.barchartoptionone = {
          tooltip: {
            axisPointer: {
                type: 'shadow'
            },
          },

          grid: {
              top:1,
              bottom:0,
              right:0,
              left:0
          },
          xAxis: [
              {
                  type: 'category',
                  boundaryGap: false,
                  axisLine: {
                      show: false
                  },
              }
          ],
          yAxis: [
              {
                  type: 'value',
                  splitLine: {show:false},
                  axisLine: {
                      show:false
                  },
                  axisLabel: {
                    show:false,
                  }
              }
          ],
          series: [
            {
              type: 'bar',
              data:[4,1,5,2,7,3,4],
              itemStyle: {
                  color: "rgba(120,104,218, 0.8)",
              },
              symbolSize: 1,
            }
          ]
        };

        this.barchartoptiontwo = {
          tooltip: {
            axisPointer: {
                type: 'shadow'
            },
          },

          grid: {
              top:1,
              bottom:0,
              right:0,
              left:0
          },
          xAxis: [
              {
                  type: 'category',
                  boundaryGap: false,
                  axisLine: {
                      show: false
                  },
              }
          ],
          yAxis: [
              {
                  type: 'value',
                  splitLine: {show:false},
                  axisLine: {
                      show:false
                  },
                  axisLabel: {
                    show:false,
                  }
              }
          ],
          series: [
            {
              type: 'bar',
              data:[9,8,6,2,7,1,3],
              itemStyle: {
                  color: "rgba(96,186,253, 0.8)",
              },
              symbolSize: 1,
            }
          ]
        };

        this.barchartoptionthree = {
          tooltip: {
            axisPointer: {
                type: 'shadow'
            },
          },

          grid: {
              top:1,
              bottom:0,
              right:0,
              left:0
          },
          xAxis: [
              {
                  type: 'category',
                  boundaryGap: false,
                  axisLine: {
                      show: false
                  },
              }
          ],
          yAxis: [
              {
                  type: 'value',
                  splitLine: {show:false},
                  axisLine: {
                      show:false
                  },
                  axisLabel: {
                    show:false,
                  }
              }
          ],
          series: [
            {
              type: 'bar',
              data:[3,1,7,4,9,5,7],
              itemStyle: {
                  color: "rgba(255,193,7, 0.8)",
              },
              symbolSize: 1,
            }
          ]
        };
        this.socialOptions = [
          {
              title:"MAIL",
              value:"200.1",
              details:"many variations of passages of Lorem Ipsum available",
              socialbgColor: 'bg-simple-c-blue',
              iconName: 'icon-envelope'
          },
          {
            title:"USAGE",
            value:"400.2",
            details:"many variations of passages of Lorem Ipsum available",
            socialbgColor: 'bg-simple-c-pink',
            iconName: 'icon-social-twitter'
          },
          {
            title:"USAGE",
            value:"276.2",
            details:"many variations of passages of Lorem Ipsum available",
            socialbgColor: 'bg-simple-c-green',
            iconName: 'icon-social-facebook'
          }
        ];
    }

    ngOnInit() {
    }

    toggleSetting(selection: string) {
      this.setting = selection;
    }
}
