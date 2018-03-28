import {Component, ViewChild} from '@angular/core';
import {Events, NavController, Platform} from 'ionic-angular';
import {GameService} from "../../services/game.service";
import {Storage} from '@ionic/storage';
import {getTheme, Theme, themes} from "../../model/Theme";
import {animations} from "./game-start.animation";

@Component({
  selector: 'page-game-start',
  templateUrl: 'game-start.html',
  animations: animations
})
export class GameStartPage {
  @ViewChild("e") e;
  click = false;
  state: string = '';

  chunkedTheme: any[];
  getTheme = getTheme;
  score: {[key in Theme]: Promise<number>}
  private gamePageTimeout: () => void;
  private failure: () => void;

  constructor(public navCtrl: NavController, private gameService: GameService, storage: Storage, events: Events, private platform: Platform) {
    let R = [];
    for (let i = 0, len = themes.length; i < len; i += 2)
      R.push(themes.slice(i, i + 2));
    this.chunkedTheme = R;

    const reloadScore = () => this.score = {
      'country': storage.get('recordcountry'),
      'building': storage.get('recordbuilding'),
      'food': storage.get('recordfood'),
      'car': storage.get('recordcar'),
      'stadium': storage.get('recordstadium')
    }
    events.subscribe('reloadScores', reloadScore);
    reloadScore();
  }

  handleClick() {
    if(this.click) {
      this.gamePageTimeout()
    }
  }

  backButtonAction() {
    if(this.click) {
      this.e.nativeElement.innerHTML = ""
      this.e.nativeElement.className = ""
      this.click = false
      this.failure()
    }
    else {
      this.platform.ready().then(() => {
        this.platform.exitApp()
      })
    }
  }

  goToGamePage(button: HTMLElement, label: Theme) {
    let bounds = button.getBoundingClientRect();
    let style = this.e.nativeElement.style;
    style.top = bounds.top + "px";
    style.left = bounds.left + "px";
    style.width = bounds.width + "px";
    style.height = bounds.height + "px";
    this.e.nativeElement.innerHTML = button.outerHTML + '<div class="loader"></div>'
    this.e.nativeElement.className = "btn-growth loading " + label
    this.click = true;

    let timer = new Promise((resolve, failure) => {
      this.gamePageTimeout = resolve
      this.failure = failure
      setTimeout(this.gamePageTimeout, 2000, 'promise 1 resolved');
    });

    let gameLoading = this.gameService.setTheme(label)
    gameLoading.then(() =>
      this.e.nativeElement.className = "btn-growth loaded " + label
    )
    Promise.all([timer, gameLoading]).then(() => {
        this.navCtrl.push('GamePage', {})
        setTimeout(() => {
          this.e.nativeElement.innerHTML = ""
          this.e.nativeElement.className = ""
          this.click = false
        }, 22250)
      }
    )
  }
}
