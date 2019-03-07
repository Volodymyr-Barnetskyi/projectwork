import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DoctorsComponent } from './doctors/doctors.component';
import {MatButtonModule} from '@angular/material/button';
import { HospitalComponent } from './hospital/hospital.component';
import {MatToolbarModule, MatInputModule, MatCardModule} from '@angular/material';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DoctorsComponent,
    HospitalComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule
  ],
  exports: [
    HeaderComponent,
    DoctorsComponent,
    AuthComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
