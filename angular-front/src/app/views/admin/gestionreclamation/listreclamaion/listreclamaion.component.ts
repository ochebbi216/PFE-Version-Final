import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EndpointService } from 'src/app/services/endpoint.service';
import { ReclamationDataService } from 'src/app/services/reclamation-data.service';

@Component({
  selector: 'app-listreclamaion',
  templateUrl: './listreclamaion.component.html',
  styleUrls: ['./listreclamaion.component.css']
})
export class ListreclamaionComponent implements OnInit {

  reclamations: any;

  constructor(public endpoint: EndpointService , private actRoute: ActivatedRoute , private datas: ReclamationDataService, private router: Router) { }

  ngOnInit(): void {
  this.datas.getall().subscribe(
    res=> {
      this.reclamations = res;
    },
    err=>{
        console.log(err);
    }
  );
  this.id = this.actRoute.snapshot.paramMap.get('id');
  this.datas.getbyid(this.id).subscribe(
    res=>{
      this.reclamation = res
    }
  );
 

}


delete(id:any)  {


    
      if(window.confirm('Voulez-vous vraiment supprimer cette réclamation ?')){
        this.datas.delete(id).subscribe(
          res=>{
          this.ngOnInit();
      },

)
}}
reclamation: any = {
objet:'',
nomComplet:'',
email:'',
numtel:'',
demande:'',
  }
  
   id: any;
  submitted = false;

  

    details(id:any){
      this.router.navigate(['/admin/detailreclamation/'+id])
    }}
