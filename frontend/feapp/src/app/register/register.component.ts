import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from './user.service';
@Component({
  selector: 'app-home',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  register;

  constructor(private userService: UserService, private router: Router ){}

  ngOnInit(){
    this.register = {
      first_name:'',
      last_name:'',
      username:'',
      phone:'',
      email:'',
      password:''
      };
  }

  registerUser(){
    this.userService.registerNewUser(this.register).subscribe(
      response => {
        alert('User '+ this.register.username + ' has been created!');
        console.log(response);
        this.router.navigateByUrl('/login');
        alert('Login with your new username and password');
      },
      error => {
        console.log('error', error);
        alert('INVALID DATA!');
      }
     );
  }



}


