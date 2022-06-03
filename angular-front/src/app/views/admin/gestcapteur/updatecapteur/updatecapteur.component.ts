import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapteurDataService } from 'src/app/services/capteur-data.service';

@Component({
  selector: 'app-updatecapteur',
  templateUrl: './updatecapteur.component.html',
  styleUrls: ['./updatecapteur.component.css']
})
export class UpdatecapteurComponent implements OnInit {

  id=''
  dataObject:any
  messageErr=''
  constructor(private route:ActivatedRoute,private ds:CapteurDataService) {
    this.route.params.subscribe(params=>this.id=params['id'])

    this.ds.getbyid(this.id).subscribe(response=>this.dataObject=response,(err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this student in our database"})
   }

  ngOnInit(): void {
  }

}