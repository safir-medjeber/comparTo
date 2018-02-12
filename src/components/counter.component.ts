import {Component, Input, OnChanges} from "@angular/core";

@Component({
  selector: 'animated-counter',
  template: `{{value  | number:'.'}}`
}) export class CounterComponent implements OnChanges {
  @Input() value: number;
  n = 0;
  private step;
  private interval = 40;
  private duration = 1000;

  constructor() {
  }

  ngOnChanges(): void {
    this.n = 0;
    this.step = Math.floor(this.value * this.interval / this.duration);
  }
}
