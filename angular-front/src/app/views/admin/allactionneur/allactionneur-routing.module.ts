import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllactionneurComponent } from './allactionneur/allactionneur.component';

const routes: Routes = [
  {path:'',component:AllactionneurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllactionneurRoutingModule { }
