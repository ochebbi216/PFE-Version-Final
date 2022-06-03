import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { AuthService } from 'src/app/_servicesuser/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  public Linechart: GoogleChartInterface = {
    chartType: GoogleChartType.LineChart,
    dataTable: [
      ['Année', 'Température'],
      ['2014', 19 ],
      ['2015', 20  ],
      ['2016', 20  ],
      ['2017',  22],
      ['2018',  23],
      ['2019',  22 ],
      ['2020',  23 ],
      ['2021',  24]
    ],
    options: {title: 'Moyenne de Température ',
    animation: {
      duration: 1000,
      easing: 'out',
      startup: true
    }}
  };

public Gauge1:GoogleChartInterface={
chartType:GoogleChartType.Gauge,
dataTable:[
  ['Label', 'Value'],
  ['Temp', 20],
  ['Humidité', 40],
  ['Pression', 1]
],
options : {
  width: 420, height: 128,
  redFrom: 90, redTo: 100,
  yellowFrom:75, yellowTo: 90,
  minorTicks: 5,
  animation: {
    duration: 1000,
    easing: 'out',
    startup: true
  }
}
}
public Gauge2:GoogleChartInterface={
  chartType:GoogleChartType.Gauge,
  dataTable:[
    ['Label', 'Value'],
    ['Lumière', 40],
    ['Sol', 55],
    ['Vent',10]
  ],
  options : {
    width: 420, height: 128,
    redFrom: 90, redTo: 100,
    yellowFrom:75, yellowTo: 90,
    minorTicks: 5,
    animation: {
      duration: 1000,
      easing: 'out',
      startup: true
    }
  }}
public combo:GoogleChartInterface={
  chartType:GoogleChartType.ComboChart,
  dataTable:[
    ['Month', 'Safou', 'Fraise', 'Abricot', 'Poire', 'Figue', 'Average'],
    ['2017/07',  165,      938,         522,             998,           450,      614.6],
    ['2018/07',  135,      1120,        599,             1268,          288,      682],
    ['2019/07',  157,      1167,        587,             807,           397,      623],
    ['2020/07',  139,      1110,        615,             968,           215,      609.4],
    ['2021/07',  136,      691,         629,             1026,          366,      569.6]
    ],
    options : {
      title : 'Production de fruits par Kg',
      vAxis: {title: 'Quantité'},
      hAxis: {title: 'Année'},
      seriesType: 'bars',
      series: {2: {type: 'line'}},
      animation: {
        duration: 1000,
        easing: 'out',
        startup: true
      }
      }
}
public trendline:GoogleChartInterface={
  chartType:GoogleChartType.ScatterChart,
  dataTable:[
    ['Ans', 'Production'],
[17,11.5 ], [18,12.5 ], [19,13 ], [20,13.5 ], [21,14 ]

  ],
  options:{
    title: "Production par l'années précedent",
hAxis: {title: 'Ans'},
vAxis: {title: 'Production'},
legend: 'none',
trendlines: { 0: {} },
animation: {
  duration: 1000,
  easing: 'out',
  startup: true
}
  }

}
public geochart:GoogleChartInterface={
  chartType:GoogleChartType.GeoChart,
  dataTable:[
    ['Country', 'Popularity'],
['Germany', 3],
['Canada', 5],
['France', 10],
['Tunisia',11]
  ],
  options:{
    animation: {
      duration: 1000,
      easing: 'out',
      startup: true
    }
  }
}




  myDate: Date | undefined;
  ngOnInit(): void {
    setInterval(() => {         
      //replaced function() by ()=>
      this.myDate = new Date();
      // console.log(this.myDate); 
      // just testing if it is working
    }, 1000);
  }

}
