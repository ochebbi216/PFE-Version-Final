import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { CapteurDataService } from 'src/app/services/capteur-data.service';
import { EndpointService } from 'src/app/services/endpoint.service';
import { AuthService } from 'src/app/_servicesuser/auth.service';
import {jsPDF} from 'jspdf';

@Component({
  selector: 'app-allcapteuruser',
  templateUrl: './allcapteuruser.component.html',
  styleUrls: ['./allcapteuruser.component.css']
})
export class AllcapteuruserComponent implements OnInit {
  @ViewChild('content', {static:false}) el!: ElementRef;

public downloadPDF(){
  let pdf = new jsPDF('p','pt','a2');
  pdf.setPage(3);
  pdf.html(this.el.nativeElement,{
  callback:(pdf)=>{

  pdf.save('Tous les capteurs.pdf');
}}
);
}
  n:Number=0;
  searchText: string;
  users: any;
  username: string;
  firstname: string;
  lastname: string;
  constructor(  public endpoint: EndpointService , private actRoute: ActivatedRoute , private datas: CapteurDataService, private router: Router, public authService: AuthService) {
    this.firstname=authService.getfirstname()
    this.lastname=authService.getlastname()

   }

  ngOnInit(): void {
    this.datas.getall().subscribe(
      res=> {
        this.users = res;
      },
      err=>{
          console.log(err);
      }
    );
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.datas.getbyid(this.id).subscribe(
      res=>{
        this.act = res
      }
    );
    this.username=this.lastname.concat(" ",this.firstname.toString())

   }
act: any = {
  nom:'',
  type:'',
  numCapteur:'',
  valeur:'',
  nomUtilisateur:'',
  date:'',
    }
    
     id: any;
   
     public Linechart: GoogleChartInterface = {
      chartType: GoogleChartType.LineChart,
      dataTable: [
        ['Heure', 'Humidité'],
        ['00:00', 55 ],
        ['04:00', 45 ],
        ['08:00', 40 ],
        ['12:00', 43 ],
        ['16:00', 45 ],
        ['20:00', 44 ],
      ],
      options: {title: 'Humidité en percentage',
      legend: { position: 'bottom', maxLines: 5 },}
    };
    public Linechart2: GoogleChartInterface = {
      chartType: GoogleChartType.SteppedAreaChart,
      dataTable: [
        ['Heure', 'Température'],
        ['00:00',  10],
        ['04:00',  9 ],
        ['08:00', 11 ],
        ['12:00', 20  ],
        ['16:00', 19  ],
        ['20:00', 13],
  
      ],
      options: {title: 'Température en ° ',
      legend: { position: 'bottom' },}
      
  
      
    };
    public Linechart3: GoogleChartInterface = {
      chartType: GoogleChartType.AreaChart,
      dataTable: [
        ['Heure', 'Vent'],
        ['00:00', 25 ],
        ['04:00', 15 ],
        ['08:00', 14 ],
        ['12:00', 13 ],
        ['16:00', 17 ],
        ['20:00', 27 ],
  
      ],
      options: {title: 'vitesse de vent en km/h ',
      legend: { position: 'bottom', maxLines: 5 },
  }
    };
    public Linechart4: GoogleChartInterface = {
      chartType: GoogleChartType.ScatterChart,
      dataTable: [
        ['Heure', 'Lumiére'],
        ['00:00',  5],
        ['04:00',  45 ],
        ['08:00', 400 ],
        ['12:00', 1000  ],
        ['16:00', 950  ],
        ['20:00',  7],
  
      ],
      options: {title: 'Lumiére en lumens',
      legend: { position: 'bottom', maxLines: 5 },}
    };
    public Linechart5: GoogleChartInterface = {
      chartType: GoogleChartType.ColumnChart,
      dataTable: [
        ['Heure', 'Pression'],
        ['00:00', 55 ],
        ['04:00', 45 ],
        ['08:00', 40 ],
        ['12:00', 43 ],
        ['16:00', 45 ],
        ['20:00', 44 ],
  
      ],
      options: {title: 'Pression en pascal (pa) ',
     
        // width: 600,
        // height: 400,
        legend: { position: 'bottom', maxLines: 5 },
        bar: { groupWidth: '45%' },
        isStacked: true
      
    }
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
    redFrom: 45, redTo: 100,
    yellowFrom:35, yellowTo: 45,
    minorTicks: 5
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
      minorTicks: 5
    }}
  
  
  
  
  
      }
    
