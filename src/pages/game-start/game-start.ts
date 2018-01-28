import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ItemService} from "../../services/item.service";
import {transition, trigger, style, animate, keyframes, query, animateChild, state, group} from "@angular/animations";


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
  ]
})

export class GameStartPage {
  state: string = '';
  public thematicLabels: string[] = ["country", "building", "food", "car", "stadium"];

  constructor(public navCtrl: NavController , public itemService: ItemService) {
  }

  goToGamePage(label: string){
    this.itemService.getItemsByThematic(label).subscribe((data) => {
      this.navCtrl.push('GamePage', {thematicParam: data});
    });
  }


}
