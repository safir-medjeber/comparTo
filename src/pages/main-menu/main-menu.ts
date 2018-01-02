import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemService } from '../../services/item.service';


@Component({
  selector: 'page-main-menu',
  templateUrl: 'main-menu.html'
})
export class MainMenuPage implements OnInit{


  constructor(public navCtrl: NavController, private itemService: ItemService) {
  }

  ngOnInit(){
    console.log("onInit - LOADING DATA");
    this.itemService.getData().subscribe(data => console.log(data));
  }

  goToInstructionsPage() {
    console.log(this.itemService.getItemsByThematic("Pays").subscribe(data => console.log(data)));
    //this.navCtrl.push('InstructionsPage');
  }

  goToThematicsPage(){
    this.navCtrl.push('ThematicsPage');
  }

}
