import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {ThematicsPage} from "./thematics";
import {ThematicButtonComponent} from "./thematic-button/thematic-button.component";

@NgModule({
  declarations: [
    ThematicsPage,
    ThematicButtonComponent
  ],
  imports: [
    IonicPageModule.forChild(ThematicsPage)
  ],
  entryComponents: [
    ThematicsPage
  ]
})
export class ThematicsModule {}
