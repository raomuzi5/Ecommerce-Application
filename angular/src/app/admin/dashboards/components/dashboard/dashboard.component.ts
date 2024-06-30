import { Component, OnInit,ChangeDetectorRef,Inject } from '@angular/core';
import { EChartOption } from 'echarts';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  public detailsTileOptions:Array<any> = new Array<any>();
  public deviceOption: EChartOption = {};
  public saleOption: EChartOption = {};
  public chatOptions:any = {};
  public visiterchart: EChartOption = {};
  public transitionchart: EChartOption = {};

  constructor(private cdr: ChangeDetectorRef,@Inject(DOCUMENT) private document: Document) {
    this.saleOption = {
      color: ["#2bcbba", "#288cff"],
      legend: {
          data:['data1','data2'],
          bottom: '0',
          textStyle: {
              color: "rgba(152, 152, 152, 1)"
          }
      },
      grid: {
          left: '5%',
          right:'0%',
          top: '2%',
          bottom:'15%',
      },
      tooltip : {
          trigger: 'axis'
      },

      // calculable: true,
      xAxis: [
          {
              type: 'category',
              axisLabel:{
                color:'#989898'
              },
              axisLine:{
                lineStyle:{
                    color: '#f1f1f1',
                }
               },
              data: ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec']
          }
      ],
      yAxis: [
          {
              type: 'value',
              splitLine: {
                lineStyle:{
                    color: '#f1f1f1',
                }
              },
              axisLine:{
                  lineStyle:{
                      color: '#f1f1f1',
                  }
              },
              axisLabel: {
                  color: '#989898',
              }
          }
      ],
      series: [
          {
              name: 'data1',
              type: 'bar',
              data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
              markPoint: {
                  data: [
                      {type: 'max', name: 'Max'},
                      {type: 'min', name: 'Min'}
                  ]
              },
              markLine: {
                  data: [
                      {type: 'average', name: 'Average'}
                  ]
              },
          },
          {
              name: 'data2',
              type: 'bar',
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
              markPoint: {
                  data: [
                      {name: 'Highest', value: 182.2},
                      {name: 'Minimum', value: 2.3}
                  ]
              },
              markLine: {
                  data: [
                    {type : 'average', name : 'Average'}
                  ]
              }
          }
      ]
  };

    this.deviceOption = {
      tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
          bottom: '0',
          data: ['Desktop', 'Mobile', 'Tablet']
      },
      series: [
          {
              name: 'Value',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  label: {
                      show: false,
                       fontSize: 30,
                      fontWeight: 'bold'
                  }
              },
              labelLine: {
                  show: false
              },
              data: [
                  {
                    value: 569,
                    name: 'Desktop',
                    itemStyle: {
                      color: 'rgb(89, 196, 188)'
                    }
                  },
                  {
                    value: 335,
                    name: 'Mobile',
                    itemStyle: {
                      color: 'rgb(99, 122, 174)'
                    }
                  },
                  {
                    value: 234,
                    name: 'Tablet',
                    itemStyle: {
                      color: 'rgb(47, 170, 161)'
                    }
                  },
              ]
          }
      ]
    };

    this.visiterchart = {

      title: {
          left: 'center'
      },
      tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
          left: 'center',
          top: 'bottom',
          data: ['Safari', 'Firefox', 'Chrome', 'Explorer', 'Other'],
          textStyle: {
            color: "rgba(152,152,152, 1)"
          }
      },
      toolbox: {
          show: true,
          feature: {
              mark: {show: true},
              dataView: {show: false, readOnly: false},
              magicType: {
                  show: true,
                  type: ['pie', 'funnel']
              },
              restore: {show: false},
              saveAsImage: {show: false}
          }
      },
      series: [
          {
              name: 'Visitors',
              type: 'pie',
              radius: [50, 110],
              center: ['50%', '50%'],
              roseType: 'area',
              data: [
                  {value: 10, name: 'Safari'},
                  {value: 5, name: 'Firefox'},
                  {value: 15, name: 'Chrome'},
                  {value: 25, name: 'Explorer'},
                  {value: 20, name: 'Other'},
              ]
          }
      ]
    };

    this.chatOptions = {
      messages:[
          {
              type:'received',
              senderProfileImage:"assets/images/xs/avatar6.jpg",
              senderName:"Frank",
              message:"Hello Jessi, myself playing together what is ur thought!"
          },
          {
              type: 'sent',
              reciverProfileImage:"assets/images/xs/avatar3.jpg",
              message: "Ya but not sure"
          },
          {
              type: 'received',
              senderProfileImage: "assets/images/xs/avatar6.jpg",
              senderName: "Gary",
              message: "Could able to play together!"
          },
          {
              type: 'sent',
              reciverProfileImage:"assets/images/xs/avatar3.jpg",
              message: "Yes, its alright"
          },
          {
            type: 'received',
            senderProfileImage: "assets/images/xs/avatar6.jpg",
            senderName: "Gary",
            message: "How Many color available in rainbow"
          }
      ]
    };
  }
  ngOnInit(): void {

  }

  sendMessage($event){
    let message:any = {};
    message.type = "sent";
    message.time = "11:50";
    message.message = $event.message;
    this.chatOptions.messages.push(message);
  }

}
