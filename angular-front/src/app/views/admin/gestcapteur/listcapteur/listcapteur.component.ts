import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import { CapteurDataService } from 'src/app/services/capteur-data.service';
import { EndpointService } from 'src/app/services/endpoint.service';

@Component({
  selector: 'app-listcapteur',
  templateUrl: './listcapteur.component.html',
  styleUrls: ['./listcapteur.component.css']
})
export class ListcapteurComponent implements OnInit {
  @ViewChild('content', {static:false}) el!: ElementRef;

  public downloadPDF(){
    let pdf = new jsPDF('p','pt','a2');
    pdf.setPage(3);
    pdf.html(this.el.nativeElement,{
    callback:(pdf)=>{
  
      pdf.save('Gestion des capteurs '+new Date().toLocaleString()+'.pdf');
    }}
  );
  }
  capteurs: any;
  constructor(  public endpoint: EndpointService , private actRoute: ActivatedRoute , private datas: CapteurDataService, private router: Router) { }

  ngOnInit(): void {
    this.datas.getall().subscribe(
      res=> {
        this.capteurs = res;
      },
      err=>{
          console.log(err);
      }
    );
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.datas.getbyid(this.id).subscribe(
      res=>{
        this.capteur = res
      }
    );
   

  }


delete(id:any)  {

  
      
        if(window.confirm('Voulez-vous vraiment supprimer ce capteur ?')){
          this.datas.delete(id).subscribe(
            res=>{
            this.ngOnInit();
        },
  
  )
}}
capteur: any = {
  nom:'',
  type:'',
  numCapteur:'',
  valeur:'',
  nomUtilisateur:'',
  nomPasserelle:'',
  // date:'',
    }
    
     id: any;
    submitted = false;

    
  // getdata(nom:string,type:string,numCapteur:number,valeur:number,nomUtilisateur:string,date:Date,id:any){
    
  //   this.capteur.nom = nom
  //   this.capteur.type = type
  //   this.capteur.numCapteur = numCapteur
  //   this.capteur.valeur = valeur
  //   this.capteur.nomUtilisateur = nomUtilisateur
  //   this.capteur.date = date
  //   this.capteur.id=id
    
  //   console.log(this.capteur)

  // }
  // updatenewuser(f:any){
  //       let data=f.value
  //       this.datas.update(this.capteur.id,data).subscribe(response=>
  //         {
  //         console.log(response)
  //           let indexId=this.capteurs.findIndex((obj:any)=>obj._id==this.capteur.id)
    
  //           this.capteurs[indexId].nom=data.nom
  //           this.capteurs[indexId].type=data.type
  //           this.capteurs[indexId].numCapteur=data.numCapteur
  //           this.capteurs[indexId].valeur=data.valeur
  //           this.capteurs[indexId].nomUtilisateur=data.nomUtilisateur
  //           this.capteurs[indexId].date=data.date
    
  //         },(err:HttpErrorResponse)=>{
  //           console.log(err.message)
          
  //         })
  //     }
      details(id:any){
        this.router.navigate(['/admin/detailscapteur/'+id])
      }
      // update(id:any){
      //   this.router.navigate(['/admin/updatecapteur/'+id])
      // }
    }