import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {jsPDF} from 'jspdf';
import { NgToastService } from 'ng-angular-popup';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { ActionneurDataService } from 'src/app/services/actionneur-data.service';
import { EndpointService } from 'src/app/services/endpoint.service';

@Component({
  selector: 'app-allactionneur',
  templateUrl: './allactionneur.component.html',
  styleUrls: ['./allactionneur.component.css']
})
export class AllactionneurComponent implements OnInit {
  @ViewChild('content', {static:false}) el!: ElementRef;

public downloadPDF(){
  this.toast.info({detail:"votre téléchargement va bientôt commencer ",position:"br",duration:3500})
  let pdf = new jsPDF('p','pt','a2');
  pdf.setPage(3);
  pdf.html(this.el.nativeElement,{
  callback:(pdf)=>{

  pdf.save('Tous les actionneurs.pdf');
}}
);
}
  searchText: string;
  act: any = {
  nom:'',
  type:'',
  numactionneur:'',
  valeur:'',
  nomUtilisateur:'',
  date:''
  }
  id: any;
  acts: any;

  isShownMoteur: boolean = false ; // hidden by default
  isShownVentilateur: boolean = false ; // hidden by default
  isShownLumiere: boolean = false ; // hidden by default
  isShownPompe: boolean = false ; // hidden by default
  isShownChouffage: boolean = false ; // hidden by default
  isShownElectrovanne1: boolean = false ; // hidden by default
  isShownElectrovanne2: boolean = false ; // hidden by default
  isShownElectrovanne3: boolean = false ; // hidden by default
  isShownElectrovanne4: boolean = false ; // hidden by default
  isShownElectrovanne5: boolean = false ; // hidden by default
  isShownElectrovanne6: boolean = false ; // hidden by default
  isShowAll: boolean = false ;
  
toggleShowAll(){
  this.toggleShowMoteur();
  this.toggleShowLumiere();
  this.toggleShowChouffage();
  this.toggleShowVentilateur();
  this.toggleShowPompe();
  this.allAlectrovanne();
  
}
toggleShowMoteur() {
this.isShownMoteur = ! this.isShownMoteur;
}
toggleShowLumiere() {
  this.isShownLumiere = ! this.isShownLumiere;
  }
toggleShowVentilateur() {
this.isShownVentilateur = ! this.isShownVentilateur;
}
toggleShowPompe() {
this.isShownPompe = ! this.isShownPompe;
}
toggleShowChouffage() {
this.isShownChouffage = ! this.isShownChouffage;
}
allAlectrovanne(){
  this.toggleShowElectrovanne1();
  this.toggleShowElectrovanne2();
  this.toggleShowElectrovanne3();
  this.toggleShowElectrovanne4();
  this.toggleShowElectrovanne5();
  this.toggleShowElectrovanne6(); 
  return true
}
toggleShowElectrovanne1() {
this.isShownElectrovanne1 = ! this.isShownElectrovanne1;
}
toggleShowElectrovanne2() {
this.isShownElectrovanne2 = ! this.isShownElectrovanne2;
}
toggleShowElectrovanne3() {
this.isShownElectrovanne3 = ! this.isShownElectrovanne3;
}
toggleShowElectrovanne4() {
this.isShownElectrovanne4 = ! this.isShownElectrovanne4;
}
toggleShowElectrovanne5() {
this.isShownElectrovanne5 = ! this.isShownElectrovanne5;
}
toggleShowElectrovanne6() {
this.isShownElectrovanne6 = ! this.isShownElectrovanne6;
}

