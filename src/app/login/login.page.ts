import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public gs: GlobalService,
    private router: Router,
  ) {}

  user_id: string;
  pass: string;
  server_id: any;
  postObj: any = {};
  returnObj: any = {};
  error: string;

  ngOnInit() {
  }

  gosignup = () => {
    this.router.navigate(['signup'])
  }

  login = () => {
    this.postObj['user_id'] = this.user_id;
    this.postObj['pass'] = this.pass;
    const body = this.postObj;

    this.gs.http('http://140.227.58.187/tubasa/login.php', body).subscribe(
      res => {
        this.returnObj = res;
        if(this.returnObj['status'] == 200){
          this.goinfo();
        }
        else{
          this.error = "ユーザー名またはパスワードを間違えています"
        }
      }
    )
  }

  send_localstorage = () => {
    localStorage.send_server_id = this.server_id;
    console.log(localStorage.send_server_id);
  }

  goinfo = () => {
    this.router.navigate(['/tabs','tab1'])
  }


}
