import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})

export class GamePage {

  constructor(public navCtrl: NavController) {

  }

  goToGameOptionsPage(){
    this.navCtrl.push('GameOptionsPage');
  }

}
