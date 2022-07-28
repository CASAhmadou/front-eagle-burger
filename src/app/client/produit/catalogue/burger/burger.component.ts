import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue } from 'src/app/client/shared/models/catalogue';
import { Post } from 'src/app/client/shared/models/post';
import { Produit } from 'src/app/client/shared/models/produit';
import { ServiceService } from 'src/app/client/shared/services/service.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  // key:string ="Burger"
  // burger:[] =[]

  burgers$ : Observable<Catalogue> | null = null;
  constructor(private serv:ServiceService) { }

  ngOnInit(): void {
    // this.serv.getCatalogue().subscribe((data)=>this.burgers=data)
    this.burgers$ = this.serv.getCatalogue();
  }

}
