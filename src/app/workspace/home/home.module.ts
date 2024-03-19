import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzIconModule} from "ng-zorro-antd/icon";
import { RouteCardComponent } from './route-card/route-card.component';


@NgModule({
  declarations: [
    HomePageComponent,
    RouteCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzTypographyModule,
    NzCardModule,
    NzIconModule
  ]
})
export class HomeModule { }
