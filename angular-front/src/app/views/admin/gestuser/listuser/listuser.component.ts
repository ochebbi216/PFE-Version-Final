import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import { EndpointService } from 'src/app/services/endpoint.service';
import { UserService } from 'src/app/_servicesuser/user.service';
@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  @ViewChild('content', {static:false}) el!: ElementRef;

  public downloadPDF(){
    let pdf = new jsPDF('p','pt','a2');
    pdf.setPage(3);
    pdf.html(this.el.nativeElement,{
    callback:(pdf)=>{
  
      pdf.save('Gestion des utilisateurs '+new Date().toLocaleString()+'.pdf');
    }}
  );
  }
checked:true;
  users: any;
  constructor(  public endpoint: EndpointService , private actRoute: ActivatedRoute , private datas: UserService, private router: Router) { }
  activation: any = ['activaté', 'désactivé'];
  paiement: any = ['payé', 'non payé'];
  editForm: FormGroup;
  // act:'activé'
  // pay:'payé'
  updatepay(e:Event) {
    this.editForm.get('pay').setValue(e, {
      onlySelf: true,
    });
  }
  updateact(e:Event) {
    this.editForm.get('act').setValue(e, {
      onlySelf: true,
    });
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


delete(id:any)  {

        if(window.confirm('Voulez-vous vraiment supprimer ce utilisateur ?')){
          this.datas.delete(id).subscribe(
            res=>{
            this.ngOnInit();
        },
  )
}}

user: any = {
  firstname:'',
  lastname:'',
  email:'',
  password:'',
  activated:'',
  // paied:'',
  
    }
    
     id: any;
    //  submitted = false;

  // getdata(firstname:string,lastname:string,email:string,password:string,activated:string,paied:string ,id:any){
    
  //   this.user.firstname=firstname
  //   this.user.lastname=lastname
  //   this.user.email=email
  //   this.user.password = password
  //   this.user.activated = activated
  //   this.user.paied = paied

  //   this.user.id=id
    
  //   console.log(this.user)

  // }
  // updatenewuser(f:any){
  //       let data=f.value
  //       this.datas.update(this.user.id,data).subscribe(response=>
  //         {
  //         console.log(response)
  //           let indexId=this.users.findIndex((obj:any)=>obj._id==this.user.id)
    
  //           this.users[indexId].firstname=data.firstname
  //           this.users[indexId].lastname=data.lastname
  //           this.users[indexId].email=data.email
  //           this.users[indexId].password=data.password
  //           this.users[indexId].activated=data.activated
  //           this.users[indexId].paied=data.paied
    
  //         },(err:HttpErrorResponse)=>{
  //           console.log(err.message)
          
  //         })
  //     }
      details(id:any){
        this.router.navigate(['/admin/detailuser/'+id])
      }
    }
    // findname(){
    //   var input, filter, table, tr, td, i, txtValue;
    //   input = document.getElementById("myInput");
    //   filter = input.value.toUpperCase();
    //   table = document.getElementById("basic-datatable");
    //   tr = table.getElementsByTagName("tr");
    //   for (i = 0; i < tr.length; i++) {
    //     td = tr[i].getElementsByTagName("td")[0];
    //     if (td) {
    //       txtValue = td.textContent || td.innerText;
    //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //         tr[i].style.display = "";
    //       } else {
    //         tr[i].style.display = "none";
    //       }
    //     }       
    //   }
    // }
    
  
    
  









