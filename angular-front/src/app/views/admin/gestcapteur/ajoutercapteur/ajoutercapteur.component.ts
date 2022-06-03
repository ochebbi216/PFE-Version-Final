import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CapteurDataService } from 'src/app/services/capteur-data.service';

@Component({
  selector: 'app-ajoutercapteur',
  templateUrl: './ajoutercapteur.component.html',
  styleUrls: ['./ajoutercapteur.component.css']
})
export class AjoutercapteurComponent implements OnInit {


capteur = {
  nom:'',
  type:'',
  numCapteur:'',
  valeur:'',
  nomUtilisateur:'',
  nomPasserelle:'',
  // date:'',
    }
    valide=true;
    submitted = false;

    constructor(private userdata: CapteurDataService,private toast:NgToastService,private router:Router) { }
  
    ngOnInit(): void {
    }
  
    create(): void {
      const data = {
        nom: this.capteur.nom,
        type: this.capteur.type,
        numCapteur:this.capteur.numCapteur,
        valeur:this.capteur.valeur,
        nomUtilisateur:this.capteur.nomUtilisateur,
        nomPasserelle:this.capteur.nomPasserelle,
        // date:this.capteur.date
      };
  
      this.userdata.create(data)
        .subscribe(
          response => {
            console.log(response);
            this.submitted = true;
            this.toast.success({detail:"Succès !",summary:"nouveau données est bien enregistrée",duration:5000})
            this.router.navigate(['/admin/listcapteur']);
          },
          error => {
            // this.valide=false;
            console.log(error);
            this.toast.error({detail:"échoué !",summary:"votre données n'est pas enregistrer",duration:5000})

          });
    }
  
    // newProduct(): void {
    //   this.submitted = false;
    //   this.capteur = {
    //     nom:'',
    //     type:'',
    //     numCapteur:'',
    //     valeur:'',
    //     nomUtilisateur:'',
    //     nomPasserelle:'',
    //     date:'',
    //   };
    // }
  
  }