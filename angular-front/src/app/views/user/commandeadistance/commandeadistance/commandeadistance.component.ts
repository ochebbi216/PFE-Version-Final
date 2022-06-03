import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';

@Component({
  selector: 'app-commandeadistance',
  templateUrl: './commandeadistance.component.html',
  styleUrls: ['./commandeadistance.component.css']
})
export class CommandeadistanceComponent implements OnInit {
  public Linechart1: GoogleChartInterface = {
    chartType: GoogleChartType.SteppedAreaChart,
    dataTable: [
      ['Heure', 'statut'],
      ['00:00',  1],
      ['04:00',  1 ],
      ['08:00', 0 ],
      ['12:00', 0  ],
      ['16:00', 0  ],
      ['20:00', 1],

    ],
    options: {title: 'Status de lumière ',
    legend: { position: 'bottom' },}
    

    
  };
  public Linechart2: GoogleChartInterface = {
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
  public Linechart3: GoogleChartInterface = {
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
  public Linechart4: GoogleChartInterface = {
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
  public Linechart5: GoogleChartInterface = {
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
  public Linechart6: GoogleChartInterface = {
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
  public Linechart7: GoogleChartInterface = {
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
  public Linechart8: GoogleChartInterface = {
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
  public Linechart9: GoogleChartInterface = {
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
  public Linechart10: GoogleChartInterface = {
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
  public Linechart11: GoogleChartInterface = {
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
  public gaugeChart1: GoogleChartInterface = {
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
  public gaugeChart2: GoogleChartInterface = {
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
  public gaugeChart3: GoogleChartInterface = {
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
  public gaugeChart4: GoogleChartInterface = {
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
  public gaugeChart5: GoogleChartInterface = {
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
  public gaugeChart6: GoogleChartInterface = {
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
  public gaugeChart7: GoogleChartInterface = {
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
  public gaugeChart8: GoogleChartInterface = {
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
  public gaugeChart9: GoogleChartInterface = {
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
  public gaugeChart10: GoogleChartInterface = {
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
  public gaugeChart11: GoogleChartInterface = {
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
