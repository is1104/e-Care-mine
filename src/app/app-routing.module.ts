import { PatientDefaultPageComponent } from './patient-default-page/patient-default-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PatientHomeComponent } from './patient-home-navibar/patient-home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',redirectTo:'/patientHome',pathMatch:'full'},
  {path:'patientHome',component:PatientDefaultPageComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PatientHomeComponent,PageNotFoundComponent,PatientDefaultPageComponent];