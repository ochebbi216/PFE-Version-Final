import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PasserelleDataService } from 'src/app/services/passerelle-data.service';
import { Loader } from '@googlemaps/js-api-loader';

// declare const google:any;

@Component({
  selector: 'app-detailspasserelleuser',
  templateUrl: './detailspasserelleuser.component.html',
  styleUrls: ['./detailspasserelleuser.component.css']
})
export class DetailspasserelleuserComponent implements OnInit,AfterViewInit {
  // map:any;
  @ViewChild('mapElement') mapElement: any;


  id=''
  dataObject:any
  // dataObject:any= {
  //   Nom:'',
  //   Description: '',
  //   nomUtilisateur:'',
  //   GPSLong: '', 
  //   GPSLat: '',
  // }
  messageErr=''
  constructor(private route:ActivatedRoute,private ds:PasserelleDataService) {
    this.route.params.subscribe(params=>this.id=params['id'])

    this.ds.getbyid(this.id).subscribe(response=>
      this.dataObject=response,
      (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this student in our database"})
   }

   ngAfterViewInit(): void{
    // this.map = new google.maps.Map(this.mapElement.nativeElement, {
    //   center: { lat: 33.8869, lng: 9.5375 },
    //   zoom: 8,
    // });
    // const marker = new google.maps.Marker({
    //   // The below line is equivalent to writing:
    //   // position: new google.maps.LatLng(this.dataObject.GPSLat, this.dataObject.GPSLong)
    //   position: { lat: this.dataObject.GPSLat, lng: this.dataObject.GPSLong },
    //   map: this.map,
    // });
  }
  private map: google.maps.Map

  ngOnInit(): void {

    let loader = new Loader({
      apiKey: 'AIzaSyD4NB2p4tgP7LAtE241MKUhntdZKWddQG4',
    });
 
    loader.load().then(() => {
      console.log('loaded gmaps')
 
      const location = { lat: 33.8869, lng: 9.5375 }
 
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 8,
 
      })
 
      const marker = new google.maps.Marker({
        position: { lat:34.8534 ,lng:10.5596},
        map: this.map,
      });
    })
  }
  
}
