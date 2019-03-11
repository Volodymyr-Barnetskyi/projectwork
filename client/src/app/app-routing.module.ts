import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { HeaderComponent } from './header/header.component';
import { HospitalComponent } from './hospital/hospital.component';
import { AuthComponent } from './auth/auth.component';
import { NewcardComponent } from './newcard/newcard.component';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'header'},
  {path: 'header', component: HeaderComponent},
  {path: 'doctors', component: DoctorsComponent},
  {path: 'hospital', component: HospitalComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'newcard', component: NewcardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
