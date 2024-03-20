import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzIconModule} from "ng-zorro-antd/icon";
import { RouteCardComponent } from './route-card/route-card.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { StatusToColorPipe } from 'src/app/shared/pipes/status-to-color.pipe';


@NgModule({
  declarations: [
    HomePageComponent,
    RouteCardComponent,
    StatusToColorPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzTypographyModule,
    NzCardModule,
    NzIconModule,
    NzTabsModule,
    NzListModule,
    NzTagModule
  ]
})
export class HomeModule { }
