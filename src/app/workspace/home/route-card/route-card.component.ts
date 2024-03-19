import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-route-card',
  templateUrl: './route-card.component.html',
  styleUrls: ['./route-card.component.less']
})
export class RouteCardComponent {
  @Input() route!: string;
  @Input() icon!: string;
  @Input() title!: string;
}
