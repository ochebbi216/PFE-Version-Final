import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuardService } from './guards_admin/admin-auth-guard.service';
import { IsloggedinServiceA } from './guards_admin/isloggedin.service';
import { AuthGuardService } from './guards_user/auth-guard.service';
import { IsloggedinService } from './guards_user/isloggedin.service';
import { AdminLayoutComponent } from './layout/admin-template-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layout/auth-admin-layout/auth-admin-layout.component';
import { AuthUserLayoutComponent } from './layout/auth-user-layout/auth-user-layout.component';
import { FirstpageLayoutComponent } from './layout/firstpage-layout/firstpage-layout.component';
import { Page404Component } from './layout/page404/page404.component';
import { RegisterAdminLayoutComponent } from './layout/register-admin-layout/register-admin-layout.component';
import { RegisterUserLayoutComponent } from './layout/register-user-layout/register-user-layout.component';
import { UserLayoutComponent } from './layout/user-template-layout/user-layout.component';
import { AllactionneurComponent } from './views/admin/allactionneur/allactionneur/allactionneur.component';
import { CommandeadistanceadminComponent } from './views/admin/commandeadistanceadmin/commandeadistanceadmin/commandeadistanceadmin.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard/dashboard.component';
import { AjouteractionneurComponent } from './views/admin/gestactionneur/ajouteractionneur/ajouteractionneur.component';
import { ListactionneurComponent } from './views/admin/gestactionneur/listactionneur/listactionneur.component';
import { UpdactionneurComponent } from './views/admin/gestactionneur/updactionneur/updactionneur.component';
import { UpdateactionneurComponent } from './views/admin/gestactionneur/updateactionneur/updateactionneur.component';
import { AjoutercapteurComponent } from './views/admin/gestcapteur/ajoutercapteur/ajoutercapteur.component';
import { ListcapteurComponent } from './views/admin/gestcapteur/listcapteur/listcapteur.component';
import { UpdatecapteurComponent } from './views/admin/gestcapteur/updatecapteur/updatecapteur.component';
import { UpdcapteurComponent } from './views/admin/gestcapteur/updcapteur/updcapteur.component';
import { DetailreclamaionComponent } from './views/admin/gestionreclamation/detailreclamaion/detailreclamaion.component';
import { ListreclamaionComponent } from './views/admin/gestionreclamation/listreclamaion/listreclamaion.component';
import { UpdatereclamationComponent } from './views/admin/gestionreclamation/updatereclamation/updatereclamation.component';
import { AjouterpasserelleComponent } from './views/admin/gestpasserelle/ajouterpasserelle/ajouterpasserelle.component';
import { ListpasserelleComponent } from './views/admin/gestpasserelle/listpasserelle/listpasserelle.component';
import { UpdatepasserelleComponent } from './views/admin/gestpasserelle/updatepasserelle/updatepasserelle.component';
import { UpdpasserelleComponent } from './views/admin/gestpasserelle/updpasserelle/updpasserelle.component';
import { AjouteruserComponent } from './views/admin/gestuser/ajouteruser/ajouteruser.component';
import { ListuserComponent } from './views/admin/gestuser/listuser/listuser.component';
import { UpdateuserComponent } from './views/admin/gestuser/updateuser/updateuser.component';
import { UpduserComponent } from './views/admin/gestuser/upduser/upduser.component';
import { ProfileComponent } from './views/admin/profile/profile.component';
import { SereurbrokerComponent } from './views/admin/sereurbroker/sereurbroker/sereurbroker.component';
import { TopicComponent } from './views/admin/topic/topic/topic.component';
import { TypesplantesComponent } from './views/admin/typesplantes/typesplantes/typesplantes.component';
import { AllactionneuruserComponent } from './views/user/allactionneuruser/allactionneuruser/allactionneuruser.component';
import { CommandeadistanceComponent } from './views/user/commandeadistance/commandeadistance/commandeadistance.component';
import { AjouteractionneuruserComponent } from './views/user/gestactionneuruser/ajouteractionneuruser/ajouteractionneuruser.component';
import { DetailsactionneuruserComponent } from './views/user/gestactionneuruser/detailsactionneuruser/detailsactionneuruser.component';
import { ListactionneuruserComponent } from './views/user/gestactionneuruser/listactionneuruser/listactionneuruser.component';
import { UpdateactionneuruserComponent } from './views/user/gestactionneuruser/updateactionneuruser/updateactionneuruser.component';
import { AjoutercapteuruserComponent } from './views/user/gestcapteuruser/ajoutercapteuruser/ajoutercapteuruser.component';
import { DetailscapteuruserComponent } from './views/user/gestcapteuruser/detailscapteuruser/detailscapteuruser.component';
import { ListcapteuruserComponent } from './views/user/gestcapteuruser/listcapteuruser/listcapteuruser.component';
import { UpdatecapteuruserComponent } from './views/user/gestcapteuruser/updatecapteuruser/updatecapteuruser.component';
import { AjouterpasserelleuserComponent } from './views/user/gestpasserelleuser/ajouterpasserelleuser/ajouterpasserelleuser.component';
import { DetailspasserelleuserComponent } from './views/user/gestpasserelleuser/detailspasserelleuser/detailspasserelleuser.component';
import { ListpasserelleuserComponent } from './views/user/gestpasserelleuser/listpasserelleuser/listpasserelleuser.component';
import { UpdatepasserelleuserComponent } from './views/user/gestpasserelleuser/updatepasserelleuser/updatepasserelleuser.component';
import { AjouterReclamationComponent } from './views/user/reclamations/ajouter-reclamation/ajouter-reclamation.component';
import { DetailsComponent } from './views/user/reclamations/details/details.component';
import { ListedesreclamationsComponent } from './views/user/reclamations/listedesreclamations/listedesreclamations.component';
import { UpdatereclamationuserComponent } from './views/user/reclamations/updatereclamationuser/updatereclamationuser.component';
import { TopicuserComponent } from './views/user/topicuser/topicuser/topicuser.component';


