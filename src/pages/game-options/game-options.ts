import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-game-options',
  templateUrl: 'game-options.html'
})

export class GameOptionsPage {

  constructor(public navCtrl: NavController) {

  }


  goToGamePage(){
    this.navCtrl.push('GamePage')
  }
}
