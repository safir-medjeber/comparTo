import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ItemService} from "../../services/item.service";
import {Item} from "../../model/Item";


@IonicPage()
@Component({
  selector: 'game-end-page',
  templateUrl: 'game-end.html'
})

export class GameEndPage {

  private score: number;
  private itemsByThematic: Item[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public itemService: ItemService) {
    this.score = this.navParams.get('scoreParam');
    this.itemsByThematic = this.navParams.get('thematicParam');
  }

  goToGamePage() {
    this.navCtrl.push('GamePage', {thematicParam: this.itemsByThematic});
  }

}
