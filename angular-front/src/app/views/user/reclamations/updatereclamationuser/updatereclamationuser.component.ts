import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Reclamation } from 'src/app/reclamation_model/Reclamation';
import { ReclamationDataService } from 'src/app/services/reclamation-data.service';

@Component({
  selector: 'app-updatereclamationuser',
  templateUrl: './updatereclamationuser.component.html',
  styleUrls: ['./updatereclamationuser.component.css']
})
export class UpdatereclamationuserComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  employeeData: Reclamation[];
  // EmployeeProfile: any = ['Température', 'Humidité', 'Vent', 'Pression', 'Lumière','Sol'];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ReclamationDataService,
    private router: Router,
    private toast:NgToastService 
  ) {}

  ngOnInit() {
    this.updateEmployee();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getCapteur(id);
    this.editForm = this.fb.group({

      objet: ['' ],
      nomComplet: [''],
      email: [''],
      numtel: [''],
      demande: [''],

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
        objet: data['objet'],
        nomComplet: data['nomComplet'],
        email: data['email'],
        numtel: data['numtel'],
        demande: data['demande'],
      });
    });
  }

  updateEmployee() {
    this.editForm = this.fb.group({
      objet: ['' ],
      nomComplet: [''],
      email: [''],
      numtel: [''],
      demande: [''],
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
            this.router.navigateByUrl('/user/listedesreclamations');
            this.toast.success({detail:"Succès !",summary:"modifiée avec succès",duration:5000})
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