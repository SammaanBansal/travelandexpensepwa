import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic-angular';
import { ClaimsTabComponent } from '../claim-tab/claims-tab';
import { HistoryTabComponent } from '../history-tab/history-tab';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  claims: any;
  history: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.claims = ClaimsTabComponent;
    this.history = HistoryTabComponent;
  }
}
