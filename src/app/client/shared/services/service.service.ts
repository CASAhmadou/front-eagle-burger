import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';
import { Post } from '../models/post';
import { Catalogue } from '../models/catalogue';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiCatalogue="http://localhost:8000/api/catalogues"
  // private url:string = "http://localhost:3000/posts"
  // https://projetfilrouge.herokuapp.com/api

  constructor(private http:HttpClient) { }

    getCatalogue():Observable<Catalogue>{
    return this.http.get<Catalogue>(this.apiCatalogue).pipe(
      // tap(console.log),
      map(
        data => {
          data.produit = [...data.menu,...data.burger]
          return data
        }
      )
    )
  }














  // all():Observable<Post[]> {
  //   return this.http.get<Post[]>(this.url)
  // }

  // post$ = (id:number) => {
  //   return this.http.get<Post>(`${this.url}/${id}`)
  // }





}
