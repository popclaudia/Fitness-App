import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IsloggedService} from './login/islogged.service';
import {CanActivate, Router} from '@angular/router';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthNeededGuard implements CanActivate {

  constructor(private isloggedService: IsloggedService, private router: Router) {
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


    if (this.isloggedService.isLogged()) {
      return true;
    }

    this.router.navigateByUrl('/login');

    return false;

  }

}
