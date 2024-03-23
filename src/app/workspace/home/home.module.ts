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
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ConfigModalComponent } from './config-modal/config-modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CustomValidator } from 'src/app/shared/class/custom-validator';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [
    HomePageComponent,
    RouteCardComponent,
    StatusToColorPipe,
    ConfigModalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzTypographyModule,
    NzCardModule,
    NzIconModule,
    NzTabsModule,
    NzListModule,
    NzTagModule,
    NzGridModule,
    NzButtonModule,
    NzModalModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzTimePickerModule,
    NzSpinModule,
    NzMessageModule
  ],
  providers: [CustomValidator]
})
export class HomeModule { }
