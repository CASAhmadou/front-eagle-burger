import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../shared/models/post';
import { ServiceService } from '../../shared/services/service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  // @Input('posts') post : Post|null = null;
  burgers$ : Observable<Post[]> | null = null;
  constructor(private serv: ServiceService) { }

  ngOnInit(): void {
    // this.serv.post$;
  }

}
