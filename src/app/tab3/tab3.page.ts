import { Component, ViewChild, OnInit } from '@angular/core';
import { CalendarComponent } from "ionic2-calendar";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  @ViewChild(CalendarComponent,null) myCalendar:CalendarComponent;

  eventSource: any[] = [{
    title: 'test_0',
    startTime: new Date(Date.UTC(2021,5,4)),
    endTime: new Date(Date.UTC(2021,5,4)),
    allDay: false
}];
  viewTitle;

  ngOnInit() {
    this.eventSource.push({
      title: 'test',
      startTime: new Date(Date.UTC(2021,5,4)),
      endTime: new Date(Date.UTC(2021,5,4)),
      allDay: true
  });
  //this.myCalendar.loadEvents();
  }

  loadEvents = () => {
    this.eventSource.push({
        title: 'test',
        startTime: new Date(Date.UTC(2021,5,4)),
        endTime: new Date(Date.UTC(2021,5,4)),
        allDay: true
    });
    this.myCalendar.loadEvents();
  }

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  selectedDate = new Date();

  constructor() {}

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
