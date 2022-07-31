import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';
import { Post } from '../models/post';
import { Catalogue } from '../models/catalogue';
import { Detail } from '../models/detail';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // private apiHeroku="https://projetfilrouge.herokuapp.com/api/catalogues"
  private apiCatalogue="localhost:8000/api/catalogues"
  private apiDetail="http://localhost:8000/api"

  // private url:string = "http://localhost:3000/posts"

  constructor(private http:HttpClient) { }

  getCatalogue():Observable<Catalogue>{
      return this.http.get<any>(this.apiCatalogue).pipe(
        map(
          data => {
            // console.log(data)
            let catalogues : Catalogue = {
              burger:data['hydra:member'][0]['burgers'],
              menu:data['hydra:member'][1]['menus']

            }
            data.produit = [...catalogues.menu,...catalogues.burger]
            return data
          }
          ),
          tap(console.log),
          )
    }






  // getCatalogue():Observable<Catalogue>{
  //   return this.http.get<Catalogue>(this.apiCatalogue).pipe(
  //     map(
  //       data => {
  //         // console.log(data)
  //         data.produit = [...data.menu,...data.burger]
  //         return data
  //       }
  //       ),
  //       tap(console.log),
  //       )
  // }



  // getBurger():Observable<Catalogue>{
  //   return this.http.get<Catalogue>(this.apiCatalogue).pipe(
  //     map(data=>{
  //       data.produit=[...data.burger]
  //       return data
  //     })
  //   )
  // }


  // getMenu():Observable<Catalogue>{
  //   return this.http.get<Catalogue>(this.apiCatalogue).pipe(
  //     map(data=>{
  //       data.produit=[...data.menu]
  //       return data
  //     })
  //   )
  // }


  getProduit$(id:number,type:string):Observable<Detail>{
    if(type=="menu"){
      return this.http.get<Detail>(`${this.apiDetail}/menus/${id}}`)
    }
    return this.http.get<Detail>(`${this.apiDetail}/burgers/${id}}`)
  }












  // all():Observable<Post[]> {
  //   return this.http.get<Post[]>(this.url)
  // }

  // post$ = (id:number) => {
  //   return this.http.get<Post>(`${this.url}/${id}`)
  // }





}
