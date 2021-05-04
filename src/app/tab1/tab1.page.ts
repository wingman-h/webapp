import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(
    private router: Router,
  ) {}

  chatMessage: string;
  repeater: string;
  Message: string;
  interval: any;

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