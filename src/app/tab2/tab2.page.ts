import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  schedule1: string = "cba";
  schedule2: string = "cba";
  schedule3: string = "cba";
  schedule4: string = "cba";
  schedule5: string = "cba";

  public form = [
    { val: ""+this.schedule1, isChecked: false },
    { val: ""+this.schedule2, isChecked: false },
    { val: ""+this.schedule3, isChecked: false },
    { val: ""+this.schedule4, isChecked: false },
    { val: ""+this.schedule5, isChecked: false },
  ];

  constructor() {}

}
