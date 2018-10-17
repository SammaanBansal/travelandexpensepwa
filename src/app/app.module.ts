import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Observable } from 'rxjs/Observable';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClaimTabComponent } from './claim-tab/claim-tab.component';
import { HistoryTabComponent } from './history-tab/history-tab.component';

@NgModule({
  declarations: [AppComponent, ClaimTabComponent, HistoryTabComponent],
  entryComponents: [
    HomePage,
    LoginPage,
    ClaimsTabComponent,
    HistoryTabComponent,
    ClaimDetailsPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
