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

export class GamePage implements OnInit {

  private itemsByThematic: Item[];
  private proposition1: Item;
  private proposition2: Item;
  private score: number = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams, public gameRulesService: GameRulesService) {
    // this.itemsByThematic = this.navParams.get('thematicParam');
    this.itemsByThematic = MOCK_ITEMS;
  }

  ngOnInit() {
    this.updateView(this.gameRulesService.getFirstQuestion(this.itemsByThematic), 0);
  }

  goToGameOptionsPage(){
    this.navCtrl.push('GameOptionsPage');
  }


  public playerResponse(playerResponse: number){
    console.log(playerResponse);
    if(this.gameRulesService.isTheGoodAnswer(playerResponse, this.proposition1, this.proposition2)){
      this.updateView(this.gameRulesService.getNextQuestion(this.itemsByThematic),this.gameRulesService.updateScore(this.score));
    }
    else{
      console.log("BAD");
    }
  }


  private updateView(question: Question, score: number): void{
    this.proposition1 = question.getProposition1();
    this.proposition2 = question.getProposition2();
    this.score = score;
  }


}
