import { Component, OnInit } from '@angular/core';
import { scheduled } from 'rxjs';
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
    //this.for();
  }

  postObj: any = {};
  Schedule: any = {};
  schedule: string[] = new Array();

  input = () => {
    console.log(this.Schedule["Schedule"]["schedule" + 0]["schedule"]);
    this.postObj['server_id'] = localStorage.send_server_id;
    const body = this.postObj;

    this.gs.http('http://140.227.58.187/tubasa/schedule_send.php', body).subscribe(
      res => {
        this.Schedule = res;
        console.log(this.Schedule);
      }
    )
  }

  // for = () => {
  //   for (let i = 0, j = this.Schedule["count"]; i < j; i++) {
  //     this.schedule[i] = this.Schedule["Schedule"]["schedule" + String(i)]["schedule"];
  //   }
  // }

  public form = [
    { val: "" + this.schedule[0], isChecked: false },
    { val: "" + this.schedule[1], isChecked: false },
    { val: "" + this.schedule[2], isChecked: false },
    { val: "" + this.schedule[3], isChecked: false },
    { val: "" + this.schedule[4], isChecked: false },
  ];
}
