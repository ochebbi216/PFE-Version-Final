import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AjouteractionneuruserComponent } from './ajouteractionneuruser/ajouteractionneuruser.component';
import { ListactionneuruserComponent } from './listactionneuruser/listactionneuruser.component';
import { DetailsactionneuruserComponent } from './detailsactionneuruser/detailsactionneuruser.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateactionneuruserComponent } from './updateactionneuruser/updateactionneuruser.component';




@NgModule({
  declarations: [
    AjouteractionneuruserComponent,
    ListactionneuruserComponent,
    DetailsactionneuruserComponent,
    UpdateactionneuruserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class GestactionneuruserModule { }
