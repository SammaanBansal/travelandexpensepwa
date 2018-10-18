import { Component } from '@angular/core';
import { NavController, AlertController  } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Observable } from 'rxjs/Observable';
import { File } from '@ionic-native/file';

// Page Imports
import { ClaimDetailsPage } from '../claim-details/claim-details.page';
import { LoginPage } from '../../registration/login/login.page';

@Component({
    selector: 'app-claim-request',
    templateUrl: 'claim-request.page.html',
    styleUrls: ['claim-request.page.scss']
})
export class ClaimRequestPage{

    claimForm: {
        ExpTitle: string,
        Description: string,
        startDate: Date,
        endDate: Date,
        category: string,
        Amount: number
    } = {
        ExpTitle :'',
        Description : '',
        startDate : new Date() ,
        endDate : new Date(),
        category :'',
        Amount : 0
    }

  photo : any = 0;

  reciepts: { name: string, imageData: any }[] = [];
  lenReciepts = this.reciepts.length;
  
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  newImageObj: any;
  fileRef : any;

    constructor(
      public navCtrl: NavController,
      public alertCtrl: AlertController,
      private camera: Camera,
      private storage: AngularFireStorage
    ) {}

    generateRandom(){
      let imageName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      return imageName;
    }
  
  
    /**
    * Function to activate native camera    
    */

    clickImage() {
        const options: CameraOptions = {
            quality: 90,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }
        console.log("options", options)
        this.camera.getPicture(options).then((imageData) => {
            let newImageObj = {
                name: this.generateRandom(),
                imageData: 'data:image/jpeg;base64,' + imageData
            }
            this.reciepts.push(newImageObj);
            console.log('new', newImageObj )
        }, (err) => {
            // Handle error
            console.log("Error", err);
        });
    }

     uploadFile(event) {
        const file = event.target.files[0];
        const filePath = this.newImageObj.imageData;
        const ref = this.storage.ref(filePath);
        const task = ref.putString(file);
    
        // observe percentage changes
        this.uploadPercent = task.percentageChanges();
        // get notified when the download URL is available
        task.snapshotChanges().pipe(
            finalize(() => this.downloadURL = this.fileRef.getDownloadURL() )
        )
        .subscribe()
    }
    

    uploadImage() {
        const options: CameraOptions = {
            quality: 90,
            sourceType: 2,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }
        this.camera.getPicture(options).then((imageData) => {
            let newImageObj = {
                name: this.generateRandom(),
                imageData: 'data:image/jpeg;base64,' + imageData
            }
            this.reciepts.push(newImageObj);
            }, (err) => {
                // Handle error
            }
        );
    } 
}