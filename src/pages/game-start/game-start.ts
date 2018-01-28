import {Component, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {GameService} from "../../services/game.service";
import {transition, trigger, style, animate, keyframes, query, animateChild, state, group} from "@angular/animations";

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
    trigger('animate', [
      transition('* => *', [
        group([
          query('@slideUp', [animateChild()]),
          query('@slideDown', [animateChild()]),
        ]),
        query('@fadeIn', [animateChild()]),
      ]),
    ]),
    trigger('slideUp', [
      transition('* => *',
        animate('1000ms ease',
          keyframes([
            style({opacity: 0, transform: 'translateY(380%)', offset: 0}),
            style({opacity: 1, transform: 'translateY(380%)', offset: 0.1}),
            style({opacity: 1, transform: 'translateY(380%)', offset: 0.9}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ])
        )
      ),
    ]),
    trigger('slideDown', [
      state('*', style({opacity: 0})),
      transition('* => *',
        animate('1000ms ease',
          keyframes([
            style({opacity: 0, transform: 'translateY(200%)', offset: 0}),
            style({opacity: 1, transform: 'translateY(200%)', offset: 0.1}),
            style({opacity: 1, transform: 'translateY(200%)', offset: 0.9}),
            style({opacity: 0, transform: 'translateY(800%)', offset: 1}),
          ])
        )
      ),
    ]),
    trigger('fadeIn', [
      transition('* => *',
        animate('1000ms ease-in',
          keyframes([
            style({opacity: 0}),
            style({opacity: 1})
          ])
        )
      ),
    ]),
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
  state: string = '';

  public thematicLabels: string[] = ["country", "building", "food", "car", "stadium"];

  constructor(public navCtrl: NavController, private gameService: GameService) {
  }

  goToGamePage(button: HTMLElement, label: Theme){
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
