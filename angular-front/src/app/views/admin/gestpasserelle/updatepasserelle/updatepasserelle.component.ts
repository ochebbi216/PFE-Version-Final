import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { PasserelleDataService } from 'src/app/services/passerelle-data.service';

@Component({
  selector: 'app-updatepasserelle',
  templateUrl: './updatepasserelle.component.html',
  styleUrls: ['./updatepasserelle.component.css']
})
export class UpdatepasserelleComponent implements OnInit {

  id=''
  dataObject:any
  messageErr=''
  constructor(private route:ActivatedRoute,private ds:PasserelleDataService) {
    this.route.params.subscribe(params=>this.id=params['id'])

    this.ds.getbyid(this.id).subscribe(response=>this.dataObject=response,(err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this student in our database"})
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