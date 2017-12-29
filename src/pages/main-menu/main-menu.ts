import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemService } from '../../services/item.service';
import {Item} from "../../data/Item";


@Component({
  selector: 'page-main-menu',
  templateUrl: 'main-menu.html'
})
export class MainMenuPage implements OnInit{

  items: Item[];
  constructor(public navCtrl: NavController, private itemService: ItemService) {
  }

  ngOnInit(){
    console.log("onInit - LOADING DATA");
    this.items = this.itemService.loadData();
  }

  goToInstructionsPage() {
    this.navCtrl.push('InstructionsPage');
  }

  goToThematicsPage(){
    this.navCtrl.push('ThematicsPage');
  }

}
