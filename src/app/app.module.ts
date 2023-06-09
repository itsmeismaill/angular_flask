import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ProfComponent } from './prof/prof.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { HttpClientModule } from '@angular/common/http';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { EditcarComponent } from './editcar/editcar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Component} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    ProfComponent,
    CalculatorComponent,
    CarComponent,
    CarsComponent,
    EditcarComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
