import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Capteur } from 'src/app/capteur_model/Capteur';
import { CapteurDataService } from 'src/app/services/capteur-data.service';

@Component({
  selector: 'app-updatecapteuruser',
  templateUrl: './updatecapteuruser.component.html',
  styleUrls: ['./updatecapteuruser.component.css']
})
export class UpdatecapteuruserComponent implements OnInit {
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
            this.router.navigateByUrl('/user/listcapteur');
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