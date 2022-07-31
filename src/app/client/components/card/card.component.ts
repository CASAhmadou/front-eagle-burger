import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post';
import { Produit } from '../../shared/models/produit';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('burgers') produit:Produit|undefined=undefined

// @Input('posts') post : Post|null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
