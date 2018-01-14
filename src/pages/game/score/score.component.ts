import {Component, Input, OnChanges} from "@angular/core";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'score',
  template: `
    <div [@increment]="state" (@increment.done)="state = 'wait'">{{score}}</div>`,
  animations: [
    trigger('increment', [
      transition('wait => incr', [
        animate('500ms',
          keyframes([
            style({transform: 'scale(1)'}),
            style({transform: 'scale(3)'}),
            style({transform: 'scale(1)'})
          ]))
      ])
    ])
  ]
})

export class ScoreComponent implements OnChanges {
  state: ScoreState;
  @Input() score: number = 0

  ngOnChanges(): void {
    this.state = 'incr'
  }

}

type ScoreState = 'zero' | 'wait' | 'incr'
