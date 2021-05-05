import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { GlobalService } from '../global.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(
    public gs: GlobalService,
    private router: Router,
  ) {}

  chatMessage: string;
  repeater: string;
  Message: string;
  interval: any;
  postObj: any = {};
  

  input = () => {
    this.postObj['message'] = this.Message;
    this.postObj['server_id'] = localStorage.send_server_id;
    this.postObj['user_id'] = localStorage.send_user_id;
    const body = this.postObj;

    this.gs.http('http://140.227.58.187/tubasa/message_receive.php', body).subscribe(
    );

    this.sendChatMessage();
  }

  sendChatMessage = () => {
    this.repeater = this.Message;
  }

  printchat(){
    this.chatMessage = this.repeater;
  }

  ngOnInit(){
    this.interval = setInterval(() => {
      this.printchat()
    }, 1000);
  }

}