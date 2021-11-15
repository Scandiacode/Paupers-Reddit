import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostapiService {
apiUrl: string = "https://www.reddit.com/r/aww/.json";
  constructor(private http: HttpClient) { }

  getReddit():Observable<any>{
    return this.http.get(this.apiUrl)
  }
}
