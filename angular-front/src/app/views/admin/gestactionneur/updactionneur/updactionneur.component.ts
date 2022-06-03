import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Actionneur } from 'src/app/actionneur_model/Actionneur';
import { ActionneurDataService } from 'src/app/services/actionneur-data.service';

@Component({
  selector: 'app-updactionneur',
  templateUrl: './updactionneur.component.html',
  styleUrls: ['./updactionneur.component.css']
})
export class UpdactionneurComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  employeeData: Actionneur[];
  valeur: any = [true, false];
  EmployeeProfile: any = ['Moteur', 'Pompe', 'Eclairage', 'Vantilation', 'Chouffage'];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ActionneurDataService,
    private router: Router,
    private toast:NgToastService
  ) {}

  ngOnInit() {
    this.updateAct();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getActionneur(id);
    this.editForm = this.fb.group({

      nom: ['' ],
      type: [''],
      numactionneur: [''],
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
  updateact(e:Event) {
    this.editForm.get('valeur').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getActionneur(id: string) {
    this.apiService.getbyid(id).subscribe((data) => {
      this.editForm.setValue({
        nom: data['nom'],
        type: data['type'],
        numactionneur: data['numactionneur'],
        valeur: data['valeur'],
        nomUtilisateur: data['nomUtilisateur'],
        nomPasserelle: data['nomPasserelle'],

      });
    });
  }

  updateAct() {
    this.editForm = this.fb.group({
      nom: [''],
      type: [''],
      numactionneur: [''],
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
            this.router.navigateByUrl('/admin/listactionneur');
            this.toast.success({detail:"Succès !",summary:"modifiée avec succès",duration:5000})
            console.log('Content updated successfully!');
          },
          error: (e) => {
            console.log(e);
            this.toast.error({detail:"échoué !",summary:"modification non effectuée",duration:5000})
          },
        });
      
    }
  }
}

