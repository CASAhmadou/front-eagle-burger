import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue } from '../../shared/models/catalogue';
import { Post } from '../../shared/models/post';
import { Produit } from '../../shared/models/produit';
import { ServiceService } from '../../shared/services/service.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  catalogues$: Observable<Catalogue> | null = null
  // catalogue:Catalogue|null=nul
  catalogue: Produit[]|undefined = undefined

  // posts$ : Observable<Post[]> | null = null;
  constructor(private serv: ServiceService) { }

  ngOnInit(): void {
    // this.serv.getCatalogue().subscribe((data) => this.catalogue = data)
    // this.catalogue$= this.serv.getCatalogue()

    // this.posts$ = this.serv.all();
  }

 

}
