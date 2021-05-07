import { Component, ViewChild, ViewEncapsulation, } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { CalendarComponent } from "ionic2-calendar";
import { MonthViewComponent } from 'ionic2-calendar/monthview';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class Tab3Page {
  @ViewChild(CalendarComponent, null) myCalendar: CalendarComponent;

  eventSource = [];
  viewTitle;

  ionViewWillEnter() {
    this.loadEvents();
  }

  //イベントを取得
  loadEvents = () => {
    this.input();
    console.log(this.eventSource);
    // console.log(this.myCalendar);
    this.myCalendar.loadEvents();
  }

  postObj: any = {};
  Schedule: any = {};
  event: string;
  sever_id: any;
  color: string;

  input = () => {
    this.postObj['server_id'] = 123456;
    console.log(localStorage.send_server_id);
    const body = this.postObj;
    this.gs.http('http://140.227.58.187/tubasa/schedule_send.php', body).subscribe(
      res => {
        this.Schedule = res;
        console.log(this.Schedule);

        for (let i = 0, j = this.Schedule["count"]; i <= j; i++) {
          let date = new Date();

          this.event = this.Schedule["Schedule"]["schedule"+String(i)]["schedule"];
          date = this.Schedule["Schedule"]["schedule"+String(i)]["date"];

          //console.log(this.event);
          console.log(date);

          date = new Date(date);

          let Year = date.getFullYear();
          let Month = date.getMonth();
          let Day = date.getDate();

          console.log(Year);
          console.log(Month);
          console.log(Day);

          this.eventSource.push({
            title: this.event,
            startTime: new Date(Date.UTC(Year, Month, Day + 1, -9, 0, 0)),
            endTime: new Date(Date.UTC(Year, Month, Day + 1, -9, 0, 0)),
            allDay: true
          });

          //色の判定 monthview-current 
          console.log(this.Schedule["Schedule"]["schedule" + String(i)]["color"]);
          this.color = this.Schedule["Schedule"]["schedule" + String(i)]["color"];
          if (this.color == "red") {
            const boxElement = document.querySelector('.monthview-current');
            const cssStyle = getComputedStyle(boxElement);
            document.documentElement.style.setProperty('--my-background-color', 'rgb(255, 0 , 0)');
            const cssValue = String(cssStyle.getPropertyValue('--my-background-color')).trim();
            console.log(cssValue);
          };
          if (this.color == "blue") {
            const boxElement = document.querySelector('.monthview-current');
            const cssStyle = getComputedStyle(boxElement);
            document.documentElement.style.setProperty('--my-background-color', 'rgb(0, 37, 250)');
            const cssValue = String(cssStyle.getPropertyValue('--my-background-color')).trim();
            console.log(cssValue);
          };
          if (this.color == "yellow") {
            const boxElement = document.querySelector('.monthview-current');
            const cssStyle = getComputedStyle(boxElement);
            document.documentElement.style.setProperty('--my-background-color', 'rgb(255, 251, 1)');
            const cssValue = String(cssStyle.getPropertyValue('--my-background-color')).trim();
            console.log(cssValue);
          };
          if(this.color == "green") {
            const boxElement = document.querySelector('.monthview-current');
            const cssStyle = getComputedStyle(boxElement);
            document.documentElement.style.setProperty('--my-background-color', 'rgb(0, 250, 0)');
            const cssValue = String(cssStyle.getPropertyValue('--my-background-color')).trim();
            console.log(cssValue);
          };

        //色の判定２
        // const boxElement = document.querySelector('.monthview-current');
        // const cssStyle = getComputedStyle(boxElement);
        // document.documentElement.style.setProperty('--my-background-color', 'rgb(157, 193, 240)');

        //表示
        // const cssValue = String(cssStyle.getPropertyValue('--my-background-color')).trim();
        // console.log(cssValue);
        }
      }
    )
}



calendar = {
  mode: 'month',
  currentDate: new Date(),
};
selectedDate = new Date();

constructor(public gs: GlobalService,) { }

onViewTitleChanged(title) {
  this.viewTitle = title;
}

onEventSelected(event) {
  console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
}

onTimeSelected(ev) {
  console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
    (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
  this.selectedDate = ev.selectedTime;
}

onCurrentDateChanged(event: Date) {
  console.log('current date change: ' + event);
}

onRangeChanged(ev) {
  console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
}

today() {
  this.calendar.currentDate = new Date();
}
}
