import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url: string = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getPosts(limit: number, page: number): Observable<any> {
    return this.http.get<any>(this.url + `posts?limit=${limit}&page=${page}`);
  }

  newPost(data: Post): Observable<Post> {
    return this.http.post<Post>(this.url + 'posts', data);
  }


}
