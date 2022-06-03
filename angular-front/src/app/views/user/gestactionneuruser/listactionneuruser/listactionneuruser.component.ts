import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import { ActionneurDataService } from 'src/app/services/actionneur-data.service';
import { EndpointService } from 'src/app/services/endpoint.service';
import { AuthService } from 'src/app/_servicesuser/auth.service';

@Component({
  selector: 'app-listactionneuruser',
  templateUrl: './listactionneuruser.component.html',
  styleUrls: ['./listactionneuruser.component.css']
})
export class ListactionneuruserComponent implements OnInit {
  @ViewChild('content', {static:false}) el!: ElementRef;

  public downloadPDF(){
    let pdf = new jsPDF('p','pt','a2');
    pdf.setPage(3);
    pdf.html(this.el.nativeElement,{
    callback:(pdf)=>{
  
      pdf.save('Gestion des actionneurs '+new Date().toLocaleString()+'.pdf');
    }}
  );
  }
  v=false;
  acts: any;
  username: string;
  firstname: string;
  lastname: string;
  constructor(  public endpoint: EndpointService , private actRoute: ActivatedRoute , private datas: ActionneurDataService, private router: Router, public authService: AuthService) { 
    this.firstname=authService.getfirstname()
    this.lastname=authService.getlastname()
  }

  ngOnInit(): void {
    this.datas.getall().subscribe(
      res=> {
        this.acts = res;
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
   
    this.username=this.lastname.concat(" ",this.firstname.toString())

  }


delete(id:any)  {
  if(window.confirm('Voulez-vous vraiment supprimer ce actionneur ?')){
          this.datas.delete(id).subscribe(
            res=>{
            this.ngOnInit();
        },
  
  )
}
}
act: any = {
  nom:'',
  type:'',
  numactionneur:'',
  valeur:'',
  nomUtilisateur:'',
  date:''
    }
    
     id: any;
  //    submitted = false;

    
  // getdata(nom:string,type:string,numactionneur:string,valeur:string,nomUtilisateur:string,date:Date,id:any){
    
  //   this.act.nom = nom
  //   this.act.type = type
  //   this.act.numCapteur = numactionneur
  //   this.act.valeur = valeur
  //   this.act.nomUtilisateur = nomUtilisateur
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
  //           this.acts[indexId].nomUtilisateur=data.nomUtilisateur
  //           this.acts[indexId].date=data.date
    
  //         },(err:HttpErrorResponse)=>{
  //           console.log(err.message)
          
  //         })
  //     }
      details(id:any){
        this.router.navigate(['/user/detailactionneur/'+id])
      }

    }