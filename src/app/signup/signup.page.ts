import { Component, OnInit } from '@angular/core';
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
  server_id: string;

  ngOnInit() {
  }

  mkaccount(){
    
  }

}
