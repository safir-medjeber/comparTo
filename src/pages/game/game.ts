import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Item} from "../../model/Item";
import {ItemService} from "../../services/item.service";


@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})

export class GamePage implements OnInit {

  private itemsByThematic: Item[];
  candidate1: Item;

  private candidate2: Item;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.itemsByThematic = this.navParams.get('thematicParam');
    this.beginGame();
  }


  goToGameOptionsPage(){
    this.navCtrl.push('GameOptionsPage');
  }


  private  getRandomInt(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  private chooseNewCandidate(previousCandidate: Item):Item {
    let indexCandidate: number = this.getRandomInt(0, this.itemsByThematic.length);
    if(previousCandidate){
      while( this.isTheSameCandidate(previousCandidate, this.itemsByThematic[indexCandidate])){
        indexCandidate = this.getRandomInt(0, this.itemsByThematic.length);
      }
    }
    return this.itemsByThematic[indexCandidate];
  }

  private isTheSameCandidate(candidate1:Item, candidate2: Item): boolean{
    return candidate1.name === candidate2.name;
  }


  private beginGame(){
    this.candidate1 = this.chooseNewCandidate(undefined);
    this.candidate2 = this.chooseNewCandidate(this.candidate1);
  }

}
