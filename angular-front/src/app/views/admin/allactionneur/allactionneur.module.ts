import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllactionneurRoutingModule } from './allactionneur-routing.module';
import { AllactionneurComponent } from './allactionneur/allactionneur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from './allactionneur/search-filter.pipe';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    AllactionneurComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    AllactionneurRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    
  ]
})
export class AllactionneurModule { }
