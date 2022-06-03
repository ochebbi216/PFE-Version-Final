import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EndpointService } from 'src/app/services/endpoint.service';
import { ReclamationDataService } from 'src/app/services/reclamation-data.service';
import { AuthService } from 'src/app/_servicesuser/auth.service';

@Component({
  selector: 'app-listedesreclamations',
  templateUrl: './listedesreclamations.component.html',
  styleUrls: ['./listedesreclamations.component.css']
})
export class ListedesreclamationsComponent implements OnInit {

  reclamations: any;
  lastname: String ;
  firstname: String ;
  username : String ;
  constructor(public endpoint: EndpointService , private actRoute: ActivatedRoute , private datas: ReclamationDataService, private router: Router, public authService: AuthService) {
    this.firstname=authService.getfirstname()
    this.lastname=authService.getlastname()
   }

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
 
  this.username=this.firstname.concat(" ",this.lastname.toString())
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
// options:''
  }
  
   id: any;
//   submitted = false;

  
// getdata(objet:string,nomComplet:string,email:string,numtel:Number,demande:string,id:Number){
  
//   this.reclamation.objet = objet
//   this.reclamation.nomComplet = nomComplet
  
//   this.reclamation.email = email
//   this.reclamation.numtel = numtel
//   this.reclamation.demande = demande
//   // this.reclamation.option = Option
//   this.reclamation.id = id
//   console.log(this.reclamation)

// }
// updatenewuser(f:any){
//       let data=f.value
//       this.datas.update(this.reclamation.id,data).subscribe(response=>
//         {
//         console.log(response)
//           let indexId=this.users.findIndex((obj:any)=>obj._id==this.reclamation.id)
  
//           this.users[indexId].objet=data.objet
//           this.users[indexId].nomComplet=data.nomComplet
//           // this.users[indexId].prenom=data.prenom
//           this.users[indexId].email=data.email
//           this.users[indexId].numtel=data.numtel
//           this.users[indexId].demande=data.demande
//           // this.users[indexId].demande=data.options
//         },(err:HttpErrorResponse)=>{
//           console.log(err.message)
        
//         })
//     }
    details(id:any){
      this.router.navigate(['/user/details/'+id])
    }}
