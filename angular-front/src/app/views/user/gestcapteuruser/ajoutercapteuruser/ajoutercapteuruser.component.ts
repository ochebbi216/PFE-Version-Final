import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CapteurDataService } from 'src/app/services/capteur-data.service';
import { AuthService } from 'src/app/_servicesuser/auth.service';

@Component({
  selector: 'app-ajoutercapteuruser',
  templateUrl: './ajoutercapteuruser.component.html',
  styleUrls: ['./ajoutercapteuruser.component.css']
})
export class AjoutercapteuruserComponent implements OnInit {

  capteur = {
    nom:'',
    type:'',
    numCapteur:'',
    valeur:'',
    nomUtilisateur:'',
    nomPasserelle:'',
    // date:'',
      }
      valide = true;
      submitted = false;
      username: string;
      firstname: string;
      lastname: string;

      constructor(private router:Router,private userdata: CapteurDataService, public authService: AuthService, private toast:NgToastService) { 
        this.firstname=authService.getfirstname()
        this.lastname=authService.getlastname()

      }
    
      ngOnInit(): void {
        this.username=this.lastname.concat(" ",this.firstname.toString())

      }
    
      create(): void {
        const data = {
          nom: this.capteur.nom,
          type: this.capteur.type,
          numCapteur:this.capteur.numCapteur,
          valeur:this.capteur.valeur,
          nomUtilisateur:this.username,
          nomPasserelle:this.capteur.nomPasserelle,

          // date:this.capteur.date
        };
    
        this.userdata.create(data)
          .subscribe(
            response => {
              console.log(response);
              this.toast.success({detail:"Succès !",summary:"nouveau données est bien enregistrée",duration:5000})
              this.router.navigate(['/user/listcapteur']);
            },
            error => {
              // this.valide = false;
              console.log(error);
              this.toast.error({detail:"échoué !",summary:"votre données n'est pas enregistrer",duration:5000})
            });
      }
    
      // newProduct(): void {
      //   // this.submitted = true;
      //   this.capteur = {
      //     nom:'',
      //     type:'',
      //     numCapteur:'',
      //     valeur:'',
      //     nomUtilisateur:'',
      //     // date:'',
      //   };
      // }
    
    }