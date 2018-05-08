import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
	name: 'page-property-filter'
})

@Component({
  selector: 'page-property-filter',
  templateUrl: 'property-filter.html',
})

export class PropertyFilterPage {

	minmaxbeds: any;
	minmaxbaths: any;
	minmaxprice: any;
	radiusmiles: Number;

  constructor(public navCtrl: NavController) {

  	this.radiusmiles = 5;

  	this.minmaxbeds = {
  		upper:10,
  		lower:1
  	};

		this.minmaxbaths = {
  		upper:10,
  		lower:1
  	};

		this.minmaxprice = {
  		upper:5000000,
  		lower:100000
  	};

  }

  closeModal() {
    this.navCtrl.pop();
  }

}
