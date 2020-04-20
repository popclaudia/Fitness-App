import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SportsService} from './sports.service';
import { IsloggedService} from '../login/islogged.service'
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
  providers: [SportsService, IsloggedService]
})
export class SportsComponent implements OnInit {
  sports;

  constructor(private api:SportsService, private c: IsloggedService) {
    this.getSports();
    }

  getSports = () => {
        this.api.getAvailableSports().subscribe(
          data =>{
            this.sports = data;
          },
          error => {
             console.log(error);
          }

         )
  }
  ngOnInit() {
  }
  logoutuser(){
    this.c.logout();
  }
}
