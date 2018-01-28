import {Component, Input, OnChanges} from "@angular/core";

@Component({
  selector: 'animated-counter',
  template: `{{n  | number:'.'}}`
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
    this.updateCounter();
  }


  private updateCounter() {
    let interval = setInterval(() => {
      if(this.n < this.value) {
        this.n += this.step;
      }
      else {
        this.n = this.value;
        clearInterval(interval);
      }
    }, this.interval);
  }
}
