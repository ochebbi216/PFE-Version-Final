import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjouteractionneurComponent } from './ajouteractionneur/ajouteractionneur.component';
import { ListactionneurComponent } from './listactionneur/listactionneur.component';
import { UpdateactionneurComponent } from './updateactionneur/updateactionneur.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdactionneurComponent } from './updactionneur/updactionneur.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AjouteractionneurComponent,
    ListactionneurComponent,
    UpdateactionneurComponent,
    UpdactionneurComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class GestactionneurModule { }
