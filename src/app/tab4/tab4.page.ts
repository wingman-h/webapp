import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;
  date: any;
  schedule: string;
  status_user: any;
  element: any;
  color: string;
  postObj: any = {};
  returnObj: any = {};
  reply: string;

  constructor(public gs: GlobalService) {
    this.customPickerOptions = {
    
    buttons: [{
      text: 'Save',
      handler: () => console.log('Clicked Save!')
    }, {
      text: 'Log',
      handler: () => {
        console.log('Clicked Log. Do not Dismiss.');
        return false;
      }
    }]
  }}

  senddate = () => {
    this.reply="";
    this.postObj['date'] = this.date;
    this.postObj['schedule'] = this.schedule;
    this.postObj['status_user'] = this.status_user;
    this.postObj['element'] = this.element;
    this.postObj['color'] = this.color;
    this.postObj['user_id'] = localStorage.send_user_id;
    this.postObj['server_id'] = localStorage.send_server_id;
    const body = this.postObj;

    this.gs.http('http://140.227.58.187/tubasa/schedule_receive.php', body).subscribe(
      res => {
        this.returnObj = res;
        if(this.returnObj['status'] == 201){
          this.reply="データが送信されました";
        }
        else{
          this.reply="他の人がサーバー全員に送信しています";
        }
      }
    )
  }
}
