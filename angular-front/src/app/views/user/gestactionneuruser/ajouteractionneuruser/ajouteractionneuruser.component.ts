import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ActionneurDataService } from 'src/app/services/actionneur-data.service';
import { AuthService } from 'src/app/_servicesuser/auth.service';


@Component({
  selector: 'app-ajouteractionneuruser',
  templateUrl: './ajouteractionneuruser.component.html',
  styleUrls: ['./ajouteractionneuruser.component.css']
})
export class AjouteractionneuruserComponent implements OnInit {

  actionneur = {
    nom:'',
    type:'',
    numactionneur:'',
    valeur:false,
    nomUtilisateur:'',
    nomPasserelle:'',
    // date:'',
    // available: false
      }
    valide = true;
    // submitted = false;
    username: string;
    firstname: string;
    lastname: string;

      constructor( private router:Router ,private actdata:ActionneurDataService, public authService: AuthService, private toast:NgToastService ) { 
        // this.username=this.firstname.concat(this.lastname.toString())
        this.firstname=authService.getfirstname()
        this.lastname=authService.getlastname()
      }
    
      ngOnInit(): void {
        this.username=this.lastname.concat(" ",this.firstname.toString())

      }
    
      create(): void {

        const data = {
          nom: this.actionneur.nom,
          type: this.actionneur.type,
          numactionneur:this.actionneur.numactionneur,
          valeur:this.actionneur.valeur,
          nomUtilisateur:this.username,
          nomPasserelle:this.actionneur.nomPasserelle,

          // date:this.actionneur.date

        };
    
        this.actdata.create(data)
          .subscribe(
            response => {
              console.log(response);
              this.toast.success({detail:"Succès !",summary:"nouveau données est bien enregistrée",duration:5000})
              this.router.navigate(['/user/listactionneur']);
            },
            error => {
              // this.valide = false;
              console.log(error);
              this.toast.error({detail:"échoué !",summary:"votre données n'est pas enregistrer",duration:5000})
            });
      }
    
      // newProduct(): void {
      //   // this.submitted = false;
      //   this.actionneur = {
      //     nom:'',
      //     type:'',
      //     numactionneur:'',
      //     valeur:'',
      //     nomUtilisateur:'',
      //     // date:'',
      //     // available: false
      //   };
      // }
    
    }
