import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { LoginDataA } from 'src/app/_classesadmin/login-dataA';
import { AuthService } from 'src/app/_servicesadmin/auth.service';
@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.css']
})
export class AuthAdminLayoutComponent implements OnInit {
  loginData = new LoginDataA("","");
  hide = true;
  url:any;
  remerberme = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private actrouter :ActivatedRoute,
    private flashMessagesService: FlashMessagesService,
    private toast : NgToastService
  ) {
    this.url=this.actrouter.snapshot.queryParams['returnUrl'] || '/admin/dashboard'

   }

  ngOnInit():void {
    if(this.authService.loggedIn())
    this.router.navigateByUrl('/admin/dashboard');
  }
  onLoginSubmit() {
    const loginData = new LoginDataA(this.loginData.email, this.loginData.password);
    
    this.authService.authenticateUser(loginData).subscribe(res => {
      if(res.succes) {
        this.authService.storeUserData(res.token, res.admin);
        this.toast.success({detail:"Boujour !" ,summary:"Vous êtes maintenant connecté",duration:5000})
        this.router.navigate([this.url]);
      }
      else {
        this.toast.error({detail:"échoué !",summary:res.msg,duration:5000})
        // this.flashMessagesService.show(res.msg, { cssClass: 'alert-danger', timeout: 2500});
        
      }
    });
  }

}