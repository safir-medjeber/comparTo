import {GameQuestionPage} from "./game-question";
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";

@NgModule({
  declarations: [
    GameQuestionPage
  ],
  imports: [
    IonicPageModule.forChild(GameQuestionPage)
  ],
  entryComponents: [
    GameQuestionPage
  ]
})
export class GameQuestionModule {}
