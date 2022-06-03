import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Passerelle } from 'src/app/passerelle_model/Passerelle';
import { PasserelleDataService } from 'src/app/services/passerelle-data.service';

@Component({
  selector: 'app-updpasserelle',
  templateUrl: './updpasserelle.component.html',
  styleUrls: ['./updpasserelle.component.css']
})
export class UpdpasserelleComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  employeeData: Passerelle[];
  // EmployeeProfile: any = ['Température', 'Humidité', 'Vent', 'Pression', 'Lumière','Sol'];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: PasserelleDataService,
    private router: Router,
    private toast:NgToastService
  ) {}

  ngOnInit() {
    this.updateEmployee();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getCapteur(id);
    this.editForm = this.fb.group({

      Nom: [''],
      Description: [''],
      nomUtilisateur: [''],
      GPSLong: [''],
      GPSLat:[''],
      // Sensor1:[''],
 
    });
  }

  // Choose options with select-dropdown
  // updateProfile(e:Event) {
  //   this.editForm.get('type').setValue(e, {
  //     onlySelf: true,
  //   });
  // }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getCapteur(id) {
    this.apiService.getbyid(id).subscribe((data) => {
      this.editForm.setValue({
        Nom: data['Nom'],
        Description: data['Description'],
        nomUtilisateur: data['nomUtilisateur'],
        GPSLong: data['GPSLong'],
        GPSLat: data['GPSLat'],
        // Sensor1: data['Sensor1'],
      });
    });
  }

  updateEmployee() {
    this.editForm = this.fb.group({
      Nom: ['' ],
      Description: [''],
      nomUtilisateur: [''],
      GPSLong: [''],
      GPSLat:[''],
      // Sensor1:[''],
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
            this.router.navigateByUrl('/admin/listpasserelle');
            this.toast.success({detail:"Succès !",summary:"modifiée avec succès",duration:5000})
            console.log('Content updated successfully!');
          },
          error: (e) => {
            console.log(e);
            this.toast.error({detail:"échoué !",summary:"modification non effectuée",duration:5000})
        },});
      
    }
  }
}
