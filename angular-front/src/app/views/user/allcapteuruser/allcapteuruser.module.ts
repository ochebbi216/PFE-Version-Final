import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllcapteuruserRoutingModule } from './allcapteuruser-routing.module';
import { AllcapteuruserComponent } from './allcapteuruser.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../allcapteuruser/search-filter.pipe';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AllcapteuruserComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    AllcapteuruserRoutingModule,
    FormsModule,
    Ng2GoogleChartsModule,
    HttpClientModule

  ]
})
export class AllcapteuruserModule { }
