import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IonicPage, NavController, LoadingController, ToastController } from 'ionic-angular';

@IonicPage({
	name: 'page-your-property',
	segment: 'yourproperty'
})

@Component({
    selector: 'your-property',
    templateUrl: 'your-property.html'
})
export class YourPropertyPage implements OnInit {

  public onYourPropertyForm: FormGroup;

  constructor(private _fb: FormBuilder, public navCtrl: NavController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {

  }

  ngOnInit() {
    this.onYourPropertyForm = this._fb.group({
      profiledata: [true, Validators.compose([
        Validators.required
      ])],
      propertyTitle: ['', Validators.compose([
        Validators.required
      ])],
      propertyAddress: ['', Validators.compose([
        Validators.required
      ])],
      propertyType: ['', Validators.compose([
        Validators.required
      ])],
      bedrooms: ['', Validators.compose([
        Validators.required
      ])],
      bathrooms: ['', Validators.compose([
        Validators.required
      ])],
      askPrice: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  // process send button
  sendData() {
    // send booking info
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    // show message
    let toast = this.toastCtrl.create({
      showCloseButton: true,
      cssClass: 'profiles-bg',
      message: 'Your property was registered!',
      duration: 3000,
      position: 'bottom'
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
      toast.present();
      // back to home page
      this.navCtrl.setRoot('page-home');
    }, 3000)
  }

}
