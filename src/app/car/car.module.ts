import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class CarModule {

  // les attributs 

  public id_car!:number ;
  public model!:string ;
  public hp!:number;
  public marque!:string ;




 }
