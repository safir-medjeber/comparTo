import {Component, Input} from "@angular/core";
import {NavController} from "ionic-angular";
import {ItemService} from "../../../services/item.service";

@Component({
  selector: 'thematic-button',
  template: `
    <!--<ion-col col-6 col-sm-4 col-md-3 col-lg-2  text-center padding>-->
    <button ion-button class="btn-square logo"   (click)="goToGamePage()"></button>
    <!--</ion-col>-->
  `
})

export class ThematicButtonComponent {
  @Input() lol: string;

  constructor(public navCtrl: NavController , public itemService: ItemService) {

  }

  goToGamePage(){
    // this.itemService.getItemsByThematic("Pays").subscribe((data) => {
    this.navCtrl.push('GamePage', { thematicParam: "lol" });
  }


}
