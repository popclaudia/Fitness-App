import { Component, OnInit } from '@angular/core';
import { IsloggedService} from '../login/islogged.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [IsloggedService]
})
export class HomeComponent implements OnInit {

  constructor(private c: IsloggedService) { }

  ngOnInit() {
  }

  logoutuser(){
      this.c.logout();
    }
 }
