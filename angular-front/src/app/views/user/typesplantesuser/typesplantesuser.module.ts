import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypesplantesuserComponent } from './typesplantesuser/typesplantesuser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TypesplantesuserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class TypesplantesuserModule { }
