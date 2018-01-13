import {Component, Input, OnChanges} from "@angular/core";

@Component({
  selector: 'water-bubble',
  templateUrl: 'water-bubble.component.html'
})
export class WaterBubbleComponent implements OnChanges {
  @Input() reset: boolean;
  @Input() percentage: number = 0;

  ngOnChanges(): void {
    this.percentage = Math.max(0, Math.min(100 - this.percentage, 100));
  }
}
