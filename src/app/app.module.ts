import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from "@ionic/storage";

import {MyApp} from './app.component';
import {GameStartPage} from "../pages/game-start/game-start";
import {GameService} from '../services/game.service'
import {ItemService} from '../services/item.service'

@NgModule({
  declarations: [
    MyApp,
    GameStartPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GameStartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemService,
    GameService
  ]
})
export class AppModule {}
