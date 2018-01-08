import {Component, Input} from "@angular/core";
import {Item} from "../../../model/Item";

@Component({
  selector: 'item',
  template: `
    <div class="item">
      <div class="background" [style.backgroundImage]="'url(' + item.url + ')'"></div>
      <div class="background blur" [style.backgroundImage]="'url(' + item.url + ')'"></div>
      <div class="content">
        <img class="image" [alt]="item.name" [src]="item.url" />
        <div class="name">{{item.name}}</div>
        <div><animated-counter [value]="item.value"></animated-counter></div>
      </div>
    </div>
  `
}) export class ItemComponent {
  @Input() item: Item;
}
