import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

const TOK = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class IsloggedService {

  constructor(private router: Router) { }

  setToken(token: string): void{
    localStorage.setItem(TOK, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOK);
  }

  public logout(): void{
     localStorage.removeItem(TOK);
     alert('You had successfully logged out!');
     this.router.navigateByUrl('');
  }

  public isLogged():boolean{
    return localStorage.getItem(TOK)!=null;
  }
}
