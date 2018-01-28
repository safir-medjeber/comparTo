import {Component, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {GameService} from "../../services/game.service";

const full = {
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  "z-index": 500,
  //"background-color": "#72BCC5"
};

@Component({
  selector: 'page-game-start',
  templateUrl: 'game-start.html',
  animations: [
    trigger("grow", [
      state("true", style(full)),
      transition("false => true", [
        style({"z-index": 500}),
        animate("150ms ease", style(full))
      ])
    ])
  ]
})
export class GameStartPage {
  @ViewChild("e") e;
  click = false;

  public thematicLabels: string[] = ["country", "building", "food", "car", "stadium"];

  constructor(public navCtrl: NavController, private gameService: GameService) {
  }

  goToGamePage(button: HTMLElement, label: Theme) {

    let bounds = button.getBoundingClientRect();
    let style = this.e.nativeElement.style;
    style.top = bounds.top + "px";
    style.left = bounds.left + "px";
    style.width = bounds.width + "px";
    style.height = bounds.height + "px";
    this.click = true;

    this.gameService.setTheme(label)
    setTimeout(() => {
        this.navCtrl.push('GameQuestionPage', {}, {'animate': false})
      setTimeout(() => this.click = false, 500)
      }, 150
    )
  }
}
