import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {GameStartPage} from "../pages/game-start/game-start";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = GameStartPage;

  constructor(platform: Platform, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      splashScreen.hide();
      platform.registerBackButtonAction(() => {})
    })
  }
}

