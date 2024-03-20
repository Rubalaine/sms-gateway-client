import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {pt_BR} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import pt from '@angular/common/locales/pt';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FeedbackModule} from "./feedback/feedback.module";
import { NZ_CONFIG, NzConfig } from 'ng-zorro-antd/core/config';
import { GlobalInterceptor } from './shared/interceptors/global.interceptor';

registerLocaleData(pt);

const ngZorroConfig: NzConfig = {
  message: { nzDuration: 5000}
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FeedbackModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: pt_BR},
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
    { provide: HTTP_INTERCEPTORS, useClass: GlobalInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
