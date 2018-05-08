import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import {BrokerService} from '../../providers/broker-service-mock';

@IonicPage({
	name: 'page-broker-list',
	segment: 'brokerlist'
})

@Component({
    selector: 'page-broker-list',
    templateUrl: 'broker-list.html'
})
export class BrokerListPage {

    brokers: Array<any>;

    constructor(public navCtrl: NavController, public service: BrokerService) {
       this.brokers = this.service.findAll()
    }

    openBrokerDetail(broker) {
        this.navCtrl.push('page-broker-detail', {
	      'id': broker.id
	    });
    }

}
