import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

   constructor(
     public gs: GlobalService,
     private router: Router,
   ) { }

   chatMessage: any = {};
   repeater: string;
   Message: string;
   interval: any;
   postObj: string;
   postObj1: string;
   massage: string[] = new Array();
   commentList: any[] = [];


   ngOnInit(){
     this.interval = setInterval(() => {
       this.postcomment1()
     }, 1000);
   }


   sendChatMessage = () => {
     this.postObj['message'] = this.Message;
     this.postObj['server_id'] = localStorage.send_server_id;
     this.postObj['user_id'] = localStorage.send_user_id;
     const body = this.postObj;

     this.gs.http('http://140.227.58.187/tubasa/message_receive.php', body).subscribe(
     )
   }

   postcomment1 = () => {
     this.postObj1['server_id'] = localStorage.send_server_id;
     const body1 = this.postObj1;

     this.gs.http('http://140.227.58.187/tubasa/message_send.php', body1).subscribe(
       res => {
         this.chatMessage = res;
         this.commentList = [];
         for (let i = 0, j = this.chatMessage['count']; i <= j; i++ ){
           this.commentList.push({
             text: ""+ this.chatMessage["Message"]["messages" + String(i)]["message"], 
          });
         }
       }
     )
   }
}