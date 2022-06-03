import { Component, OnInit } from '@angular/core';
import { PasserelleDataService } from 'src/app/services/passerelle-data.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-ajouterpasserelle',
  templateUrl: './ajouterpasserelle.component.html',
  styleUrls: ['./ajouterpasserelle.component.css']
})
export class AjouterpasserelleComponent implements OnInit {

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
  
    submitted = false;

    constructor(private passdata: PasserelleDataService,private router:Router,private toast:NgToastService ){ }
  
    ngOnInit(): void {
    }
  
    create(): void {
      const data = {
        Nom: this.passerelle.Nom,
        Description: this.passerelle.Description,
        nomUtilisateur: this.passerelle.nomUtilisateur,
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
            this.router.navigate(['/admin/listpasserelle']);
          },
          error => {
            // this.valide=false;
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
    //     Date:'',
    //     available: false
    //   };
    // }
  
  }