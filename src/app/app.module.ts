import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from "@ionic/storage";


import { MyApp } from './app.component';
import { MainMenuPage } from '../pages/main-menu/main-menu';

import { ItemService } from '../services/item.service'
import { GameRulesService } from "../services/gameRules.service";

@NgModule({
  declarations: [
    MyApp,
    MainMenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainMenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemService,
    GameRulesService
  ]
})
export class AppModule {}
