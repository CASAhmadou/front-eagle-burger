import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../shared/models/post';
import { ServiceService } from '../../shared/services/service.service';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {
  // @Input() produits=[]

  // @Input('posts') post : Post|null = null;
  posts$ : Observable<Post[]> | null = null;
  constructor(private serv: ServiceService) { }

  ngOnInit(): void {
    this.posts$ = this.serv.all();
  }

}
