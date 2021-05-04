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
    this.input()
  }

  postObj: any = {};
  Schedule: any = {};
  i: any;
  schedule: string[];
  input = () => {
    this.postObj['server_id'] = localStorage.send_server_id;
    const body = this.postObj;

    this.gs.http('http://140.227.58.187/tubasa/schedule_send.php', body).subscribe(
      res => {
        this.Schedule = res;
      }
    )
  }

  for = () => {
    for(let i=0, j;i>j; i++){
      this.schedule[i] = this.Schedule["Schedule"]["schedule"+i]["schedule"];
    }
  }

  public form =[
    { val: ""+this.schedule[0], isChecked: false },
    { val: ""+this.schedule[1], isChecked: false },
    { val: ""+this.schedule[2], isChecked: false },
    { val: ""+this.schedule[3], isChecked: false },
    { val: ""+this.schedule[4], isChecked: false },
  ];
}
