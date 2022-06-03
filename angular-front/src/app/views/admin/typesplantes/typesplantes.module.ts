import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypesplantesComponent } from './typesplantes/typesplantes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TypesplantesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class TypesplantesModule { }
