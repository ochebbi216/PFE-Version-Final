import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { NgToastService } from 'ng-angular-popup';
import { Admin } from 'src/app/_classesadmin/admin';
import { UserService } from 'src/app/_servicesadmin/admin.service';
import { AuthService } from 'src/app/_servicesadmin/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  
  userDetails: any;
  firstname: any;
  lastname: any;
  image: any;
  users: any;
  id: any;
  _id: any;
  constructor(
    public authService: AuthService,
    private datas:UserService,
    private router: Router,
    private actRoute:ActivatedRoute,
    private toast : NgToastService
  ) {
    this.firstname=authService.getfirstname()
    this.lastname=authService.getlastname()
    this._id=authService.getid()
  
    }
   
    user: any = {
      firstname:'',
      lastname:'',
      email:'',
      password:'',
      activated:'',
      paied:'',
      
        }
  ngOnInit(): void {
    this.datas.getall().subscribe(
      res=> {
        this.users = res;
      },
      err=>{
          console.log(err);
      }
    );
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.datas.getbyid(this.id).subscribe(
      res=>{
        this.user = res
      }
    );
   

  }
  update(_id){
    this.router.navigate(['/admin/profile/'+this._id])
  }

  onLogoutClick() {
    this.authService.logout();
    this.toast.success({detail:"À plus tard " ,summary:"Vous êtes maintenant déconnecté",duration:5000})

    this.router.navigate(['admin/login']);
  }
}

