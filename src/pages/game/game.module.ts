import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {GamePage} from "./game";

import {ItemComponent} from "./item/item.component";
import {QuestionComponent} from "./question/question.component";
import {CounterComponent} from "../../components/counter.component";

@NgModule({
  declarations: [
    GamePage,
    ItemComponent,
    QuestionComponent,
    CounterComponent
  ],
  imports: [
    IonicPageModule.forChild(GamePage)
  ],
  entryComponents: [
    GamePage
  ]
})
export class GameModule {}
