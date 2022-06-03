import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllcapteurRoutingModule } from './allcapteur-routing.module';
import { AllcapteurComponent } from './allcapteur/allcapteur.component';
import { FormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from './allcapteur/search-filter.pipe';



@NgModule({
  declarations: [
    AllcapteurComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    AllcapteurRoutingModule,
    FormsModule,
   Ng2GoogleChartsModule,
   HttpClientModule,
  
  ],
  
})
export class AllcapteurModule { }
