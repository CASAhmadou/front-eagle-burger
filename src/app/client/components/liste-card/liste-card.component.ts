import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post';
import { ServiceService } from '../../shared/services/service.service';

@Component({
  selector: 'app-liste-card',
  templateUrl: './liste-card.component.html',
  styleUrls: ['./liste-card.component.css']
})
export class ListeCardComponent implements OnInit {
  @Input('posts') post : Post|null = null; 
  constructor() { }

  ngOnInit(): void {
    
  }

}
