import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReclamationDataService } from 'src/app/services/reclamation-data.service';

@Component({
  selector: 'app-detailreclamaion',
  templateUrl: './detailreclamaion.component.html',
  styleUrls: ['./detailreclamaion.component.css']
})
export class DetailreclamaionComponent implements OnInit {

  id=''
  dataObject:any
  messageErr=''
  constructor(private route:ActivatedRoute,private ds:ReclamationDataService) {
    this.route.params.subscribe(params=>this.id=params['id'])

    this.ds.getbyid(this.id).subscribe((response: any)=>this.dataObject=response,(err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this reclamation in our database"})
   }

  ngOnInit(): void {
  }

}