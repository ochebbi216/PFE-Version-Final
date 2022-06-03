import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjouterpasserelleComponent } from './ajouterpasserelle/ajouterpasserelle.component';
import { ListpasserelleComponent } from './listpasserelle/listpasserelle.component';
import { UpdatepasserelleComponent } from './updatepasserelle/updatepasserelle.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { UpdpasserelleComponent } from './updpasserelle/updpasserelle.component';



@NgModule({
  declarations: [
    AjouterpasserelleComponent,
    ListpasserelleComponent,
    UpdatepasserelleComponent,
    UpdpasserelleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    AngularEditorModule
  ]
})
export class GestpasserelleModule { }
