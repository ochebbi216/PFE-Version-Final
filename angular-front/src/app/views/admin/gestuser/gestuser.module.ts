import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjouteruserComponent } from './ajouteruser/ajouteruser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlashMessagesModule } from 'flash-messages-angular';
import { UpduserComponent } from './upduser/upduser.component';


@NgModule({
  declarations: [
    AjouteruserComponent,
    ListuserComponent,
    UpdateuserComponent,
    UpduserComponent

  ],
  imports: [
    CommonModule,
    FlashMessagesModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
    
  ]
})
export class GestuserModule { }
