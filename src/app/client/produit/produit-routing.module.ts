import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './catalogue/menu/menu.component';
import { BurgerComponent } from './catalogue/burger/burger.component';
import { DetailComponent } from './detail/detail.component';
import { BoissonComponent } from './complements/boisson/boisson.component';
import { FriteComponent } from './complements/frite/frite.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

const routes: Routes = [
  { path: '', component: CatalogueComponent},
  { path: 'menus', component: MenuComponent},
  { path: 'burgers', component: BurgerComponent},
  { path: 'boisson', component: BoissonComponent},
  { path: 'frite', component: FriteComponent},
  { path: 'detail/:id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProduitRoutingModule { }
