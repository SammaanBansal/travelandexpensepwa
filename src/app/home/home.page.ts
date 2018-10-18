import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {

    claims: any;
    history: any;

  constructor(public navCtrl: NavController) {
    console.log("Hello");
  }
    redirectToClaims(){
        this.navCtrl.navigateRoot('/claim/request');
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Homepage');
  }

}
