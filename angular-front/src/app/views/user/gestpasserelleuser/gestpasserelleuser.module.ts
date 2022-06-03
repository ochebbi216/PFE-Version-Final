import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjouterpasserelleuserComponent } from './ajouterpasserelleuser/ajouterpasserelleuser.component';
import { ListpasserelleuserComponent } from './listpasserelleuser/listpasserelleuser.component';
import { DetailspasserelleuserComponent } from './detailspasserelleuser/detailspasserelleuser.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { UpdatepasserelleuserComponent } from './updatepasserelleuser/updatepasserelleuser.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { GoogleChartsModule } from 'angular-google-charts';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    AjouterpasserelleuserComponent,
    ListpasserelleuserComponent,
    DetailspasserelleuserComponent,
    UpdatepasserelleuserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    AngularEditorModule,
    Ng2GoogleChartsModule,
    GoogleChartsModule,
    GoogleMapsModule
    
    
  ]
})
export class GestpasserelleuserModule { }
