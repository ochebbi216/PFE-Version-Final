import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjoutercapteurComponent } from './ajoutercapteur/ajoutercapteur.component';
import { ListcapteurComponent } from './listcapteur/listcapteur.component';
import { UpdatecapteurComponent } from './updatecapteur/updatecapteur.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdcapteurComponent } from './updcapteur/updcapteur.component';



@NgModule({
  declarations: [
    AjoutercapteurComponent,
    ListcapteurComponent,
    UpdatecapteurComponent,
    UpdcapteurComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class GestcapteurModule { }
