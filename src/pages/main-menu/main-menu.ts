import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-main-menu',
  templateUrl: 'main-menu.html'
})
export class MainMenuPage {

  constructor(public navCtrl: NavController) {
  }


  goToInstructionsPage() {
    this.navCtrl.push('InstructionsPage');
  }

  goToThematicsPage(){
    this.navCtrl.push('ThematicsPage');
  }



}
