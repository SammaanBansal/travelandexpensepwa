import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

// Pages
import { LoginPage } from './login/login.page';

// Services
import { AuthenticationService } from '../services/authentication/authentication.service';

@NgModule({
 	imports: [
 		CommonModule,
    	FormsModule,
    	IonicModule,
    	RouterModule.forChild([
      		{
        		path: 'login',
        		component: LoginPage
      		}
		])
 	],
 	exports: [
 		LoginPage
 	],
 	providers: [AuthenticationService],
 	declarations: [LoginPage]
})
export class RegistrationModule {}