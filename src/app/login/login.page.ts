import { Component, OnInit } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  LoadingController, 
  ToastController 
} from '@ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from '@ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
