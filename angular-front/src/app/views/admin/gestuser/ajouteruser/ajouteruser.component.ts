import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { NgToastService } from 'ng-angular-popup';
import { User } from 'src/app/_classesuser/user';

import { UserService } from 'src/app/_servicesuser/user.service';

@Component({
  selector: 'app-ajouteruser',
  templateUrl: './ajouteruser.component.html',
  styleUrls: ['./ajouteruser.component.css']
})
export class AjouteruserComponent implements OnInit {
  model = new User("", "", "", "");

  constructor(
    private userService: UserService,
    private router: Router,
    private toast:NgToastService
  ) { }

   onRegisterSubmit() {
    this.userService
    .registerUser(this.model)
    .subscribe(res => {
      if(res.success) {
        this.toast.success({detail:"Succès !",summary:"nouveau données est bien enregistrée",duration:5000})
        this.router.navigate(['admin/listusers']);
      }
      else {
        this.toast.error({detail:"échoué !",summary:"votre données n'est pas enregistrer",duration:5000})
        // this.router.navigate(['admin/ajouteruser']);
      }
    });
  }
   
     ngOnInit(): void {
     }
   
   }



    
     