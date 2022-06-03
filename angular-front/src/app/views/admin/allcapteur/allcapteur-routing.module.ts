import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcapteurComponent } from './allcapteur/allcapteur.component';

const routes: Routes = [
  {path:'',component:AllcapteurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllcapteurRoutingModule { }
