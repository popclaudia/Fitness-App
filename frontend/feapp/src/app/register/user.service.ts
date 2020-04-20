import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http: HttpClient;

  constructor( handler: HttpBackend) {
     this.http = new HttpClient(handler);
  }

  registerNewUser(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/register/users/', userData)};
}
