import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../shared/models/post';
import { ServiceService } from '../../shared/services/service.service';

@Component({
  selector: 'app-liste-card',
  templateUrl: './liste-card.component.html',
  styleUrls: ['./liste-card.component.css']
})
export class ListeCardComponent implements OnInit {
  @Input('posts') post : Post|null = null;

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  menuOuvert(): void{
    this.router.navigateByUrl("/produits/menus")
  }

  // filter(type: string){
  //   this.serv.getCatalogue().subscribe(data =>{
  //     if(type!=""){
  //       this.catalogue = data.produit?.filter(prod= prod.type === type)
  //     }
  //   })
  // }

}
