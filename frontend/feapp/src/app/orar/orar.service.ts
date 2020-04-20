import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class OrarService {

  constructor(private http: HttpClient) { }
  httpHeaders= new HttpHeaders({'Content-Type':'application/json'})

  getTimetable(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/orar/', {headers:this.httpHeaders})};

}

