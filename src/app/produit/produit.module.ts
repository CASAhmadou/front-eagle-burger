import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitComponent } from './produit.component';
import { MenuComponent } from './catalogue/menu/menu.component';
import { BurgerComponent } from './catalogue/burger/burger.component';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ProduitRoutingModule } from './produit-routing.module';

@NgModule({
  declarations: [
    ProduitComponent,
    MenuComponent,
    BurgerComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    RouterModule,
  ]
})
export class ProduitModule { }
