import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
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

  public score: number = 0;

  public animating: boolean = true;
  public percentage: number = 0;
  private percentageInterval: number;

  private game: GameRulesService;

  constructor(public navCtrl: NavController) {
    this.game = new GameRulesService(MOCK_ITEMS);
    this.game.emitter.subscribe(this.handler);
    this.game.start();
  }

  handler = (event: GameState) => {
    switch (event) {
      case GameState.CanQuestion:
        this.score = this.game.getScore();
        clearInterval(this.percentageInterval);
        this.percentage = 0;
        if(this.score == 0) {
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
        this.goToGameEndPage();
        break;
    }
  }

  getQuestion(): any {
    this.currentQuestion = this.game.getQuestion();
    this.percentageInterval = setInterval(() => this.percentage += 1, this.game.timer / 100);
  }

  animate(): any {
    this.animating = true;
  }

  reset(): any {
    this.animating = false;
  }

  goToGameEndPage() {
    this.navCtrl.push('GameEndPage', {scoreParam: this.score});
  }

}
