import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {Item} from "../../../model/Item";
import {transition, trigger, style, animate, keyframes, query, animateChild, group} from "@angular/animations";
import {getTheme, Theme, ThemeProps} from "../../../model/Theme";

@Component({
  selector: 'item',
  template: `
    <div class="item" [class.withMiniature]="themeProps.withMiniature" [@itemState]="state" (@itemState.done)="this.state = 'wait'">
      <div class="background-wrapper" [@background]="state">
        <div class="background" [style.backgroundImage]="'url(' + item.url + ')'"></div>
      </div>
      <div class="content">
        <img class="image" [alt]="item.name" [src]="item.url" [@image]="state"/>
        <div class="name">{{item.name}}</div>
        <div class="value">
          <div *ngIf="showValue">
            <span>{{item.value  | number:item.theme.unit.format}}</span>
            <span class="unit">{{item.theme.unit.label}}</span>
            
          </div>
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
  @Input() theme: Theme
  themeProps: ThemeProps;

  ngOnChanges(simpleChange: SimpleChanges): void {
    if(simpleChange.theme) {
      this.themeProps = getTheme[this.theme]
    }

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
