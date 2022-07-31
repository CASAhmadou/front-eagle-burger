import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  produit$ : Observable<Post[]> | null = null;


    constructor(private serv:ServiceService,private route: ActivatedRoute) {

  }
 private id :any = 0;
 private type:any =""
 ngOnInit(): void {
   this.id = this.route.snapshot.paramMap.get('id');
   this.type = this.route.snapshot.paramMap.get('type');
   console.log(this.id);
  //  this.produit$ = this.serv.produit$(this.id,this.type);
 }

}
