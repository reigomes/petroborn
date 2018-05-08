import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import {InvoiceService} from '../../providers/invoice-service-mock';

@IonicPage({
	name: 'page-invoices',
	segment: 'invoices'
})

@Component({
    selector: 'page-invoices',
    templateUrl: 'invoices.html'
})
export class InvoicesPage {

    invoices: Array<any> = [];

    constructor(public navCtrl: NavController, public service: InvoiceService) {
        this.getInvoices();
        // console.log(this.messages);
    }

    itemTapped() {
      // console.log('itemTapped: ', message);
      // this.navCtrl.push(InvoiceDetailPage, invoice);
      this.navCtrl.push('page-checkout');
    }

    getInvoices() {
      this.service.getInvoices().then(data => this.invoices = data);
    }

}
