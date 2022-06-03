import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionneurDataService } from 'src/app/services/actionneur-data.service';

@Component({
  selector: 'app-updateactionneur',
  templateUrl: './updateactionneur.component.html',
  styleUrls: ['./updateactionneur.component.css']
})
export class UpdateactionneurComponent implements OnInit {

  id=''
  dataObject:any
  messageErr=''
  constructor(private route:ActivatedRoute,private ds:ActionneurDataService) {
    this.route.params.subscribe(params=>this.id=params['id'])

    this.ds.getbyid(this.id).subscribe(response=>this.dataObject=response,(err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this student in our database"})
   }

  ngOnInit(): void {
  }

}