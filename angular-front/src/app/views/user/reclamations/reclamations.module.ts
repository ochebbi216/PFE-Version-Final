import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjouterReclamationComponent } from './ajouter-reclamation/ajouter-reclamation.component';
import { ListedesreclamationsComponent } from './listedesreclamations/listedesreclamations.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { FlashMessagesModule } from 'flash-messages-angular';
import { UpdatereclamationuserComponent } from './updatereclamationuser/updatereclamationuser.component';



@NgModule({
  declarations: [
    AjouterReclamationComponent,
    ListedesreclamationsComponent,
    DetailsComponent,
    UpdatereclamationuserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule.forRoot(),

    ReactiveFormsModule
  ]
})
export class ReclamationsModule { }
