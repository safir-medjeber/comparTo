import {Component, Input} from "@angular/core";

import {Question} from "../../../model/Question";

@Component({
  selector: 'wrong',
  template: `
    <svg class="status red" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
      <circle class="circle cross__circle" cx="26" cy="26" r="25" fill="none"/>
      <line class="path" fill="none" x1="11.49604" y1="13.14959" x2="40.50396" y2="38.85041"/>
      <line class="path" fill="none" x1="40.50396" y1="13.19683" x2="11.49604" y2="38.80317"/>
    </svg>`
})
export class WrongComponent {
}

@Component({
  selector: 'wright',
  template: `
    <svg class="status green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" width="75">
      <circle class="circle checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
      <path class="path" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
    </svg>
  `
})
export class WrightComponent {
}
