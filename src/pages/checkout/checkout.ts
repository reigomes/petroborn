import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController, ToastController} from "ionic-angular";

@IonicPage({
	name: 'page-checkout',
	segment: 'checkout'
})

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})
export class CheckoutPage {
  public paymethods: string = 'creditcard';

  constructor(public nav: NavController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    // set sample data
  }

  // process send button
  send() {
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    // show message
    let toast = this.toastCtrl.create({
      showCloseButton: true,
      cssClass: 'profile-bg',
      message: 'Bill paid with Success!',
      duration: 3000,
      position: 'bottom'
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
      toast.present();
      // back to home page
      this.nav.setRoot('page-home');
    }, 3000)
  }
}
