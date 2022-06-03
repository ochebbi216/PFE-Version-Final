import { Component, OnInit } from '@angular/core';
import { PasserelleDataService } from 'src/app/services/passerelle-data.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AuthService } from 'src/app/_servicesuser/auth.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-ajouterpasserelleuser',
  templateUrl: './ajouterpasserelleuser.component.html',
  styleUrls: ['./ajouterpasserelleuser.component.css']
})
export class AjouterpasserelleuserComponent implements OnInit {
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],

};

  passerelle = {
    Nom:'',
    Description: '',
    nomUtilisateur:'',
    GPSLong: '', 
    GPSLat: '',
    // Sensor1:'',
    // Sensor2:'',
    // Sensor3:'',
    // Sensor4:'',
    // Sensor5:'',
    // Date:'',
    
    available: false
      }
      valide = true;
      submitted = false;
      username: string;
      firstname: string;
      lastname: string;
  
      constructor(private passdata: PasserelleDataService , public authService: AuthService ,private router:Router, private toast:NgToastService){
        this.firstname=authService.getfirstname()
        this.lastname=authService.getlastname()

       }
    
      ngOnInit(): void {
        this.username=this.firstname.concat(" ",this.lastname.toString())
      }
    
      create(): void {
        const data = {
          Nom: this.passerelle.Nom,
          Description: this.passerelle.Description,
          nomUtilisateur: this.username,
          GPSLong: this.passerelle.GPSLong,
          GPSLat: this.passerelle.GPSLat,
          // Sensor1: this.passerelle.Sensor1,
          // Sensor2: this.passerelle.Sensor2,
          // Sensor3: this.passerelle.Sensor3,
          // Sensor4: this.passerelle.Sensor4,
          // Sensor5: this.passerelle.Sensor5,
          // Date: this.passerelle.Date,
        };
    
        this.passdata.create(data)
          .subscribe(
            response => {
              console.log(response);
              this.submitted = true;
              this.toast.success({detail:"Succès !",summary:"nouveau données est bien enregistrée",duration:5000})
              this.router.navigate(['/user/listpasserelle']);
            },
            error => {
              // this.valide = false;
              console.log(error);
              this.toast.error({detail:"échoué !",summary:"votre données n'est pas enregistrer",duration:5000})
            });
      }
    
      // newProduct(): void {
      //   this.submitted = false;
      //   this.passerelle = {
      //     Nom:'',
      //     Description: '',
      //     nomUtilisateur:'',
      //     GPSLong: '', 
      //     GPSLat: '',
      //     Sensor1:'',
      //     Sensor2:'',
      //     Sensor3:'',
      //     Sensor4:'',
      //     Sensor5:'',
      //     // Date:'',
      //     available: false
      //   };
      // }
    
    }