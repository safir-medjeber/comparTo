import {Component, Input} from "@angular/core";
import {Theme, getTheme} from "../../model/Theme";

@Component({
  selector: 'game-button',
  template: `<div>{{theme }}</div>`
}) export class GameButton {
  @Input() theme: Theme

}
