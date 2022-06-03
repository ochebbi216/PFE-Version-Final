import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Actionneur } from 'src/app/actionneur_model/Actionneur';
import { ActionneurDataService } from 'src/app/services/actionneur-data.service';

@Component({
  selector: 'app-updateactionneuruser',
  templateUrl: './updateactionneuruser.component.html',
  styleUrls: ['./updateactionneuruser.component.css']
})
export class UpdateactionneuruserComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  employeeData: Actionneur[];
  EmployeeProfile: any = ['Moteur', 'Pompe', 'Eclairage', 'Vantilation', 'Chouffage'];
  valeur: any = [true, false];
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
            this.router.navigateByUrl('/user/listactionneur');
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