  constructor(  public endpoint: EndpointService , private actRoute: ActivatedRoute , private datas: ActionneurDataService, private router: Router,private toast:NgToastService) { }
  public gaugeChart1: GoogleChartInterface = {
    chartType: GoogleChartType.Gauge,
    dataTable: [
      ['Label', 'vitesse'],
      ['Tour/min', 1.78]
    ],
    options: {
      title: 'vitesse de vent en km/h ',
    legend: { position: 'bottom', maxLines: 5 },
      animation: {easing: 'out'},
      width: 150, height: 150,
      greenFrom: 0, greenTo: 3,
      yellowFrom:3, yellowTo:4,
      redFrom:4 ,redTo:5,
      minorTicks: 2,
      min: 0, max: 5,
      majorTicks: ['0', '1', '2', '3', '4', '5'],
      greenColor: '#d0e9c6'
     
    }
  };
  public gaugeChart2: GoogleChartInterface = {
    chartType: GoogleChartType.Gauge,
    dataTable: [
      ['Label', 'vitesse'],
      ['%', 20]
    ],
    options: {
      title: 'vitesse de vent en km/h ',
      animation: {easing: 'out'},
      width: 150, height: 150,
      greenFrom: 0, greenTo: 70,
      yellowFrom:70, yellowTo:85,
      redFrom:85 ,redTo:100,
      minorTicks: 5,
      min: 0, max: 100,
      majorTicks: ['0', '10', '20', '30', '40', '50','60','70','80','90','100'],
      greenColor: '#d0e9c6' 
    }
  };
  public gaugeChart3: GoogleChartInterface = {
    chartType: GoogleChartType.Gauge,
    dataTable: [
      ['Label', 'Temp'],
      ['°C', 40]
    ],
    options: {
      title: 'vitesse de vent en km/h ',
      animation: {easing: 'out'},
      width: 150, height: 150,
      greenFrom: 0, greenTo: 60,
      yellowFrom:60, yellowTo:75,
      redFrom:75 ,redTo:100,
      minorTicks: 10,
      min: 0, max: 100,
      majorTicks: ['0', '10', '20', '30', '40', '50','60','70','80','90','100'],      greenColor: '#d0e9c6'
     
    }
  };
  public gaugeChart4: GoogleChartInterface = {
    chartType: GoogleChartType.Gauge,
    dataTable: [
      ['Label', 'vitesse'],
      ['Tour/min', 2]
    ],
    options: {
      title: 'vitesse de vent en km/h ',
    legend: { position: 'bottom', maxLines: 5 },
      animation: {easing: 'out'},
      width: 150, height: 150,
      greenFrom: 0, greenTo: 3,
      yellowFrom:3, yellowTo:4,
      redFrom:4 ,redTo:5,
      minorTicks: 2,
      min: 0, max: 5,
      majorTicks: ['0', '1', '2', '3', '4', '5'],
      greenColor: '#d0e9c6'
     
    }
  };
  public gaugeChart5: GoogleChartInterface = {
    chartType: GoogleChartType.Gauge,
    dataTable: [
      ['Label', 'vitesse'],
      ['%', 40]
    ],
    options: {
      title: 'vitesse de vent en km/h ',
      animation: {easing: 'out'},
      width: 150, height: 150,
      greenFrom: 0, greenTo: 70,
      yellowFrom:70, yellowTo:85,
      redFrom:85 ,redTo:100,
      minorTicks: 5,
      min: 0, max: 100,
      majorTicks: ['0', '10', '20', '30', '40', '50','60','70','80','90','100'],
      greenColor: '#d0e9c6'
     
    }
  };
  public gaugeChart6: GoogleChartInterface = {
    chartType: GoogleChartType.Gauge,
    dataTable: [
      ['Label', 'Temp'],
      ['°C', 45]
    ],
    options: {
      title: 'vitesse de vent en km/h ',
      animation: {easing: 'out'},
      width: 150, height: 150,
      greenFrom: 0, greenTo: 60,
      yellowFrom:60, yellowTo:75,
      redFrom:75 ,redTo:100,
      minorTicks: 10,
      min: 0, max: 100,
      majorTicks: ['0', '10', '20', '30', '40', '50','60','70','80','90','100'],     
      greenColor: '#d0e9c6'
     
    }
  };
  public gaugeChart7: GoogleChartInterface = {
    chartType: GoogleChartType.Gauge,
    dataTable: [
      ['Label', 'vitesse'],
      ['Tour/min', 2.5]
    ],
    options: {
      title: 'vitesse de vent en km/h ',
    legend: { position: 'bottom', maxLines: 5 },
      animation: {easing: 'out'},
      width: 150, height: 150,
      greenFrom: 0, greenTo: 3,
      yellowFrom:3, yellowTo:4,
      redFrom:4 ,redTo:5,
      minorTicks: 2,
      min: 0, max: 5,
      majorTicks: ['0', '1', '2', '3', '4', '5'],
      greenColor: '#d0e9c6'
     
    }
  };
  public gaugeChart8: GoogleChartInterface = {
    chartType: GoogleChartType.Gauge,
    dataTable: [
      ['Label', 'vitesse'],
      ['%', 70]
    ],
    options: {
      title: 'vitesse de vent en km/h ',
      animation: {easing: 'out'},
      width: 150, height: 150,
      greenFrom: 0, greenTo: 70,
      yellowFrom:70, yellowTo:85,
      redFrom:85 ,redTo:100,
      minorTicks: 5,
      min: 0, max: 100,
      majorTicks: ['0', '10', '20', '30', '40', '50','60','70','80','90','100'],
      greenColor: '#d0e9c6'
     
    }
  };
  public gaugeChart9: GoogleChartInterface = {
    chartType: GoogleChartType.Gauge,
    dataTable: [
      ['Label', 'Temp'],
      ['°C', 45]
    ],
    options: {
      title: 'vitesse de vent en km/h ',
      animation: {easing: 'out'},
      width: 150, height: 150,
      greenFrom: 0, greenTo: 60,
      yellowFrom:60, yellowTo:75,
      redFrom:75 ,redTo:100,
      minorTicks: 10,
      min: 0, max: 100,
      majorTicks: ['0', '10', '20', '30', '40', '50','60','70','80','90','100'],      greenColor: '#d0e9c6'
     
    }
  };
  public gaugeChart10: GoogleChartInterface = {
    chartType: GoogleChartType.Gauge,
    dataTable: [
      ['Label', 'vitesse'],
      ['Tour/min', 3]
    ],
    options: {
      title: 'vitesse de vent en km/h ',
    legend: { position: 'bottom', maxLines: 5 },
      animation: {easing: 'out'},
      width: 150, height: 150,
      greenFrom: 0, greenTo: 3,
      yellowFrom:3, yellowTo:4,
      redFrom:4 ,redTo:5,
      minorTicks: 2,
      min: 0, max: 5,
      majorTicks: ['0', '1', '2', '3', '4', '5'],
      greenColor: '#d0e9c6'
     
    }
  };
  public gaugeChart11: GoogleChartInterface = {
    chartType: GoogleChartType.Gauge,
    dataTable: [
      ['Label', 'vitesse'],
      ['%', 80]
    ],
    options: {
      title: 'vitesse de vent en km/h ',
      animation: {easing: 'out'},
      width: 150, height: 150,
      greenFrom: 0, greenTo: 70,
      yellowFrom:70, yellowTo:85,
      redFrom:85 ,redTo:100,
      minorTicks: 5,
      min: 0, max: 100,
      majorTicks: ['0', '10', '20', '30', '40', '50','60','70','80','90','100'],
      greenColor: '#d0e9c6'
     
    }
  };
  public gaugeChart12: GoogleChartInterface = {
    chartType: GoogleChartType.Gauge,
    dataTable: [
      ['Label', 'Temp'],
      ['°C', 40]
    ],
    options: {
      title: 'vitesse de vent en km/h ',
      animation: {easing: 'out'},
      width: 150, height: 150,
      greenFrom: 0, greenTo: 60,
      yellowFrom:60, yellowTo:75,
      redFrom:75 ,redTo:100,
      minorTicks: 10,
      min: 0, max: 100,
      majorTicks: ['0', '10', '20', '30', '40', '50','60','70','80','90','100'],      greenColor: '#d0e9c6'
     
    }
  };
  public gaugeChart13: GoogleChartInterface = {
    chartType: GoogleChartType.Gauge,
    dataTable: [
      ['Label', 'Temp'],
      ['on', 1]
    ],
    options: {
      title: 'vitesse de vent en km/h ',
      animation: {easing: 'out'},
      width: 150, height: 150,
      greenFrom: 0, greenTo: 100,
      // yellowFrom:60, yellowTo:75,
      // redFrom:75 ,redTo:100,
      minorTicks: 1,
      min: 0, max: 1,
      majorTicks: ['off', 'on'],     
      //  greenColor: '#d0e9c6'
     
    }
  };
  public gaugeChart14: GoogleChartInterface = {
    chartType: GoogleChartType.Gauge,
    dataTable: [
      ['Label', 'Temp'],
      ['on', 1]
    ],
    options: {
      title: 'vitesse de vent en km/h ',
      animation: {easing: 'out'},
      width: 150, height: 150,
      greenFrom: 0, greenTo: 100,
      // yellowFrom:60, yellowTo:75,
      // redFrom:75 ,redTo:100,
      minorTicks: 1,
      min: 0, max: 1,
      majorTicks: ['off', 'on'],     
      //  greenColor: '#d0e9c6'
     
    }
  };
  public gaugeChart15: GoogleChartInterface = {
    chartType: GoogleChartType.Gauge,
    dataTable: [
      ['Label', 'Temp'],
      ['on', 1]
    ],
    options: {
      title: 'vitesse de vent en km/h ',
      animation: {easing: 'out'},
      width: 150, height: 150,
      greenFrom: 0, greenTo: 100,
      // yellowFrom:60, yellowTo:75,
      // redFrom:75 ,redTo:100,
      minorTicks: 1,
      min: 0, max: 1,
      majorTicks: ['off', 'on'],     
      //  greenColor: '#d0e9c6'
     
    }
  };
  public gaugeChart16: GoogleChartInterface = {
    chartType: GoogleChartType.Gauge,
    dataTable: [
      ['Label', 'Temp'],
      ['off', 0]
    ],
    options: {
      title: 'vitesse de vent en km/h ',
      animation: {easing: 'out'},
      width: 150, height: 150,
      greenFrom: 0, greenTo: 100,
      // yellowFrom:60, yellowTo:75,
      // redFrom:75 ,redTo:100,
      minorTicks: 1,
      min: 0, max: 1,
      majorTicks: ['off', 'on'],     
      //  greenColor: '#d0e9c6'
     
    }
  };
  public gaugeChart17: GoogleChartInterface = {
    chartType: GoogleChartType.Gauge,
    dataTable: [
      ['Label', 'Temp'],
      ['on', 1]
    ],
    options: {
      title: 'vitesse de vent en km/h ',
      animation: {easing: 'out'},
      width: 150, height: 150,
      greenFrom: 0, greenTo: 100,
      // yellowFrom:60, yellowTo:75,
      // redFrom:75 ,redTo:100,
      minorTicks: 1,
      min: 0, max: 1,
      majorTicks: ['off', 'on'],     
      //  greenColor: '#d0e9c6'
     
    }
  };
  public gaugeChart18: GoogleChartInterface = {
    chartType: GoogleChartType.Gauge,
    dataTable: [
      ['Label', 'Temp'],
      ['on', 1]
    ],
    options: {
      title: 'vitesse de vent en km/h ',
      animation: {easing: 'out'},
      width: 150, height: 150,
      greenFrom: 0, greenTo: 100,
      // yellowFrom:60, yellowTo:75,
      // redFrom:75 ,redTo:100,
      minorTicks: 1,
      min: 0, max: 1,
      majorTicks: ['off', 'on'],     
      //  greenColor: '#d0e9c6'
     
    }
  };
  ngOnInit(): void {
    this.datas.getall().subscribe(
      res=> {
        this.acts = res;
      },
      err=>{
          console.log(err);
      }
    );
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.datas.getbyid(this.id).subscribe(
      res=>{
        this.act = res;
      }
    );
   }

 

    


 
    }