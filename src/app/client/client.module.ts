import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ClientComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    RouterModule,
  ]
})
export class ClientModule { }
