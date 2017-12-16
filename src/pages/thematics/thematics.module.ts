import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {ThematicsPage} from "./thematics";

@NgModule({
  declarations: [
    ThematicsPage
  ],
  imports: [
    IonicPageModule.forChild(ThematicsPage)
  ],
  entryComponents: [
    ThematicsPage
  ]
})
export class ThematicsModule {}
