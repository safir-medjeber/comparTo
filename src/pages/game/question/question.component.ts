import {Component, Input, OnChanges} from "@angular/core";
import {animate, animateChild, group, keyframes, query, state, style, transition, trigger} from "@angular/animations";

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
    <div class="question" [@wright]="state" (@wright.done)="state = 'wait'">
      <div class="versus">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 35.69">
          <defs xmlns="">
            <clipPath xmlns="http://www.w3.org/2000/svg" id="clipV">
              <path
                d="M3.09,20.12A9.25,9.25,0,0,1,3,17.85Q3,16.68,3,15.59a19.83,19.83,0,0,0-.14-2.25q-.14-1.19-.23-2.29A18.11,18.11,0,0,1,2.6,9a3.68,3.68,0,0,1,.25-1.43,2.59,2.59,0,0,1,.78-.92,6.91,6.91,0,0,0,.9-.76,3,3,0,0,1,.92.29,2.45,2.45,0,0,1,.7.55,2.32,2.32,0,0,1,.43.68,1.19,1.19,0,0,1,.06.7A4.61,4.61,0,0,1,8.22,9.75a8.69,8.69,0,0,1,.94,2.19,15.31,15.31,0,0,1,.47,2.52q.14,1.33.23,2.62t.2,2.44a9.18,9.18,0,0,0,.37,2q1.72-2.5,2.91-4.43t2.4-3.71Q17,11.6,18.46,9.77A53.68,53.68,0,0,1,22.3,5.63a3.42,3.42,0,0,1,.78.2l.55.23a2.35,2.35,0,0,0,1.45.16c.13.31.23.54.29.68l.18.41.2.51.35.94a.59.59,0,0,1,.1.41,4.06,4.06,0,0,1-.06.45.88.88,0,0,0,0,.31c0,.08.1.08.25,0a3.62,3.62,0,0,1-.51,1.19,2,2,0,0,0-.31,1.27q-1.05,1.41-2.34,2.89t-2.58,3.11Q19.34,20,18.14,21.74a20.65,20.65,0,0,0-2,3.69.48.48,0,0,0-.35.12,1.53,1.53,0,0,0-.21.27l-.2.31a.36.36,0,0,1-.33.16,4.33,4.33,0,0,1-.92,2.36,13.77,13.77,0,0,1-1.7,1.89,2.22,2.22,0,0,1,.08.51,2,2,0,0,1,0,.39,3.77,3.77,0,0,0-.06.41,2.45,2.45,0,0,0,0,.53,4.82,4.82,0,0,1-.92,1.56,3.92,3.92,0,0,1-1.23.94,2.65,2.65,0,0,1-1.37.25,2.71,2.71,0,0,1-1.33-.49,1.45,1.45,0,0,1-.47-.43q-.2-.27-.41-.53t-.43-.47a1.12,1.12,0,0,0-.53-.29,2.47,2.47,0,0,0,0-.82,4.32,4.32,0,0,0-.18-.78,2.49,2.49,0,0,0-.27-.59c-.1-.16-.21-.23-.31-.23q-.16-1-.41-2.13l-.51-2.29Q3.83,25,3.67,23.87a11.07,11.07,0,0,1-.12-2A1.41,1.41,0,0,0,3.38,21,2.48,2.48,0,0,1,3.09,20.12Z"
                transform="translate(-1.14 -1.59)"/>
            </clipPath>
            <clipPath xmlns="http://www.w3.org/2000/svg" id="clipS">
              <path
                d="M23.87,17.19c.08-.39.13-.71.16-1a1.18,1.18,0,0,0-.27-.8q.16-.62.25-1a2.63,2.63,0,0,0,0-1,4.33,4.33,0,0,1,1.07-1.72,7.76,7.76,0,0,1,1.58-1.19,11.23,11.23,0,0,1,1.8-.82q.94-.33,1.76-.57A.14.14,0,0,0,30.08,9C30,9,29.95,9,30,8.83A28.7,28.7,0,0,0,34.24,7.7Q36.37,7,38.59,6.37a23.28,23.28,0,0,1,4.57-.72,14.69,14.69,0,0,1,4.92.61,4,4,0,0,0,.43.9q.27.43.57.84t.53.8a1.92,1.92,0,0,1,.27.82,4.16,4.16,0,0,1,.76.92,1.73,1.73,0,0,1,.1,1.31l-.9.63q-.47.31-1,.59a11.51,11.51,0,0,0-3.52-.31q-1.76.12-3.16.27a1.27,1.27,0,0,0-1-.45,5.4,5.4,0,0,0-1.23.2l-1.27.35a2.82,2.82,0,0,1-1.17.1,2.29,2.29,0,0,1-1.13.53q-.7.14-1.48.21a.24.24,0,0,0,.08.27c.08.05.09.16,0,.31a1.41,1.41,0,0,0,.74.49l1,.25a3.55,3.55,0,0,1,.88.33,1,1,0,0,1,.51.68,2.43,2.43,0,0,1,1.21.37,3.38,3.38,0,0,1,.86.8,3.15,3.15,0,0,1,.51,1,2.59,2.59,0,0,1,.12,1c.1.26.21.37.33.31s.25,0,.41.2a3.15,3.15,0,0,0,.72,1.23,5.13,5.13,0,0,1,.88,1.39q.08,1.17.14,2.11a3.94,3.94,0,0,1-.33,1.84A9.74,9.74,0,0,1,41,29.57,14.77,14.77,0,0,1,38.18,32a22.2,22.2,0,0,1-3.34,1.8A30.35,30.35,0,0,1,31.37,35,.88.88,0,0,0,31,35q-.22,0-.1-.23a1.61,1.61,0,0,1-.8.39,4.74,4.74,0,0,1-1,.06l-1.05-.06a4.51,4.51,0,0,0-1,0,8.17,8.17,0,0,1-.57-.62,2.5,2.5,0,0,1-.41-.74.21.21,0,0,1-.18-.25c0-.14,0-.21-.18-.21a.54.54,0,0,1,0-.23l.08-.16c.1-.08.15-.14.14-.18a.26.26,0,0,0-.12-.12l-.2-.14a.16.16,0,0,1-.06-.2,1.36,1.36,0,0,0,.14-.84c0-.33-.07-.66-.1-1a2.88,2.88,0,0,1,.08-1,1.28,1.28,0,0,1,.66-.76,9.65,9.65,0,0,0,3-.16,14.75,14.75,0,0,0,2.7-.86,26.19,26.19,0,0,0,2.42-1.19q1.15-.64,2.25-1.19a1.66,1.66,0,0,1,.37-.66q.25-.27.53-.53a5.09,5.09,0,0,0,.51-.55,2,2,0,0,0,.35-.72.36.36,0,0,0,0-.23.4.4,0,0,0-.12-.14l-.16-.14a.31.31,0,0,1-.08-.23l-.21-.08a.5.5,0,0,0-.18,0,14.33,14.33,0,0,0-2.15-.86,10.31,10.31,0,0,1-1.91-.78,1,1,0,0,1-.94.16q-.47-.16-1.13-.31A28.07,28.07,0,0,1,28.54,20a12,12,0,0,1-2.83-.82,1.74,1.74,0,0,0-.2-.41q-.12-.18-.55-.1a8.4,8.4,0,0,0-.57-.72A4.1,4.1,0,0,1,23.87,17.19Z"
                transform="translate(-1.14 -1.59)"/>
            </clipPath>
          </defs>
          <polyline [@v]="state" class="V" clip-path="url(#clipV)" points="4 4 6.52 31.69 23.27 4.97" fill="none"
                    stroke="#5C546A" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
          <path [@s]="state" class="S" clip-path="url(#clipS)"
                d="M50.22,10.07C44.61,8,30.85,9.85,27.56,14.94c-2.62,3.22,13.28,1.78,12.91,8.22-.17,7.25-14.75,9.17-14.75,9.17"
                transform="translate(-1.14 -1.59)" fill="none" stroke="#5C546A" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="8"/>
        </svg>
      </div>
      <wrong *ngIf="animating && gameOver" class="center wrong"></wrong>
      <wright *ngIf="state == 'wright'" class="center wright"></wright>
    </div>`,
  animations: [
    trigger('wright', [
      transition('wait => wright', [
        group([
          query('@v', [animateChild()]),
          query('@s', [animateChild()]),
          animate('300ms 2s', keyframes([
              style({boxShadow: 'inset 0 0 0 40px #7ac142'}),
              style({boxShadow: 'inset 0 0 0 0 #7ac142'}),
            ]
          ))
        ])
      ]),
      transition('* => wait', [
        query('@v', [animateChild()]),
        query('@s', [animateChild()]),
      ])
    ]),
    trigger('v', [
      transition('wait => wright', [QuestionComponent.hide]),
        transition('* => wait', [
        animate('200ms 150ms cubic-bezier(0.29, 0.74, 0.57, 0.15)', QuestionComponent.stroke)
      ]),
    ]),
    trigger('s', [
      transition('wait => wright', [QuestionComponent.hide]),
      transition('* => wait', [
        animate('200ms 200ms cubic-bezier(0.4, 0, 1, 1)', QuestionComponent.stroke)
      ]),
    ])
  ]
})
export class QuestionComponent implements OnChanges {
  @Input() animating: boolean
  @Input() gameOver: boolean
  state: QuestionState = 'wait';
  private static stroke = keyframes([
    style({"stroke-dashoffset": 60}),
    style({"stroke-dashoffset": 0}),
  ]);
  private static hide = animate('200ms 2s', keyframes([style({opacity: 0}),]));

  wait() {
    this.state = 'wait'
  }

  ngOnChanges(): void {
    if (this.animating && !this.gameOver) {
      this.state = 'wright';
    }
  }
}

type QuestionState = 'wait' | 'wright'
