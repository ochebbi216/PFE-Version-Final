import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SereurbrokerComponent } from './sereurbroker/sereurbroker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SereurbrokerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SereurbrokerModule { }
