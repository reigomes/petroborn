import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {BrokerService} from '../../providers/broker-service-mock';

@IonicPage({
	name: 'page-broker-detail',
	segment: 'broker/:id'
})

@Component({
    selector: 'page-broker-detail',
    templateUrl: 'broker-detail.html'
})
export class BrokerDetailPage {
		param: number;
    broker: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public service: BrokerService) {
    	this.param = this.navParams.get('id');
  		this.broker = this.service.getItem(this.param) ? this.service.getItem(this.param) : this.service.findAll()[0];
    }

  openChat() {
  	// console.log(proptype);
  	this.navCtrl.push('page-chat-detail');
  }

}
