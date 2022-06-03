import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { Admin } from 'src/app/_classesadmin/admin';
import { UserService } from 'src/app/_servicesadmin/admin.service';

@Component({
  selector: 'app-register-admin-layout',
  templateUrl: './register-admin-layout.component.html',
  styleUrls: ['./register-admin-layout.component.css']
})
export class RegisterAdminLayoutComponent implements OnInit {
  hide = true;
  model = new Admin("", "", "", "");

  constructor(
    private userService: UserService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  onRegisterSubmit() {
    this.userService
    .registerUser(this.model)
    .subscribe(res => {
      if(res.success) {
        this.flashMessagesService.show("User registered successfully", { cssClass: 'alert-success', timeout: 2500});
        this.router.navigate(['/admin/login']);
      }
      else {
        this.flashMessagesService.show(res.msg, { cssClass: 'alert-danger', timeout: 2500});
        this.router.navigate(['/admin/register']);
      }
    });
  }

  ngOnInit() { }
}
