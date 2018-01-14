import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {GamePage} from "./game";

import {ItemComponent} from "./item/item.component";
import {CounterComponent} from "../../components/counter.component";
import {WaterBubbleComponent} from "./water-bubble/water-bubble.component";
import {QuestionComponent, WrightComponent, WrongComponent} from "./question/question.component";
import {ScoreComponent} from "./score/score.component";

@NgModule({
  declarations: [
    GamePage,
    ItemComponent,
    WrongComponent,
    WrightComponent,
    QuestionComponent,
    WaterBubbleComponent,
    CounterComponent,
    ScoreComponent
  ],
  imports: [
    IonicPageModule.forChild(GamePage)
  ],
  entryComponents: [
    GamePage
  ]
})
export class GameModule {}
