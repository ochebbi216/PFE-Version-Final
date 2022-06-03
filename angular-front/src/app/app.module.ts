import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GoogleChartsModule } from 'angular-google-charts';
import { FlashMessagesModule } from 'flash-messages-angular';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardService } from './guards_user/auth-guard.service';
import { LayoutModule } from './layout/layout.module';
import { AllactionneurModule } from './views/admin/allactionneur/allactionneur.module';
import { GestactionneurModule } from './views/admin/gestactionneur/gestactionneur.module';
import { GestcapteurModule } from './views/admin/gestcapteur/gestcapteur.module';
import { GestpasserelleModule } from './views/admin/gestpasserelle/gestpasserelle.module';
import { GestuserModule } from './views/admin/gestuser/gestuser.module';
import { GestactionneuruserModule } from './views/user/gestactionneuruser/gestactionneuruser.module';
import { GestcapteuruserModule } from './views/user/gestcapteuruser/gestcapteuruser.module';
import { GestpasserelleuserModule } from './views/user/gestpasserelleuser/gestpasserelleuser.module';
import { AuthService } from './_servicesuser/auth.service';
import { UserService } from './_servicesuser/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProfileComponent } from './views/admin/profile/profile.component';
import { UserprofileComponent } from './views/user/userprofile/userprofile.component';
// import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { ReclamationDataService } from './services/reclamation-data.service';
import { ReclamationsModule } from './views/user/reclamations/reclamations.module';
import { GestionreclamationModule } from './views/admin/gestionreclamation/gestionreclamation.module';
import { NgToastModule } from 'ng-angular-popup';
import { CommandeadistanceModule } from './views/user/commandeadistance/commandeadistance.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommandeadistanceadminModule } from './views/admin/commandeadistanceadmin/commandeadistanceadmin.module';
import { AllactionneuruserModule } from './views/user/allactionneuruser/allactionneuruser.module';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UserprofileComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NgApexchartsModule,
    HttpClientModule,
    FormsModule,
    GestactionneuruserModule,
    GestcapteuruserModule,
    GestpasserelleuserModule,
    GoogleChartsModule,
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    MatFormFieldModule,
    AngularEditorModule,
    ReclamationsModule,
    GestionreclamationModule,
    ReactiveFormsModule,
    NgToastModule,
    CommandeadistanceModule,
    CommandeadistanceadminModule,
    GoogleMapsModule,
    RouterModule,
    MatButtonToggleModule,
    Ng2GoogleChartsModule,
    AllactionneuruserModule


    
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    ReclamationDataService,

  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
