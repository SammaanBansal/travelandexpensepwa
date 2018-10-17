import { Component } from '@angular/core';
import { 
	NavController,
	AlertController,
	LoadingController,
	ToastController 
} from '@ionic/angular';

import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

	loginForm: {
    	email: string,
    	Password: string,
  	} = {
    	email : '',
    	Password : ''
  	}

  	constructor(
  		public navCtrl: NavController,
	    public alertCtrl: AlertController,
	    public loadingCtrl: LoadingController,
	    public toastCtrl: ToastController,
	    private authProvider: AuthenticationService
	) {}

	/**
		* Sign in using email and password
  	*/
  	signIn(){
	    let loading = this.showLoading("Please wait...");
	    this.authProvider.signIn(this.loginForm.email, this.loginForm.Password)
	      	.then((userData) => {
	      		console.log("Response: ", userData);
	        	loading.then((loader) => {
	        		loader.dismiss();
	        	});
	        	// this.navCtrl.setRoot(HomePage);
	        	this.showToast('Logged in successfully!');
	      	}, (error) => {
	      		console.log("Error: ", error);
	      		loading.then((loader) => {
	        		loader.dismiss();
	        	});
	        	// loading.dismiss();
	        	if (error.code == 'auth/invalid-email') this.showToast('Email address is not valid.');
	        	else if (error.code == 'auth/user-disabled') this.showToast('Your account has been disabled.');
	        	else if (error.code == 'auth/user-not-found') this.showToast('User not found.');
	        	else if (error.code == 'auth/wrong-password') this.showToast('Invalid password.');
	      	});
  	}

  	/**
		* Show alert message
		* @param alertTitle		Title of alert
		* @param message      Message of alert
		* @return             Instance of created alert
  	*/
  	// showAlert(alertTitle, message) {
   //  	const alert = this.alertCtrl.create({
	  //    	title: alertTitle,
	  //     	subTitle: message,
	  //     	buttons: ['OK']
   //  	});
   //  	alert.present();
   //  	return alert;
  	// }

  	/**
    	* Show toast message
    	* @param message      Message of toast
    	* @return             Instance of created toast
  	*/
  	async showToast(message: string) {
	    const toast = await this.toastCtrl.create({
	      message: message,
	      duration: 2000,
	      position: 'bottom'
	    });
	    toast.present();
	    return toast;
  	}

  	/**
    	* Show toast message
    	* @param message      Message of toast
    	* @return             Instance of created toast
  	*/
  	async showLoading(message: string) {
  		const loading = await this.loadingCtrl.create({spinner: 'crescent', showBackdrop: true, message: message});
  		loading.present();
  		return loading;
  		// return await loading;	
  	}


}