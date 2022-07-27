import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/client/shared/models/post';
import { ServiceService } from 'src/app/client/shared/services/service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
// key:string ="Menu"
// menus:[]=[]
menus$ : Observable<Post[]> | null = null;
  constructor(private serv:ServiceService) { }

  ngOnInit(): void {
    this.menus$ = this.serv.all();
  }

}
