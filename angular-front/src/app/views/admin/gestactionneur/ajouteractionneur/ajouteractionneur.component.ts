import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ActionneurDataService } from 'src/app/services/actionneur-data.service';

@Component({
  selector: 'app-ajouteractionneur',
  templateUrl: './ajouteractionneur.component.html',
  styleUrls: ['./ajouteractionneur.component.css']
})
export class AjouteractionneurComponent implements OnInit {

  actionneur = {
    nom:'',
    type:'',
    numactionneur:'',
    valeur: false,
    nomUtilisateur:'',
    nomPasserelle:'',

    // date:'',
    available: false
      }
      valide = true;

      submitted = false;

      constructor(private actdata:ActionneurDataService ,private toast:NgToastService,private router:Router ) { }
    
      ngOnInit(): void {
      }
    
      create(): void {
        const data = {
          nom: this.actionneur.nom,
          type: this.actionneur.type,
          numactionneur:this.actionneur.numactionneur,
          valeur:this.actionneur.valeur,
          nomUtilisateur:this.actionneur.nomUtilisateur,
          nomPasserelle:this.actionneur.nomPasserelle,

          // date:this.actionneur.date

        };
    
        this.actdata.create(data)
          .subscribe(
            response => {
              console.log(response);
              this.submitted = true;
              this.toast.success({detail:"Succès !",summary:"nouveau données est bien enregistrée",duration:5000})
              this.router.navigate(['/admin/listactionneur']);
            },
            error => {
              // this.valide = false;
              console.log(error);
              this.toast.error({detail:"échoué !",summary:"votre données n'est pas enregistrer",duration:5000})
            });
      }
    
      // newProduct(): void {
      //   this.submitted = false;
      //   this.actionneur = {
      //     nom:'',
      //     type:'',
      //     numactionneur:'',
      //     valeur:'',
      //     nomUtilisateur:'',
      //     // date:'',
      //     available: false
      //   };
      // }
    
    }