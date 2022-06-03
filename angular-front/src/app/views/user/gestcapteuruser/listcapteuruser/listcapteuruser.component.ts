import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import { CapteurDataService } from 'src/app/services/capteur-data.service';
import { EndpointService } from 'src/app/services/endpoint.service';
import { AuthService } from 'src/app/_servicesuser/auth.service';

@Component({
  selector: 'app-listcapteuruser',
  templateUrl: './listcapteuruser.component.html',
  styleUrls: ['./listcapteuruser.component.css']
})
export class ListcapteuruserComponent implements OnInit {
  @ViewChild('content', {static:false}) el!: ElementRef;

  public downloadPDF(){
    let pdf = new jsPDF('p','pt','a2');
    pdf.setPage(3);
    pdf.html(this.el.nativeElement,{
    callback:(pdf)=>{
  
      pdf.save('Gestion des capteurs '+ this.firstname+' '+this.lastname +new Date().toLocaleString()+'.pdf');
    }}
  );
  }

  capteurs: any;
  username: string;
  firstname: string;
  lastname: string;
  constructor(  public endpoint: EndpointService , private actRoute: ActivatedRoute , private datas: CapteurDataService, private router: Router, public authService: AuthService) {
    this.firstname=authService.getfirstname()
    this.lastname=authService.getlastname()

   }

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
   
    this.username=this.lastname.concat(" ",this.firstname.toString())

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
  date:'',
    }
    
     id: any;


    
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
  //           let indexId=this.users.findIndex((obj:any)=>obj._id==this.capteur.id)
    
  //           this.users[indexId].nom=data.nom
  //           this.users[indexId].type=data.type
  //           this.users[indexId].numCapteur=data.numCapteur
  //           this.users[indexId].valeur=data.valeur
  //           this.users[indexId].nomUtilisateur=data.nomUtilisateur
  //           this.users[indexId].date=data.date
    
  //         },(err:HttpErrorResponse)=>{
  //           console.log(err.message)
          
  //         })
  //     }
      details(id:any){
        this.router.navigate(['/user/detailcapteur/'+id])
      }}