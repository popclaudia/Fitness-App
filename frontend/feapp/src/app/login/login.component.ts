import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LogService} from './log.service';
import {IsloggedService} from './islogged.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LogService]
})

export class LoginComponent implements OnInit {
  login;

  constructor(private logService: LogService, private isLogged: IsloggedService, private router: Router) { }

  ngOnInit() {
    this.login = {
      email:'',
      password:''
      };
  }

  loginUser(){
    this.logService.loginNewUser(this.login).subscribe(
      response => {
        console.log(response);
        alert('User '+ this.login.username + ' has logged!');
        this.isLogged.setToken(response.token);
        this.router.navigateByUrl('/home');

      },
      error => {
        console.log('error', error);
        alert('Username-ul sau parola sunt gresite');
      }
     );

  }

}
