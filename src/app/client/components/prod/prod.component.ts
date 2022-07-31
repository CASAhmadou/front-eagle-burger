import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post';
import { Produit } from '../../shared/models/produit';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {
  @Input('prod') produits:Produit[]|undefined=[]

  // @Input('posts') posts : Post|null = null;
  constructor() { }

  ngOnInit(): void {
    // this.posts$ = this.serv.all();
  }

}
