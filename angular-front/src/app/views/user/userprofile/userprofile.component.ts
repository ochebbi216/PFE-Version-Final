import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/_servicesuser/auth.service';
import { UserService } from 'src/app/_servicesuser/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  ad: any;
  createdDate: any;
  image:any;


  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: UserService,
    private router: Router,
    public authService: AuthService,
    private toast:NgToastService

  ) {
        this.ad=authService.getrole()
    this.createdDate=authService.getcreatedDate()
  }

  ngOnInit() {
    this.updateUser();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getUser(id);
    this.editForm = this.fb.group({

      firstname: ['' ],
      lastname:'',
      email: [''],


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


      });
    });
  }

  updateUser() {
    this.editForm = this.fb.group({
      firstname: ['' ],
      lastname:'',
      email: [''],

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
            // this.router.navigateByUrl('/user/home');
            this.toast.success({detail:"Succès !",summary:"votre données est bien enregistrée",duration:5000})
            console.log('Content updated successfully!');
          },
          error: (e) => {
            console.log(e);
            this.toast.error({detail:"échoué !",summary:"votre données n'est pas enregistrer",duration:5000})

          },
        });
      
    }
  }
}
