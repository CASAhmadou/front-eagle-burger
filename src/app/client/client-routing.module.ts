import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './produit/catalogue/catalogue.component';
import { DetailComponent } from './produit/detail/detail.component';

const routes: Routes = [
  { path: '', component: CatalogueComponent},
  { path: 'detail/:id', component: DetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule { }
