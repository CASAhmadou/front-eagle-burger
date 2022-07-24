import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionnaireComponent } from './gestionnaire.component';
import { GestionnaireRoutingModule } from './gestionnaire-routing.module';



@NgModule({
  declarations: [
    GestionnaireComponent
  ],
  imports: [
    CommonModule,
    GestionnaireRoutingModule
  ],
  
})
export class GestionnaireModule { }
