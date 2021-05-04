import { Component, ComponentRef, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  user_id: string;
  user_pass: string;
  user_pass_again: string;
  server_id: any;

  ngOnInit() {
  }

  mkaccount(){
    console.log(this.user_id);
    console.log(this.user_pass);
    console.log(this.user_pass_again);
    console.log(this.server_id);
  }

  send_localstorage = () => {
    localStorage.send_id = this.server_id;
    console.log(localStorage.send_id);
  }

}