import { TypesplantesuserComponent } from './views/user/typesplantesuser/typesplantesuser/typesplantesuser.component';
import { UserprofileComponent } from './views/user/userprofile/userprofile.component';


const routes: Routes = [
  {path:'',component:FirstpageLayoutComponent},
  {path:'user',component:UserLayoutComponent,children:[

    {path:'home',loadChildren:()=>import('./views/user/home/home.module').then(m=>m.HomeModule), canActivate: [AuthGuardService]},
    {path:'capteurs',loadChildren:()=>import('./views/user/allcapteuruser/allcapteuruser.module').then(m=>m.AllcapteuruserModule), canActivate: [AuthGuardService]},
    {path:'actionneurs',component:AllactionneuruserComponent , canActivate: [AuthGuardService]},
//gestion passerelle
    {path:'listpasserelle',component:ListpasserelleuserComponent, canActivate: [AuthGuardService]},
    {path:'detailpasserelle/:id',component:DetailspasserelleuserComponent, canActivate: [AuthGuardService]},
    {path:'ajouterpasserelle',component:AjouterpasserelleuserComponent, canActivate: [AuthGuardService]},
    {path:'updatepasserelle/:id',component:UpdatepasserelleuserComponent, canActivate: [AuthGuardService]},
// gestion actionneur
    {path:'listactionneur',component:ListactionneuruserComponent, canActivate: [AuthGuardService]},
    {path:'detailactionneur/:id',component:DetailsactionneuruserComponent, canActivate: [AuthGuardService]},
    {path:'ajouteractionneur',component:AjouteractionneuruserComponent, canActivate: [AuthGuardService]},
    {path:'updateactionneur/:id',component:UpdateactionneuruserComponent, canActivate: [AuthGuardService]},
// gestion capteur
    {path:'listcapteur',component:ListcapteuruserComponent, canActivate: [AuthGuardService]},
    {path:'detailcapteur/:id',component:DetailscapteuruserComponent, canActivate: [AuthGuardService]},
    {path:'ajoutercapteur',component:AjoutercapteuruserComponent, canActivate: [AuthGuardService]},
    {path:'updatecapteur/:id',component:UpdatecapteuruserComponent, canActivate: [AuthGuardService]},
// gestion reclamation
    {path:'ajouterreclamation',component:AjouterReclamationComponent,canActivate: [AuthGuardService]},
    {path:'listedesreclamations',component:ListedesreclamationsComponent,canActivate: [AuthGuardService]},
    {path:'details/:id',component:DetailsComponent,canActivate: [AuthGuardService]},
    {path:'update/:id',component:UpdatereclamationuserComponent,canActivate: [AuthGuardService]},

    {path:'profile/:id',component:UserprofileComponent , canActivate: [AuthGuardService]},
    {path:'commanderadistance',component:CommandeadistanceComponent, canActivate: [AuthGuardService]},
    {path:'topic',component:TopicuserComponent, canActivate: [AuthGuardService]},
    {path:'typesplantes',component:TypesplantesuserComponent, canActivate: [AuthGuardService]}
  ]},
  {path:'admin',component:AdminLayoutComponent ,children:[
   
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule) , canActivate: [AdminAuthGuardService]},
    {path:'capteurs',loadChildren:()=>import('./views/admin/allcapteur/allcapteur.module').then(m=>m.AllcapteurModule) , canActivate: [AdminAuthGuardService]},
    {path:'actionneurs',component:AllactionneurComponent , canActivate: [AdminAuthGuardService]},
    // {path:'actionneurs',loadChildren:()=>import('./views/admin/allactionneur/allactionneur.module').then(m=>m.AllactionneurModule) , canActivate: [AdminAuthGuardService]},
// gestion users
    {path:'listusers',component:ListuserComponent , canActivate: [AdminAuthGuardService]},
    {path:'detailuser/:id',component:UpdateuserComponent , canActivate: [AdminAuthGuardService]},
    {path:'ajouteruser',component:AjouteruserComponent , canActivate: [AdminAuthGuardService]},
    {path:'updateuser/:id',component:UpduserComponent , canActivate: [AdminAuthGuardService]},

// gestion passerelle
    {path:'listpasserelle',component:ListpasserelleComponent , canActivate: [AdminAuthGuardService]},
    {path:'detailpasserelle/:id',component:UpdatepasserelleComponent , canActivate: [AdminAuthGuardService]},
    {path:'ajouterpasserelle',component:AjouterpasserelleComponent , canActivate: [AdminAuthGuardService]},
    {path:'updatepasserelle/:id',component:UpdpasserelleComponent , canActivate: [AdminAuthGuardService]},
// gestion actionneur
    {path:'listactionneur',component:ListactionneurComponent , canActivate: [AdminAuthGuardService]},
    {path:'detailactionneur/:id',component:UpdateactionneurComponent , canActivate: [AdminAuthGuardService]},
    {path:'ajouteractionneur',component:AjouteractionneurComponent , canActivate: [AdminAuthGuardService]},
    {path:'updateactionneur/:id',component:UpdactionneurComponent , canActivate: [AdminAuthGuardService]},
// gestion capteur
    {path:'listcapteur',component:ListcapteurComponent , canActivate: [AdminAuthGuardService]},
    {path:'detailscapteur/:id',component:UpdatecapteurComponent , canActivate: [AdminAuthGuardService]},
    {path:'ajoutercapteur',component:AjoutercapteurComponent , canActivate: [AdminAuthGuardService]},
    {path:'updatecapteur/:id',component:UpdcapteurComponent , canActivate: [AdminAuthGuardService]},
// gestion reclamation
    {path:'listreclamation',component:ListreclamaionComponent , canActivate: [AdminAuthGuardService]},
    {path:'detailreclamation/:id',component:DetailreclamaionComponent , canActivate: [AdminAuthGuardService]},
    {path:'modifierreclamation/:id',component:UpdatereclamationComponent , canActivate: [AdminAuthGuardService]},


    {path:'profile/:id',component:ProfileComponent , canActivate: [AdminAuthGuardService]},
    {path:'commanderadistance',component:CommandeadistanceadminComponent, canActivate: [AdminAuthGuardService]},
    {path:'serveurbroker',component:SereurbrokerComponent, canActivate: [AdminAuthGuardService]},
    {path:'topic',component:TopicComponent, canActivate: [AdminAuthGuardService]},
    {path:'typesplantes',component:TypesplantesComponent, canActivate: [AdminAuthGuardService]}


  ]},
  {path:'admin/login',component:AuthAdminLayoutComponent},
  {path:'admin/register',component:RegisterAdminLayoutComponent},
  {path:'user/login',component:AuthUserLayoutComponent},
  {path:'user/register',component:RegisterUserLayoutComponent},
  


  {path:'notfound',component:Page404Component},

  { path: '**', redirectTo: 'notfound' },
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
