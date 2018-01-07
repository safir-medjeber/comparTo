import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {ItemService} from "../../services/item.service";


@IonicPage()
@Component({
  selector: 'page-instructions',
  templateUrl: 'thematics.html'
})

export class ThematicsPage {

  constructor(public navCtrl: NavController , public itemService: ItemService) {

  }


  goToGamePage(){
    this.itemService.getItemsByThematic("Pays").subscribe((data) => {
      this.navCtrl.push('GamePage', { thematicParam: data });
    });

  }
}
