import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ItemService} from "../../services/item.service";


@Component({
  selector: 'page-game-start',
  templateUrl: 'game-start.html',
})

export class GameStartPage {

  public thematicLabels: string[] = ["country", "building", "food", "car", "stadium"];

  constructor(public navCtrl: NavController , public itemService: ItemService) {
  }

  goToGamePage(label: string){
    this.itemService.getItemsByThematic(label).subscribe((data) => {
      this.navCtrl.push('GamePage', {thematicParam: label});
    });
  }

}
