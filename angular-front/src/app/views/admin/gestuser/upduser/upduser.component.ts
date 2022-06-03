import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { User } from 'src/app/_classesuser/user';
import { UserService } from 'src/app/_servicesuser/user.service';

@Component({
  selector: 'app-upduser',
  templateUrl: './upduser.component.html',
  styleUrls: ['./upduser.component.css']
})
export class UpduserComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  employeeData: User[];
  activation: any = [true, false];
  // paiement: any = [true, false];

  updateact(e:Event) {
    this.editForm.get('activated').setValue(e, {
      onlySelf: true,
    });
  }

  updatepay(e:Event) {
    this.editForm.get('paied').setValue(e, {
      onlySelf: true,
    });
  }

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: UserService,
    private router: Router,
    private toast:NgToastService
  ) {}

  ngOnInit() {
    this.updateUser();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getUser(id);
    this.editForm = this.fb.group({

      firstname: ['' ],
      lastname:'',
      email: [''],
      password: [''],
      activated: [''],
      // paied: [''],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getUser(id) {
    this.apiService.getbyid(id).subscribe((data) => {
      this.editForm.setValue({
        firstname: data['firstname'],
        lastname: data['lastname'],
        email: data['email'],
        password: data['password'],
        activated: data['activated'],
        // paied: data['paied'],

      });
    });
  }

  updateUser() {
    this.editForm = this.fb.group({
      firstname: ['' ],
      lastname:'',
      email: [''],
      password: [''],
      activated: [''],
      // paied: [''],
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
            this.router.navigateByUrl('/admin/listusers');
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