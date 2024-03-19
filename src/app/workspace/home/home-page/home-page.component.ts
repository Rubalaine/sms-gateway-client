import {Component} from '@angular/core';
import {ROUTE} from "../../../shared/constants/routes-constants";
import {APP} from "../../../shared/constants/app.constants";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent {
  ROUTES = ROUTE;
  APP = APP;
  username = 'Kelven';
}
