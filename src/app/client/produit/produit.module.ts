import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitComponent } from './produit.component';
import { MenuComponent } from './catalogue/menu/menu.component';
import { BurgerComponent } from './catalogue/burger/burger.component';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ProduitRoutingModule } from './produit-routing.module';
import { BoissonComponent } from './complements/boisson/boisson.component';
import { FriteComponent } from './complements/frite/frite.component';
import { ClientModule } from '../client.module';
import { CardComponent } from '../components/card/card.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeCardComponent } from '../components/liste-card/liste-card.component';

@NgModule({
  declarations: [
    ProduitComponent,
    MenuComponent,
    BurgerComponent,
    AccueilComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    ListeCardComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    RouterModule,
  ]
})
export class ProduitModule { }
