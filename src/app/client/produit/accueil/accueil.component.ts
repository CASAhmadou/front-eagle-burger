import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../shared/models/post';
import { ServiceService } from '../../shared/services/service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  posts$ : Observable<Post[]> | null = null;

  constructor(private serv: ServiceService) { }

  ngOnInit(): void {
    this.posts$ = this.serv.all();
  }

}
