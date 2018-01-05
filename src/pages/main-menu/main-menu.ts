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
    var lol;
    this.itemService.getData().subscribe(data => lol=data);
    console.log(lol);
  }

  goToInstructionsPage() {
    this.navCtrl.push('InstructionsPage');
  }

  goToThematicsPage(){
    this.navCtrl.push('ThematicsPage');
  }

}
