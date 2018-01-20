import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {Item} from "../../model/Item";
import {ItemService} from "../../services/item.service";


@IonicPage()
@Component({
  selector: 'page-game-end',
  templateUrl: 'game-end.html',

})

export class GameEndPage implements OnInit{

  score: number;
  record: number;
  private itemsByThematic: Item[];


  constructor(private navCtrl: NavController, private viewCtrl: ViewController, private navParams: NavParams, private storage: Storage) {
    this.score = this.navParams.get('scoreParam');
    this.itemsByThematic = this.navParams.get('thematicParam');
  }

  ngOnInit(): void {
    this.determineRecord();
  }

  private determineRecord(): void {
    this.storage.get('record').then((previousRecord) => {
      if(previousRecord == null  || previousRecord < this.score )
        this.setNewRecord();
      else
        this.record = previousRecord;
    });
  }

  private setNewRecord(): void {
    this.storage.set('record', this.score).then(() => {
      this.record = this.score;
      console.log('Your record is', this.record);
    });
  }


  private resetRecord(): void {
    this.storage.clear().then(() => {
      this.navCtrl.push('GamePage', {thematicParam: this.itemsByThematic});
    });
  }

  public goToGamePage():void {
    this.navCtrl.push('GamePage', {scoreParam: this.score, thematicParam: this.itemsByThematic})
      .then(() => this.navCtrl.remove(this.viewCtrl.index));
  }

  goToGameStartPage(){
    this.navCtrl.popToRoot();
  }

}
