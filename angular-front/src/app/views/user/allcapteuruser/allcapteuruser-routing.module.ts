import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcapteuruserComponent } from './allcapteuruser.component';

const routes: Routes = [
  {path:'',component:AllcapteuruserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllcapteuruserRoutingModule { }
