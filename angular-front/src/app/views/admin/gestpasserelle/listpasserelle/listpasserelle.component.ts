import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import jsPDF from 'jspdf';
import { EndpointService } from 'src/app/services/endpoint.service';
import { PasserelleDataService } from 'src/app/services/passerelle-data.service';

@Component({
  selector: 'app-listpasserelle',
  templateUrl: './listpasserelle.component.html',
  styleUrls: ['./listpasserelle.component.css']
})
export class ListpasserelleComponent implements OnInit {
  @ViewChild('content', {static:false}) el!: ElementRef;

  public downloadPDF(){
    let pdf = new jsPDF('p','pt','a2');
    pdf.setPage(3);
    pdf.html(this.el.nativeElement,{
    callback:(pdf)=>{
  
      pdf.save('Gestion des passerelles '+new Date().toLocaleString()+'.pdf');
    }}
  );
  }
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],

};  

  users: any;
  constructor(  public endpoint: EndpointService , private actRoute: ActivatedRoute , private datas: PasserelleDataService, private router: Router) { }

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
        this.passerelle = res
      }
    );
   

  }


delete(id:any)  {

  
      
        if(window.confirm('Voulez-vous vraiment supprimer cette passerelle ?')){
          this.datas.delete(id).subscribe(
            res=>{
            this.ngOnInit();
        },
  
  )
}}
passerelle: any = {
  Nom:'',
  Description: '',
  nomUtilisateur:'',
  GPSLong: '', 
  GPSLat: '',
  // Sensor1:'',

  // Datetime:'',
    }
    
     id: any;
     submitted = false;

    
  // getdata(Nom:string,Description:string,nomUtilisateur:string,GPSLong:number,GPSLat:number,Sensor1:number,Date:string,_id:String){
    
  //   this.passerelle.Nom=Nom
  //   this.passerelle.Description=Description
  //   this.passerelle.nomUtilisateur=nomUtilisateur
  //   this.passerelle.GPSLong=GPSLong
  //   this.passerelle.GPSLat=GPSLat
  //   this.passerelle.Sensor1=Sensor1
  //   // this.passerelle.Sensor2=Sensor2
  //   // this.passerelle.Sensor3=Sensor3
  //   // this.passerelle.Sensor4=Sensor4
  //   // this.passerelle.Sensor5=Sensor5
  //   this.passerelle.Date=Date
  //   this.passerelle._id=_id
    
  //   console.log(this.passerelle)

  // }
  // updatenewupas(f:any){
  //       let data=f.value
  //       this.datas.update(this.passerelle.id,data).subscribe(response=>
  //         {
  //         console.log(response)
  //           let indexId=this.users.findIndex((obj:any)=>obj._id==this.passerelle.id)
    
  //           this.users[indexId].Nom=data.Nom
  //           this.users[indexId].Description=data.Description
  //           this.users[indexId].nomUtilisateur=data.nomUtilisateur
  //           this.users[indexId].GPSLat=data.GPSLong
  //           this.users[indexId].GPSLat=data.GPSLat
  //           this.users[indexId].Sensor1=data.Sensor1
  //           // this.users[indexId].Sensor2=data.Sensor2
  //           // this.users[indexId].Sensor3=data.Sensor3
  //           // this.users[indexId].Sensor4=data.Sensor4
  //           // this.users[indexId].Sensor5=data.Sensor5
  //           this.users[indexId].Date=data.Date
    
    
            
    
    
  //         },(err:HttpErrorResponse)=>{
  //           console.log(err.message)
          
  //         })
  //     }
      details(id:any){
        this.router.navigate(['/user/detailpasserelle/'+id])
      }
    
    }
  
    


