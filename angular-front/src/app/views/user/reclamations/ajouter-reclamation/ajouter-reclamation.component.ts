import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ReclamationDataService } from 'src/app/services/reclamation-data.service';

@Component({
  selector: 'app-ajouter-reclamation',
  templateUrl: './ajouter-reclamation.component.html',
  styleUrls: ['./ajouter-reclamation.component.css']
})
export class AjouterReclamationComponent implements OnInit {

 

  constructor(private reclamationdata: ReclamationDataService, private toast:NgToastService,private router:Router) { }

  ngOnInit(): void {
  }

  reclamation = {
    objet:'',
    nomComplet:'',
    
    email:'',
    numtel:'',
    demande:'',
    // date:'',
    available: false
      }
    
      submitted = false;
  
      
    
      create(): void {
        const data = {
          objet: this.reclamation.objet,
          nomComplet: this.reclamation.nomComplet,
         
          email: this.reclamation.email,
          numtel: this.reclamation.numtel,

          // numReclamation:this.reclamation.numReclamation,
        
          demande:this.reclamation.demande,
          // date:this.reclamation.date,
          // nomUtilisateur:this.reclamation.nomUtilisateur,
          // date:this.reclamation.date
        };
    
        this.reclamationdata.create(data)
          .subscribe(
            response => {
              console.log(response);
              this.submitted = true;
              this.toast.success({detail:"Succès !",summary:"nouveau données est bien enregistrée",duration:5000})
              this.router.navigate(['/user/listedesreclamations']);
            },
            error => {
              // this.valide = false;
              console.log(error);
              this.toast.error({detail:"échoué !",summary:"votre données n'est pas enregistrer",duration:5000})
            });
      }
      newProduct(): void {
        this.submitted = false;
        this.reclamation = {
          objet:'',
          nomComplet:'',
          
          email:'',
          numtel:'',
          demande:'',
          // date:'',
          available: false
        };
      }
}

