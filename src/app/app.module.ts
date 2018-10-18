import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

// Angular Firebase Imports
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment'; // Configuration of Google firebase

import { Camera } from '@ionic-native/camera/ngx';
import { Observable } from 'rxjs/Observable';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  	declarations: [AppComponent],
  	entryComponents: [],
  	imports: [
  		BrowserModule,
  		AngularFireModule.initializeApp(environment.firebase),
    	AngularFireAuthModule,
    	AngularFirestoreModule,
    	AngularFireStorageModule,
  		IonicModule.forRoot(),
		AppRoutingModule,
  	],
  	providers: [
	    StatusBar,
		SplashScreen,
		Camera,
	    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  	],
  	bootstrap: [AppComponent]
})
export class AppModule {}
