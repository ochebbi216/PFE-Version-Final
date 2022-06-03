import { Component, OnInit } from '@angular/core';
import { ActionneurDataService } from 'src/app/services/actionneur-data.service';
import { CapteurDataService } from 'src/app/services/capteur-data.service';
import { PasserelleDataService } from 'src/app/services/passerelle-data.service';
import { UserService } from 'src/app/_servicesuser/user.service';

@Component({
  selector: 'app-firstpage-layout',
  templateUrl: './firstpage-layout.component.html',
  styleUrls: ['./firstpage-layout.component.css']
})
export class FirstpageLayoutComponent implements OnInit {

  pass: any;
  caps: any;
  users: any;
  acts: any;
constructor( private actdata: ActionneurDataService,private capdata: CapteurDataService, private passdata: PasserelleDataService,private userdata: UserService, ) { }


  ngOnInit(): void {
    //actionneur get all"
    this.actdata.getall().subscribe(
      res=> {
        this.acts = res;
      },
      err=>{
          console.log(err);
      }
    );
//capteur get all
    this.capdata.getall().subscribe(
      res=> {
        this.caps = res;
      },
      err=>{
          console.log(err);
      }
    );
//passerelle get all
    this.passdata.getall().subscribe(
      res=> {
        this.pass = res;
      },
      err=>{
          console.log(err);
      }
    );
//user get all
this.userdata.getall().subscribe(
  res=> {
    this.users = res;
    const usr=this.users;
  },
  err=>{
      console.log(err);
  }
);
  }

}
