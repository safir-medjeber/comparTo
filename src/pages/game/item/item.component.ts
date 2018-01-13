import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {Item} from "../../../model/Item";
import {transition, trigger, style, animate, keyframes, query, animateChild, group} from "@angular/animations";

@Component({
  selector: 'item',
  template: `
    <div class="item" [@itemState]="state" (@itemState.done)="this.state = 'wait'">
      <div class="background-wrapper" [@background]="state">
        <div class="background" [style.backgroundImage]="'url(' + item.url + ')'"></div>
        <div class="background blur" [style.backgroundImage]="'url(' + item.url + ')'"></div>
      </div>
      <div class="content">
        <img class="image" [alt]="item.name" [src]="item.url" [@image]="state"/>
        <div class="name">{{item.name}}</div>
        <div class="value">
          <animated-counter *ngIf="showValue" [value]="item.value"></animated-counter>
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger('itemState', [
      transition('wait => in', [
        group([
          query('@background', [animateChild()]),
          query('@image', [animateChild()]),
        ])
      ]),
      transition('* => out', [
        group([
          query('@background', [animateChild()]),
          query('@image', [animateChild()]),
        ])
      ])
    ]),
    trigger('background', [
      transition('wait => in', [
        animate('500ms',
          keyframes([
            style({opacity: 0}),
            style({opacity: 1})
          ]))
      ]),
      transition('* => out', [
        animate('500ms',
          keyframes([
            style({opacity: 1}),
            style({opacity: 0})
          ]))
      ])
    ]),
    trigger('image', [
      transition('wait => in', [
        animate('500ms',
          keyframes([
            style({transform: 'rotateX(180deg)'}),
            style({transform: 'rotateX(0deg)'})
          ]))
      ]),
      transition('* => out', [
        animate('500ms', style({transform: 'rotateX(180deg)'}))
      ])
    ])
  ]
})
export class ItemComponent implements OnChanges {
  state: ItemState = 'first';
  @Input() item: Item;
  @Input() showValue: boolean;
  @Input() leaving: boolean;

  ngOnChanges(simpleChange: SimpleChanges): void {
    if (simpleChange.item) {
      if (this.leaving) {
        this.state = 'out'
      } else {
        this.state = 'in'
      }
    }
  }
}

type ItemState = 'first' | 'wait' | 'in' | 'out'
