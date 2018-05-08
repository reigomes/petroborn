import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, PopoverController } from 'ionic-angular';

import { PropertyService } from '../../providers/property-service-mock';

@IonicPage({
	name: 'page-home',
	segment: 'home',
	priority: 'high'
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  properties: Array<any>;
  searchKey: string = "";

	constructor(public navCtrl: NavController, public menuCtrl: MenuController, public popoverCtrl: PopoverController, public service: PropertyService) {
		this.menuCtrl.swipeEnable(true, 'authenticated');
		this.menuCtrl.enable(true);
		this.findAll();
  }

  openPropertyListPage(proptype) {
  	// console.log(proptype);
		this.navCtrl.push('page-property-list', proptype);
  }

	openPropertyDetail(property: any) {
		this.navCtrl.push('page-property-detail', {
			'id': property.id
		});
	}

  openSettingsPage() {
		this.navCtrl.push('page-settings');
  }

	onInput(event) {
	    this.service.findByName(this.searchKey)
	        .then(data => {
	            this.properties = data;
	        })
	        .catch(error => alert(JSON.stringify(error)));
	}

	onCancel(event) {
	    this.findAll();
	}

	findAll() {
	    this.service.findAll()
	        .then(data => this.properties = data)
	        .catch(error => alert(error));
	}

  presentNotifications(myEvent) {
    console.log(myEvent);
		let popover = this.popoverCtrl.create('page-notifications');
    popover.present({
      ev: myEvent
    });
  }

  ionViewWillEnter() {
      // this.navCtrl.canSwipeBack();
  }

}
