Highcharts.chart('container', {
       chart: {
           type: 'spline',
          
       },
       title: {
           text: 'Chi phí quảng cáo 30 ngày gần nhất ',
           align: screenLeft,
           style:{
              fontWeight: 'bold',
              fontSize : "20px",
           }
       },
       subtitle: {
           text: '12,498,039 VNĐ ',
           offset:0,
           y: 80,
           x:-150,
           style:{
                  fontSize:"27px",
                  color:'#f6266e',
                  fontWeight: 'bold'
           }
       },
       credits: {
              enabled:false,
        },
       xAxis: {
              lineColor: '#1a1a1a',
              lineWidth: 2,
              tickWidth: 0,
              categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24','25','26','27','28','29','30','31'],
              },
       yAxis: {
              lineColor: '#1a1a1a',
              lineWidth: 2,
              tickWidth: 0,
              gridLineWidth: 0,
              title: {
                     align: 'high',
                     offset: 0,
                     enabled:false,
                     style:{
                            fontSize:'20px'

                     },
                     
                     y: 10,
                     x:250
              }
       },
       tooltip: {
           headerFormat: '<b>{series.name}</b><br>',
           pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
       },
   
       plotOptions: {
           series: {
               marker: {
                   enabled: false
               }
           },
           
       },
   
       colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
   
       // Define the data points. All series have a dummy year
       // of 1970/71 in order to be compared on the same x axis. Note
       // that in JavaScript, months start at 0 for January, 1 for February etc.
       series: [{
              name: 'Landing page 1',
              color:'#6121ee',
              lineColor:'#6131ee',
              data: [7.0, 6.9, 7.0, 7.1, 6.9, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.4, 21.5]
       },
       {
              name: 'Landing page 2',
              color:'#43ba9a',
              lineColor:'#43ba9a',
              data: [10.0, 11.9,26.0, 23.1, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 10.0, 11.9,26.0, 23.1,6.3]
       }
       ],
   
       responsive: {
           rules: [{
               condition: {
                   maxWidth: 600
               },
               chartOptions: {
                      title:{
                            align:'center',
                      },
                     legend: {
                         align: 'center',
                         verticalAlign: 'bottom',
                         layout: 'horizontal'
                     },
                     yAxis: {
                         labels: {
                             align: 'left',
                             x: 0,
                             y: -10
                         },
                         title: {
                             text: null
                         }
                     },
                     subtitle: {
                         text: null
                     },
                     credits: {
                         enabled: false
                     },
                 
               }
           }]
       }
       
   });

   /////

   Highcharts.chart('container1', {
       chart: {
           type: 'spline'
       },
       title: {
           text: 'Số lượt hiển thị 30 ngày gần nhất',
           align: screenLeft,
           style:{
              fontWeight: 'bold',
              fontSize : "20px",
           }
       },
       credits: {
             enabled:false,
       },
       subtitle: {
           text: '5,902 lượt hiển thị',
           offset:0,
           y: 80,
           x:-140,
           style:{
                  fontSize:"27px",
                  color:'#f6266e',
                  fontWeight: 'bold'
           }
       },
       
       xAxis: {
              lineColor: '#1a1a1a',
              lineWidth: 2,
              tickWidth: 0,
              categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24','25','26','27','28','29','30','31'],
              },
       yAxis: {
              lineColor: '#1a1a1a',
              lineWidth: 2,
              tickWidth: 0,
              gridLineWidth: 0,
              title: {
                     align: 'high',
                     offset: 0,
                     enabled:false,
                     style:{
                            fontSize:'20px'

                     },
                     
                     y: 10,
                     x:250
              }
       },
       tooltip: {
           headerFormat: '<b>{series.name}</b><br>',
           pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
       },
   
       plotOptions: {
           series: {
               marker: {
                   enabled: false
               }
           },
           
       },
   
       colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
   
       // Define the data points. All series have a dummy year
       // of 1970/71 in order to be compared on the same x axis. Note
       // that in JavaScript, months start at 0 for January, 1 for February etc.
       series: [{
              name: 'Landing page 1',
              color:'#6121ee',
              lineColor:'#6131ee',
              data: [7.0, 6.9, 7.0, 7.1, 6.9, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.4, 21.5]
       },
       {
              name: 'Landing page 2',
              color:'#43ba9a',
              lineColor:'#43ba9a',
              data: [10.0, 11.9,26.0, 23.1, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 10.0, 11.9,26.0, 23.1,6.3]
       }
       ],
   
       responsive: {
              rules: [{
                  condition: {
                      maxWidth: 600
                  },
                  chartOptions: {
                         title:{
                               align:'center',
                         },
                        legend: {
                            align: 'center',
                            verticalAlign: 'bottom',
                            layout: 'horizontal'
                        },
                        yAxis: {
                            labels: {
                                align: 'left',
                                x: 0,
                                y: -10
                            },
                            title: {
                                text: null
                            }
                        },
                        subtitle: {
                            text: null
                        },
                        credits: {
                            enabled: false
                        },
                    
                  }
              }]
          }
   });