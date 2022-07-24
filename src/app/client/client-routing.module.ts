import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from '../produit/detail/detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: DetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule { }
