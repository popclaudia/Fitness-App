import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http: HttpClient) { }
  httpHeaders= new HttpHeaders({'Content-Type':'application/json'})

  getAvailableSports(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/sports/', {headers:this.httpHeaders})};

}
