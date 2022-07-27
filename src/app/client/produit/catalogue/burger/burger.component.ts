import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/client/shared/models/post';
import { ServiceService } from 'src/app/client/shared/services/service.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  // key:string ="Burger"
  burgers$ : Observable<Post[]> | null = null;
  constructor(private serv:ServiceService) { }

  ngOnInit(): void {
    this.burgers$ = this.serv.all();
  }

}
