import { Component, OnInit } from '@angular/core';
import { NavController, AlertController  } from '@ionic-angular';
import { ClaimDetailsPage } from '../../pages/claim-details/claim-details';
import { LoginPage } from '../../pages/login/login';
import { Camera, CameraOptions } from '@ionic-native/camera';
// import { File } from '@ionic-native/file';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import * as crypto from 'crypto';


@Component({
  selector: 'app-claim-tab',
  templateUrl: './claim-tab.component.html',
  styleUrls: ['./claim-tab.component.scss']
})
export class ClaimTabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
