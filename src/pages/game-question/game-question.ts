import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
import {GameService} from "../../services/game.service";

@IonicPage()
@Component({
  selector: 'page-game-question',
  templateUrl: 'game-question.html',
})
export class GameQuestionPage {

  constructor(private navCtrl: NavController, private gameService: GameService) {
    let p1 = new Promise((resolve, reject) => {
      setTimeout(resolve, 2000, 'promise 1 resolved');
    });
    let p2 = this.gameService.itemsPromise
    Promise.all([p1, p2]).then(_ =>
      this.navCtrl.push('GamePage', {}, {'animate':false})
    )
  }
}

