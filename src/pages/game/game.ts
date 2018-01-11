import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {Item} from "../../model/Item";
import {MOCK_ITEMS} from "../../services/mock-items";
import {Question} from "../../model/Question";
import {GameRulesService, GameState} from "../../services/gameRules.service";

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})

export class GamePage {
  public itemsByThematic: Item[];
  public currentQuestion: Question;
  public score: number = 0;

  public animating: boolean;

  private game: GameRulesService;

  constructor(public navCtrl: NavController) {
    this.itemsByThematic = MOCK_ITEMS;
    this.game = new GameRulesService();
    this.game.emitter.subscribe(this.handler);
    this.game.start();
  }

  handler = (event: GameState) => {
    switch (event) {
      case GameState.CanQuestion:
        this.score = this.game.getScore();
        this.animate();
        this.currentQuestion = this.game.getQuestion(this.itemsByThematic);
        break;
      case GameState.Questioning:
        this.reset();
        break;
      case GameState.GameOver:
        this.goToGameEndPage();
        break;
    }
  }

  animate(): any {
    this.animating = true;
  }

  reset(): any {
    this.animating = false;
  }

  goToGameEndPage() {
    this.navCtrl.push('GameEndPage', {scoreParam: this.score, thematicParam: this.itemsByThematic});
  }

}
