import { Component, OnInit } from '@angular/core';
import { IsloggedService} from '../login/islogged.service'
import { OrarService} from './orar.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-orar',
  templateUrl: './orar.component.html',
  styleUrls: ['./orar.component.css'],
  providers: [OrarService]
})
export class OrarComponent implements OnInit {

   orar;

  constructor(private api:OrarService, private c: IsloggedService) {
    this.getSports();
    }

  getSports = () => {
        this.api.getTimetable().subscribe(
          data =>{
            this.orar = data;
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
