import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from 'src/app/_servicesadmin/admin.service';
import { AuthService } from 'src/app/_servicesadmin/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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


//   firstname: any;
//   lastname: any;
//   email: any;
//   ad: any;
//   myImage: any;
//   image: any;
//   id:any;
//   admin:any;
//   createdDate: any;

//   constructor(
//     public authService: AuthService,
//     public UserService : UserService,
//     private router: Router,
//     private actRoute:ActivatedRoute,
 
//   ) { 
//     this.firstname=authService.getfirstname()
//     this.lastname=authService.getlastname()
//     this.email=authService.getemail()
//     this.ad=authService.getrole()
//     this.createdDate=authService.getcreatedDate()




//   }
//   selectImage(e: any ){
//     this.myImage = e.target.files[0];
    
//       }
//       ajouter (){
//         let formData = new FormData();

//         if (this.myImage){

//           formData.append('image',this.myImage);
//           }
        
       
//         this.UserService.addimage(this.id,formData).subscribe(
//         (res) =>{
//           this.router.navigate(['/admin/profile']);
//         },
//         (err)=> {
//           console.log(err);
//         },
        
//         );
        
        
        
//           } 
//   ngOnInit(): void {
//     this.id = this.actRoute.snapshot.paramMap.get('id');
//     this.UserService.getbyid(this.id).subscribe(
//       res=>{
//         this.admin = res
//       }
//     );
   
//   }

// }
