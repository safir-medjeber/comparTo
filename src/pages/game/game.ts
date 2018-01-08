import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Item} from "../../model/Item";
import {MOCK_ITEMS} from "../../services/mock-items";
import {Question} from "../../model/Question";
import {GameRulesService} from "../../services/gameRules.service";

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})

export class GamePage {
  public itemsByThematic: Item[];
  public currentQuestion: Question;

  public score: number = 0;
  public handleTimeout: number ;


  constructor(public navCtrl: NavController, public navParams: NavParams, public gameRulesService: GameRulesService) {
    // this.itemsByThematic = this.navParams.get('thematicParam');
    this.itemsByThematic = MOCK_ITEMS;
    this.updateView(this.gameRulesService.getFirstQuestion(this.itemsByThematic), 0);
    console.log("Question: ");
    console.log(this.currentQuestion);
    console.log("?");
  }


  goToGameOptionsPage(){
    this.navCtrl.push('GameOptionsPage',);
  }
  goToGameEndPage(){
    this.navCtrl.push('GameEndPage', {scoreParam: this.score, thematicParam: this.itemsByThematic});
  }

  public playerAnswer(playerAnswer: Item, idPositionAnswer: number){
    clearTimeout(this.handleTimeout);
    if(this.gameRulesService.isTheGoodAnswer(playerAnswer, this.currentQuestion)){
      this.updateView(this.gameRulesService.getNextQuestion(this.itemsByThematic, playerAnswer, idPositionAnswer), this.gameRulesService.updateScore(this.score));
      this.timer(5000);
    }
    else{
      this.goToGameEndPage();
    }
  }

  private timer(timeToAnswer: number): void {
    this.handleTimeout = setTimeout(() => {
      this.goToGameEndPage();
    }, timeToAnswer);
  }

  private updateView(question: Question, score: number): void{
    this.score = score;
    this.currentQuestion = question;
  }

}
