import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType, GoogleChartWrapper } from 'ng2-google-charts';
import { DatePipe } from '@angular/common';
import { ActionneurDataService } from 'src/app/services/actionneur-data.service';
import { CapteurDataService } from 'src/app/services/capteur-data.service';
import { PasserelleDataService } from 'src/app/services/passerelle-data.service';
import { UserService } from 'src/app/_servicesuser/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {
  pass: any;
  caps: any;
  users: any;
  acts: any;
  imageURI: any;
  chartEditor: any;
constructor( private actdata: ActionneurDataService,private capdata: CapteurDataService, private passdata: PasserelleDataService,private userdata: UserService, ) { }

  myDate: Date | undefined;

  ngOnInit(): void {
    setInterval(() => {         
      //replaced function() by ()=>
      this.myDate = new Date();
      // console.log(this.myDate); 
      // just testing if it is working
    }, 1000);
//actionneur get all
    this.actdata.getall().subscribe(
      res=> {
        this.acts = res;
      },
      err=>{
          console.log(err);
      }
    );
//capteur get all
    this.capdata.getall().subscribe(
      res=> {
        this.caps = res;
      },
      err=>{
          console.log(err);
      }
    );
//passerelle get all
    this.passdata.getall().subscribe(
      res=> {
        this.pass = res;
      },
      err=>{
          console.log(err);
      }
    );
//user get all
this.userdata.getall().subscribe(
  res=> {
    this.users = res;
    const usr=this.users;
  },
  err=>{
      console.log(err);
  }
);
  }

  public Linechart: GoogleChartInterface = {
    chartType: GoogleChartType.LineChart,
    dataTable: [
      ['Year', 'Utilisateur'],
      ['2014', 40 ],
      ['2015', 43 ],
      ['2016', 45 ],
      ['2017', 44 ],
      ['2018', 55 ],
      ['2019', 45 ],
      ['2020', 50 ],
      ['2021', 51]
    ],
    options: {title: 'Nombre des salarié pendant les années précédentes ',
    animation: {
      duration: 1000,
      easing: 'out',
      startup: true
    }
  
  }
  };
  public openAsPNG() {
    this.imageURI = this.Linechart.component!.wrapper.getChart().getImageURI();
  }

  public editChart(chart: GoogleChartInterface) {
    this.chartEditor.openDialog(chart)
                    .then((wrapper: GoogleChartWrapper) => {
                      console.log('dialog OK');
                      console.log('new chart type: ', wrapper.getChartType());
                    })
                    .catch(() => console.log('dialog cancelled'));
  }

  public changeChartType() {
    if (this.Linechart.chartType === 'Linechart') {
      this.Linechart.chartType = 'ColumnChart';
    } else {
      this.Linechart.chartType = 'Linechart';
    }
    this.Linechart.component!.draw();
  }
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
    ['Région', 'Orders'],
['Germany', 22],
['Canada', 41],
['France', 86],
['Tunisia',47]
  ],
  options:{
    animation: {
      duration: 1000,
      easing: 'out',
      startup: true
    }
  }
}





}
