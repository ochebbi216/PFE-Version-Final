import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { NgToastService } from 'ng-angular-popup';
import { LoginData } from 'src/app/_classesuser/login-data';
import { AuthService } from 'src/app/_servicesuser/auth.service';
import { UserService } from 'src/app/_servicesuser/user.service';
@Component({
  selector: 'app-auth-user-layout',
  templateUrl: './auth-user-layout.component.html',
  styleUrls: ['./auth-user-layout.component.css']
})
export class AuthUserLayoutComponent implements OnInit {
  hide = true;
  loginData = new LoginData("","");
  url:any;
  toastrService: any;
  rememberme : string;

  // activated: any;
  // paied: any;

submited:boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    private actrouter:ActivatedRoute,
    private toast : NgToastService

  ) {
    this.url=this.actrouter.snapshot.queryParams['returnUrl'] || '/user/home'

   }


  ngOnInit() {
    // this.AutoLogin;
    if(this.authService.loggedIn())
    this.router.navigateByUrl('/user/home');
  }

  onLoginSubmit() {
    const loginData = new LoginData(this.loginData.email, this.loginData.password);
    
    this.authService.authenticateUser(loginData).subscribe(res => {
      if(res.succes) {
        this.authService.storeUserData(res.token, res.user);
        this.toast.success({detail:"Boujour !" ,summary:"Vous êtes maintenant connecté",duration:5000})
        this.submited=false;
        this.router.navigate([this.url]);
 
      }
      else {
        // this.flashMessagesService.show('votre compte est non payé et désactivé ! ', { cssClass: 'alert-danger', timeout: 4500});
        this.toast.error({detail:"échoué !",summary:res.msg,duration:5000})
        // this.submited=false;
        this.router.navigate(['/user/login']);
      }
    });
  }
//   AutoLogin(){
//     const accessTokenObj = localStorage.getItem("token");
//     // Retrieve rememberMe value from local storage
//     const rememberme = localStorage.getItem('rememberme');
// console.log(accessTokenObj);
//     if (accessTokenObj && rememberme === 'yes') {
//       this.router.navigate(['/user/home']);
//     } else {
//       this.router.navigate(['/user/login']);
//       }
//    }

}


