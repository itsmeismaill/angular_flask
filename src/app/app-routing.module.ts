import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ProfComponent } from './prof/prof.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { EditcarComponent } from './editcar/editcar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
// url avec la componenent 
{
  path:"addcar" , component:CarComponent} ,
  {path:"lisofcars" , component:CarsComponent} ,
  {path:"calculator" , component:CalculatorComponent} ,
  {path:"editcar/:id_car" , component:EditcarComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
