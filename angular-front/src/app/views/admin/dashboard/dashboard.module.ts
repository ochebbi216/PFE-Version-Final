import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { FlashMessagesModule } from 'flash-messages-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    // MatCardModule,
    // MatDatepickerModule,
    FlashMessagesModule.forRoot(),
    // MatIcon

    


  ]
})
export class DashboardModule { }
