import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {GameService} from "../../services/game.service";
import {themes} from "../../model/Theme";

@IonicPage()
@Component({
  selector: 'page-game-question',
  templateUrl: 'game-question.html',
})
export class GameQuestionPage {


  public themeToQuestion;
  public themeChoice;


  constructor(private navCtrl: NavController, private navParam: NavParams,  private gameService: GameService) {
    this.themeChoice = this.navParam.get("theme");
    this.themeToQuestion = new Map();
    this.themeToQuestion.set("country", "Quel pays le plus peuplé ?");
    this.themeToQuestion.set("building", "Quel édifice le plus haut ?");
    this.themeToQuestion.set("food", "Quelle denrée est la plus chere ?");
    this.themeToQuestion.set("car", "Quelle  voiture est la plus rapide ?");
    this.themeToQuestion.set("stadium", "Quel stade a la plus grande capacité ?");


    let p1 = new Promise((resolve, reject) => {
      setTimeout(resolve, 2000, 'promise 1 resolved');
    });
    let p2 = this.gameService.itemsPromise
    Promise.all([p1, p2]).then(_ =>
      this.navCtrl.push('GamePage', {}, {'animate':false})
    )
  }
}

