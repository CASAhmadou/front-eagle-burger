import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue } from 'src/app/client/shared/models/catalogue';
import { Post } from 'src/app/client/shared/models/post';
import { Produit } from 'src/app/client/shared/models/produit';
import { ServiceService } from 'src/app/client/shared/services/service.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  // key:string ="Burger"


  // post$: Observable<Post[]>|null = null

  burgers$ : Observable<Catalogue> | null = null;
   burger: Produit[]|undefined = undefined
  constructor(private serv:ServiceService) { }

  ngOnInit(): void {

    this.serv.getCatalogue().subscribe(data=>{
      this.burger = data.produit
    })
    // this.post$ = this.serv.all().subscribe((data)=>{})

    // this.serv.getCatalogue().subscribe((data)=>
    // {
    //   // console.log(data)
    // })
    // this.burgers$ = this.serv.getCatalogue();
  }

  // filter(type: string){
  //   this.serv.getCatalogue().subscribe(data =>{
  //     if(type!=""){
  //       this.burger = data.produit?.filter(prod= prod.type === type)
  //     }
  //   })
  // }

}
