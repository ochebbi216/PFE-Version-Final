import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';

@Component({
  selector: 'app-commandeadistanceadmin',
  templateUrl: './commandeadistanceadmin.component.html',
  styleUrls: ['./commandeadistanceadmin.component.css']
})
export class CommandeadistanceadminComponent implements OnInit {
  public linechart1: GoogleChartInterface = {
    chartType: GoogleChartType.SteppedAreaChart,
    dataTable: [
      ['Heure', 'statut'],
      ['00:00', 1 ],
      ['04:00', 1 ],
      ['08:00', 0 ],
      ['12:00', 0 ],
      ['16:00', 0 ],
      ['20:00', 1 ],

    ],
    options: {title: 'Status de lumière ',
    legend: { position: 'bottom' },}
    

    
  };
  public linechart2: GoogleChartInterface = {
    chartType: GoogleChartType.SteppedAreaChart,
    dataTable: [
      ['Heure', 'statut'],
      ['00:00',  0],
      ['04:00',  0 ],
      ['08:00', 0 ],
      ['12:00', 1  ],
      ['16:00', 1  ],
      ['20:00', 0],

    ],
    options: {title: 'Statut de moteur ',
    legend: { position: 'bottom' },}
    

    
  };
  public linechart3: GoogleChartInterface = {
    chartType: GoogleChartType.SteppedAreaChart,
    dataTable: [
      ['Heure', 'statut'],
      ['00:00',  0],
      ['04:00',  0 ],
      ['08:00', 1 ],
      ['12:00', 1  ],
      ['16:00', 1  ],
      ['20:00', 0],

    ],
    options: {title: 'statut de chouffage ',
    legend: { position: 'bottom' },}
    

    
  };
  public linechart4: GoogleChartInterface = {
    chartType: GoogleChartType.SteppedAreaChart,
    dataTable: [
      ['Heure', 'statut'],
      ['00:00',  0],
      ['04:00',  0 ],
      ['08:00', 0 ],
      ['12:00', 1  ],
      ['16:00', 1  ],
      ['20:00', 0],

    ],
    options: {title: 'Status de ventillateur ',
    legend: { position: 'bottom' },}

  };
  public linechart5: GoogleChartInterface = {
    chartType: GoogleChartType.SteppedAreaChart,
    dataTable: [
      ['Heure', 'statut'],
      ['00:00', 0 ],
      ['04:00', 0 ],
      ['08:00',  ],
      ['12:00', 1 ],
      ['16:00', 1 ],
      ['20:00', 0 ],

    ],
    options: {title: 'Statut de pompe ',
    legend: { position: 'bottom' },}

  };
  public linechart6: GoogleChartInterface = {
    chartType: GoogleChartType.ComboChart,
    dataTable: [
      ['Heure', 'statut'],
      ['00:00',  0],
      ['04:00',  0 ],
      ['08:00', 0 ],
      ['12:00', 1  ],
      ['16:00', 1  ],
      ['20:00', 0],

    ],
    options: {title: "Statut d'électrovanne 1",
    legend: { position: 'bottom' },}

  };
  public linechart7: GoogleChartInterface = {
    chartType: GoogleChartType.SteppedAreaChart,
    dataTable: [
      ['Heure', 'Statut'],
      ['00:00',  0],
      ['04:00',  0 ],
      ['08:00', 1 ],
      ['12:00', 0  ],
      ['16:00', 1  ],
      ['20:00', 0],

    ],
    options: {title: "Statut d'électrovanne 2",
    legend: { position: 'bottom' },}

  };
  public linechart8: GoogleChartInterface = {
    chartType: GoogleChartType.SteppedAreaChart,
    dataTable: [
      ['Heure', 'statut'],
      ['00:00',  1],
      ['04:00',  0 ],
      ['08:00', 0 ],
      ['12:00', 1  ],
      ['16:00', 1  ],
      ['20:00', 0],

    ],
    options: {title: "Statut d'électrovanne 3",
    legend: { position: 'bottom' },}

  };
  public linechart9: GoogleChartInterface = {
    chartType: GoogleChartType.SteppedAreaChart,
    dataTable: [
      ['Heure', 'statut'],
      ['00:00',  0],
      ['04:00',  0 ],
      ['08:00', 1 ],
      ['12:00', 1  ],
      ['16:00', 0  ],
      ['20:00', 0],

    ],
    options: {title: "Statut d'électrovanne 4",
    legend: { position: 'bottom' },}

  };
  public linechart10: GoogleChartInterface = {
    chartType: GoogleChartType.SteppedAreaChart,
    dataTable: [
      ['Heure', 'statut'],
      ['00:00',  0],
      ['04:00',  0 ],
      ['08:00', 1 ],
      ['12:00', 1  ],
      ['16:00', 1  ],
      ['20:00', 0],

    ],
    options: {title: "Statut d'électrovanne 5",
    legend: { position: 'bottom' },}

  };
  public linechart11: GoogleChartInterface = {
    chartType: GoogleChartType.SteppedAreaChart,
    dataTable: [
      ['Heure', 'statut'],
      ['00:00',  0],
      ['04:00',  0 ],
      ['08:00', 1 ],
      ['12:00', 1  ],
      ['16:00', 1  ],
      ['20:00', 0],

    ],
    options: {title: "Statut d'électrovanne 6",
    legend: { position: 'bottom' },}

  };
  public GaugeChart1: GoogleChartInterface = {
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
  public GaugeChart2: GoogleChartInterface = {
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
  public GaugeChart3: GoogleChartInterface = {
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
  public GaugeChart4: GoogleChartInterface = {
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
  public GaugeChart5: GoogleChartInterface = {
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
  public GaugeChart6: GoogleChartInterface = {
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
  public GaugeChart7: GoogleChartInterface = {
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
  public GaugeChart8: GoogleChartInterface = {
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
  public GaugeChart9: GoogleChartInterface = {
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
  public GaugeChart10: GoogleChartInterface = {
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
  public GaugeChart11: GoogleChartInterface = {
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
  constructor() { }

  ngOnInit(): void {
  }

}
