import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;
  DayDate: any;
  content: string;
  status_user: string;
  status_content: string;
  color: string;

  constructor() {this.customPickerOptions = {
    
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
    console.log(this.DayDate);
    console.log(this.content);
    console.log(this.status_user);
    console.log(this.status_content);
    console.log(this.color);
    console.log(localStorage.send_id);
  }

}
