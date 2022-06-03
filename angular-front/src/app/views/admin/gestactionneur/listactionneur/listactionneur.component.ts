import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import { NgToastService } from 'ng-angular-popup';
import { ActionneurDataService } from 'src/app/services/actionneur-data.service';
import { EndpointService } from 'src/app/services/endpoint.service';

@Component({
  selector: 'app-listactionneur',
  templateUrl: './listactionneur.component.html',
  styleUrls: ['./listactionneur.component.css']
})
export class ListactionneurComponent implements OnInit {
  @ViewChild('content', {static:false}) el!: ElementRef;

public downloadPDF(){
  this.toast.info({detail:"votre téléchargement va bientôt commencer ",position:"br",duration:3500})
  let pdf = new jsPDF('p','pt','a2');
  pdf.setPage(3);
  pdf.html(this.el.nativeElement,{
  callback:(pdf)=>{

  pdf.save('Gestion des actionneurs '+new Date().toLocaleString()+'.pdf');
}}
);
}
  actionneurs: any;
  constructor(  public endpoint: EndpointService , private actRoute: ActivatedRoute , private datas: ActionneurDataService, private router: Router,private toast:NgToastService) { }

  ngOnInit(): void {
    this.datas.getall().subscribe(
      res=> {
        this.actionneurs = res;

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
   

  }


delete(id:any)  {
  if(window.confirm('Voulez-vous vraiment supprimer ce actionneur ?')){
          this.datas.delete(id).subscribe(
            res=>{
            this.ngOnInit();
        },
  
  )
}}
act: any = {
  nom:'',
  type:'',
  numactionneur:'',
  valeur:'',
  numUtilisateur:'',
  nomPasserelle:'',


    }
    
     id: any;
     submitted = false;

    
  // getdata(nom:string,type:string,numactionneur:string,valeur:string,numUtilisateur:string,date:Date,id:any){
    
  //   this.act.nom = nom
  //   this.act.type = type
  //   this.act.numCapteur = numactionneur
  //   this.act.valeur = valeur
  //   this.act.numUtilisateur = numUtilisateur
  //   this.act.date = date
  //   this.act.id=id
    
  //   console.log(this.act)

  // }
  // updatenewuser(f:any){
  //       let data=f.value
  //       this.datas.update(this.act.id,data).subscribe(response=>
  //         {
  //         console.log(response)
  //           let indexId=this.acts.findIndex((obj:any)=>obj._id==this.act.id)
    
  //           this.acts[indexId].nom=data.nom
  //           this.acts[indexId].type=data.type
  //           this.acts[indexId].numCapteur=data.numactionneur
  //           this.acts[indexId].valeur=data.valeur
  //           this.acts[indexId].numUtilisateur=data.numUtilisateur
  //           this.acts[indexId].date=data.date
    
  //         },(err:HttpErrorResponse)=>{
  //           console.log(err.message)
          
  //         })
  //     }
      details(id:any){
        this.router.navigate(['/admin/detailactionneur/'+id])
      }}