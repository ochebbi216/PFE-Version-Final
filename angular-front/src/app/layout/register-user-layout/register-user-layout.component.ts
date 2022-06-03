import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { number } from 'echarts';
import { FlashMessagesService } from 'flash-messages-angular';
import { NgToastService } from 'ng-angular-popup';
import { User } from 'src/app/_classesuser/user';
import { UserService } from 'src/app/_servicesuser/user.service';


@Component({
  selector: 'app-register-user-layout',
  templateUrl: './register-user-layout.component.html',
  styleUrls: ['./register-user-layout.component.css']
})
export class RegisterUserLayoutComponent implements OnInit {
  hide = true;
  model = new User("", "", "", "");
  unamePattern = "[A-Za-z0-9]+"; 
  pwdpattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}";
  constructor(
    private userService: UserService,
    private router: Router,
    private toast : NgToastService

  ) { }

  onRegisterSubmit() {
    this.userService.registerUser(this.model)
    .subscribe(res => {
      if(res.success) {
        this.toast.success({detail:"Bienvenue !" ,summary:"Votre compte est registrer avec success, pour l'utilisé il faut été activé par l'admin à la premiére fois",duration:5000})
        // this.flashMessagesService.show("Votre compte est registrer avec success, pour l'utilisé il faut été activé par l'admin à la premiére fois ", { cssClass: 'alert-success', timeout: 5500});
        this.router.navigate(['user/login']);
      }
      else {
        this.toast.error({detail:"échoué !",summary:res.msg,duration:5000})

        // this.flashMessagesService.show(res.msg, { cssClass: 'alert-danger', timeout: 2500});
        this.router.navigate(['user/register']);
      }
    });
  }

  ngOnInit() { }
}
