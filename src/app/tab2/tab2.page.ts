import { Component, OnInit } from '@angular/core';
import { Plugins } from 'protractor/built/plugins';
import { noop, scheduled } from 'rxjs';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(public gs: GlobalService,) { }

  ngOnInit() {
    this.input();
    this.back();
  }

  postObj: any = {};
  Schedule: any = {};
  schedule: string[] = new Array();
  del: any = 0;
  i: any;
  form: any[] = [];

  input = () => {
    this.postObj['server_id'] = localStorage.send_server_id;
    console.log(localStorage.send_server_id);
    const body = this.postObj;

    this.gs.http('http://140.227.58.187/tubasa/schedule_send.php', body).subscribe(
      res => {
        this.Schedule = res;
        console.log(this.Schedule);
        this.for();
      }
    )
  }

  for = () => {
    console.log(this.Schedule);
    console.log(this.Schedule["count"]);
    for (let i = 0, j = this.Schedule["count"]; i <= j; i++) {
      this.form.push({
        val: "" + this.Schedule["Schedule"]["schedule" + String(i)]["schedule"],
        isChecked: false
      });
      console.log(this.form);
    }
    console.log(this.form);
  }


  ka = (e: any) => {
    this.del = 0;
    for (let i = 0, j = this.Schedule["count"]; i < j; i++) {
      if (this.form[i]["isChecked"]) {
        this.del++;
      }
    }
    console.log(this.del);
  }

  back = () => {
    if (this.del == this.Schedule["count"]) {
      return "yes";
    }
  }
}