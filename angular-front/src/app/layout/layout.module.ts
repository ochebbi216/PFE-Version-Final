import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthAdminLayoutComponent } from './auth-admin-layout/auth-admin-layout.component';
import { FirstpageLayoutComponent } from './firstpage-layout/firstpage-layout.component';
import { AuthUserLayoutComponent } from './auth-user-layout/auth-user-layout.component';
import { RegisterAdminLayoutComponent } from './register-admin-layout/register-admin-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AdminLayoutComponent } from './admin-template-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { UserLayoutComponent } from './user-template-layout/user-layout.component';
import { Page404Component } from './page404/page404.component';
import { FlashMessagesModule } from 'flash-messages-angular';
import { RegisterUserLayoutComponent } from './register-user-layout/register-user-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuthAdminLayoutComponent,
    FirstpageLayoutComponent,
    AuthUserLayoutComponent,
    RegisterUserLayoutComponent,
    RegisterAdminLayoutComponent,
    UserLayoutComponent,
    Page404Component,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    FlashMessagesModule.forRoot(),
    MatSliderModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule

   
  ]
})
export class LayoutModule { }
