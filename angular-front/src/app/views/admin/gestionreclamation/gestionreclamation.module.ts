import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListreclamaionComponent } from './listreclamaion/listreclamaion.component';
import { DetailreclamaionComponent } from './detailreclamaion/detailreclamaion.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'flash-messages-angular';
import { UpdatereclamationComponent } from './updatereclamation/updatereclamation.component';



@NgModule({
  declarations: [
    ListreclamaionComponent,
    DetailreclamaionComponent,
    UpdatereclamationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    ReactiveFormsModule
  ]
})
export class GestionreclamationModule { }
