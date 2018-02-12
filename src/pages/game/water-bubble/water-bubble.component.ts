import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";

@Component({
  selector: 'water-bubble',
  templateUrl: 'water-bubble.component.html'
})
export class WaterBubbleComponent implements OnChanges {
  @Input() reset: boolean = true;
  @Input() percentage: number = 0;

  ngOnChanges(simpleChange: SimpleChanges): void {
    if(simpleChange.percentage) {
      this.percentage = Math.max(0, Math.min(100 - this.percentage, 100));
    }
  }
}
