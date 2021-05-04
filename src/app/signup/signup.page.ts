import { Component, ComponentRef, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    public gs: GlobalService,
    private router: Router,
  ) { }

  user_id: string;
  pass: string;
  pass_again: string;
  server_id: any;
  postObj: any = {};
  returnObj: any = {};
  error: string;
  error1: string;

  ngOnInit() {
  }

  send_localstorage = () => {
    localStorage.send_id = this.server_id;
    console.log(localStorage.send_id);
  }

  signup = () => {
    this.error="";
    this.error1="";
    this.postObj['user_id'] = this.user_id;
    this.postObj['pass'] = this.pass;
    this.postObj['pass_again'] = this.pass_again;
    this.postObj['server_id'] = this.server_id;
    const body = this.postObj;

    this.gs.http('http://140.227.58.187/tubasa/signup.php', body).subscribe(
      res => {
        this.returnObj = res;
        if(this.returnObj['status'] == 200){
          this.goinfo();
        }
        if(this.returnObj['status'] == 400){
          this.error = "すでにそのユーザー名は使われています";
        }
        else{
          this.error1 = "確認用のパスワードが一致していません";
        }
      }
    )
  }

  goinfo = () => {
    this.router.navigate(['/tabs','tab1'])
  }

}
