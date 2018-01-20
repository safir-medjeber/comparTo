import {Component} from '@angular/core';
import {IonicPage, NavController, ViewController} from 'ionic-angular';
import {MOCK_ITEMS} from "../../services/mock-items";
import {Question} from "../../model/Question";
import {GameRulesService, GameState} from "../../services/gameRules.service";

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})

export class GamePage {
  public currentQuestion: Question;
  public lastQuestion?: Question;

  public score: number = -1;

  public animating: boolean;
  public percentage: number = 0;
  private percentageInterval: number;
  private gameOver: boolean;

  private game: GameRulesService;

  constructor(private navCtrl: NavController, private viewCtrl: ViewController) {
    this.game = new GameRulesService(MOCK_ITEMS);
    this.game.emitter.subscribe(this.handler);
    this.game.start();
  }

  handler = (event: GameState) => {
    switch (event) {
      case GameState.CanQuestion:
        if(this.score == -1) {
          this.score = 0;
          this.getQuestion();
        } else {
          this.animate();
          setTimeout(() => {
            this.reset();
            this.lastQuestion = this.currentQuestion;
            this.getQuestion()
          }, 2000)
        }
        break;
      case GameState.Questioning:
        this.reset();
        break;
      case GameState.GameOver:
        this.animate();
        this.gameOver = true;
        setTimeout(() => {
          this.goToGameEndPage();
        }, 2000)
        break;
    }
  }

  getQuestion(): any {
    this.currentQuestion = this.game.getQuestion();
    this.percentageInterval = setInterval(() => this.percentage += 1, this.game.timer / 100);
  }

  animate(): any {
    clearInterval(this.percentageInterval);
    setTimeout(() => this.score = this.game.getScore(), 900)
    this.percentage = 0;
    this.animating = true;
  }

  reset(): any {
    this.animating = false;
  }

  goToGameEndPage() {
    this.navCtrl.push('GameEndPage', {scoreParam: this.score})
      .then(() => this.navCtrl.remove(this.viewCtrl.index));
  }

}
