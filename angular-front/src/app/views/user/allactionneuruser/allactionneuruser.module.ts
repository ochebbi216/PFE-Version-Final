import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from './allactionneuruser/search-filter.pipe';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AllactionneuruserComponent } from './allactionneuruser/allactionneuruser.component';
import { AllactionneuruserRoutingModule } from './allactionneuruser-routing.module';



@NgModule({
  declarations: [
    AllactionneuruserComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    AllactionneuruserRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ]
})
export class AllactionneuruserModule { }
