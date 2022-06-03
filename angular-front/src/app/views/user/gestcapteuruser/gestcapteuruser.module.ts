import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjoutercapteuruserComponent } from './ajoutercapteuruser/ajoutercapteuruser.component';
import { ListcapteuruserComponent } from './listcapteuruser/listcapteuruser.component';
import { DetailscapteuruserComponent } from './detailscapteuruser/detailscapteuruser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UpdatecapteuruserComponent } from './updatecapteuruser/updatecapteuruser.component';


@NgModule({
  declarations: [
    AjoutercapteuruserComponent,
    ListcapteuruserComponent,
    DetailscapteuruserComponent,
    UpdatecapteuruserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
   
  ]
})
export class GestcapteuruserModule { }
