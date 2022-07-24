import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { CatalogueComponent } from './produit/catalogue/catalogue.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './produit/detail/detail.component';



@NgModule({
  declarations: [
    ClientComponent,
    CatalogueComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LayoutModule,
    RouterModule
  ]
})
export class ClientModule { }
