import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url:string = "https://localhost:3000/posts"
  // https://projetfilrouge.herokuapp.com/api

  constructor(private http:HttpClient) { }

  all():Observable<Post[]> {
    return this.http.get<Post[]>(this.url)
  }

  post$ = (id:number) => {
    return this.http.get<Post>(`${this.url}/${id}`)
  }
}
