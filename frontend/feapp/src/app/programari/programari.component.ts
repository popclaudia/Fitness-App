import { Component, OnInit } from '@angular/core';
import { IsloggedService} from '../login/islogged.service'
import { ProgramariService} from './programari.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-programari',
  templateUrl: './programari.component.html',
  styleUrls: ['./programari.component.css'],
   providers: [ProgramariService]
})
export class ProgramariComponent implements OnInit {

  programari;

  constructor(private api:ProgramariService, private c: IsloggedService) {
    this.getProgramari();
    }

  getProgramari = () => {
        this.api.getProg().subscribe(
          data =>{
            this.programari = data;
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
