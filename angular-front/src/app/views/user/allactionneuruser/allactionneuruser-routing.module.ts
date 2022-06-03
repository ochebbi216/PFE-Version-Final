import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllactionneuruserComponent } from './allactionneuruser/allactionneuruser.component';

const routes: Routes = [
  {path:'',component:AllactionneuruserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllactionneuruserRoutingModule { }
