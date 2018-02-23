import {Component, OnInit} from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {GameService} from "../../services/game.service";
import {Theme} from "../../model/Theme";
import {animations} from "../game-start/game-start.animation";


@IonicPage()
@Component({
  selector: 'page-game-end',
  templateUrl: 'game-end.html',
  animations: animations
}) export class GameEndPage implements OnInit {
  score: number;
  record: number;
  themeRecord: number;
  private theme: Theme;


  constructor(
    private gameService: GameService,
    private navCtrl: NavController,
    private navParams: NavParams,
    private storage: Storage,
    private events:Events,
  ) {
    this.theme = this.gameService.getTheme();
    this.score = this.navParams.get('scoreParam') || 0;
  }

  ngOnInit(): void {
    this.determineRecord();
  }

  private determineRecord(): void {
    Promise.all([
      this.storage.get('record'),
      this.storage.get('record' + this.theme)
    ]).then(([record, themeRecord]) => {
      this.record = Math.max(record || 0, this.score)
      this.themeRecord = Math.max(themeRecord || 0, this.score)
      this.setRecord();
    });
  }

  private setRecord(): void {
    this.storage.set('record', this.record),
    this.storage.set('record' + this.theme, this.themeRecord)
  }

  public goToGamePage():void {
    this.navCtrl.push('GamePage')
  }

  goToGameStartPage(){
    this.events.publish('reloadScores');
    this.navCtrl.popToRoot();
  }

}
