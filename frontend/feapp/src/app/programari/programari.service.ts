import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class ProgramariService {

 constructor(private http: HttpClient) { }
  httpHeaders= new HttpHeaders({'Content-Type':'application/json'})

  getProg(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/programari/', {headers:this.httpHeaders})};

}
