import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

const checkMark = `
    <svg class="status green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" width="75">
      <circle class="circle checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
      <path class="path" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
    </svg>
  `

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
  template: checkMark
})
export class WrightComponent {
}

@Component({
  selector: 'question',
  template: `
    <div class="question" [@wright]="state" (@wright.done)="wait()">
      <score [score]="_score"></score>
      <wrong *ngIf="animating && gameOver" class="center wrong"></wrong>
      <wright *ngIf="state == 'wright'" class="center wright"></wright>
    </div>`,
  animations: [
    trigger('wright', [
      transition('wait => wright', [
        animate('300ms 2s', keyframes([
            style({boxShadow: 'inset 0 0 0 40px #7ac142'}),
            style({boxShadow: 'inset 0 0 0 0 #7ac142'}),
          ]
        ))
      ]),
    ]),
  ]
})
export class QuestionComponent implements OnChanges {
  @Input() animating: boolean
  @Input() gameOver: boolean
  @Input() score: number
  _score = 0;
  state: QuestionState = 'wait';

  wait() {
    this.state = 'wait'
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.score) {
      if(this.score == 0)
        this._score = this.score
      else
        setTimeout(() => this._score = this.score, 2100)
    }

    if (changes.animating && this.animating && !this.gameOver) {
      this.state = 'wright';
    }
  }
}

type QuestionState = 'wait' | 'wright'
