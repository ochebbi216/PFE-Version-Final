import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CapteurDataService } from 'src/app/services/capteur-data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Capteur } from 'src/app/capteur_model/Capteur';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-updcapteur',
  templateUrl: './updcapteur.component.html',
  styleUrls: ['./updcapteur.component.css']
})
export class UpdcapteurComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  employeeData: Capteur[];
  EmployeeProfile: any = ['Température', 'Humidité', 'Vent', 'Pression', 'Lumière','Sol'];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: CapteurDataService,
    private router: Router,
    private toast:NgToastService
  ) {}

  ngOnInit() {
    this.updateEmployee();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getCapteur(id);
    this.editForm = this.fb.group({

      nom: ['' ],
      type: [''],
      numCapteur: [''],
      valeur: [''],
      nomUtilisateur: [''],
      nomPasserelle: [''],

    });
  }

  // Choose options with select-dropdown
  updateProfile(e:Event) {
    this.editForm.get('type').setValue(e, {
      onlySelf: true,
    });
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getCapteur(id) {
    this.apiService.getbyid(id).subscribe((data) => {
      this.editForm.setValue({
        nom: data['nom'],
        type: data['type'],
        numCapteur: data['numCapteur'],
        valeur: data['valeur'],
        nomUtilisateur: data['nomUtilisateur'],
        nomPasserelle: data['nomPasserelle'],

      });
    });
  }

  updateEmployee() {
    this.editForm = this.fb.group({
      nom: [''],
      type: [''],
      numCapteur: [''],
      valeur: [''],
      nomUtilisateur: [''],
      nomPasserelle: [''],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.update(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/admin/listcapteur');
            this.toast.success({detail:"Succès !",summary:"modifiée avec succès",duration:5000});
            console.log('Content updated successfully!');
          },
          error: (e) => {
            console.log(e);
            this.toast.error({detail:"échoué !",summary:"modification non effectuée",duration:5000});
        },
      });
      
    }
  }
}


//   capteur: any = {
//     nom:'',
//     type:'',
//     numCapteur:'',
//     valeur:'',
//     nomUtilisateur:'',
//       }
//       id: any;

//       modifier(){
//         let formData = new FormData();
//     formData.append('nom',this.capteur.nom);
//     formData.append('type',this.capteur.type);
//     formData.append('numCapteur',this.capteur.numCapteur);
//     formData.append('valeur',this.capteur.valeur);
//     formData.append('nomUtilisateur',this.capteur.nomUtilisateur);

    

    
//     this.data.update(this.id,formData).subscribe(
//     (res) =>{
//       this.router.navigate(['/admin/listcapteur']);
//     },
//     (err)=> {
//       console.log(err);
//     },
    
//     );
    
//       }
//   constructor( private actRoute:ActivatedRoute,private data:CapteurDataService,private router:Router) { }

//   ngOnInit(): void {
//     this.id = this.actRoute.snapshot.paramMap.get('id');
//     this.data.getbyid(this.id).subscribe(
//       res=>{
//         this.capteur = res
//       }
//     );
   
//   }

// }
