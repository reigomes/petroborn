import {Component} from '@angular/core';
import {IonicPage, ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';

import {PropertyService} from '../../providers/property-service-mock';

import { FileOpener } from '@ionic-native/file-opener';

@IonicPage({
	name: 'page-property-detail',
	segment: 'property/:id'
})

@Component({
    selector: 'page-property-detail',
    templateUrl: 'property-detail.html'
})
export class PropertyDetailPage {

	property: any;
	param: number;

    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public propertyService: PropertyService, public toastCtrl: ToastController, private fileOpener: FileOpener) {
		this.param = this.navParams.get('id');
		this.property = this.propertyService.getItem(this.param) ? this.propertyService.getItem(this.param) : this.propertyService.getProperties()[0];
    }

    openBrokerDetail(broker) {
		this.navCtrl.push('page-broker-detail', {
			'id': broker.id
		});
    }

    view(property) {
        this.fileOpener.open('assets/reports/DRY_12345678_AAAAMM_VXX.xls', 'application/xls')
        .then(() => console.log('File is opened'))
        .catch(e => console.log('Error opening file', e));
    }

    favorite(property) {
        this.propertyService.favorite(property)
            .then(property => {
                let toast = this.toastCtrl.create({
                    message: 'Property added to your favorites',
                    cssClass: 'mytoast',
                    duration: 2000
                });
                toast.present(toast);
            });
    }

    share(property) {
        let actionSheet: ActionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: () => console.log('share via twitter')
                },
                {
                    text: 'Facebook',
                    handler: () => console.log('share via facebook')
                },
                {
                    text: 'Email',
                    handler: () => console.log('share via email')
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => console.log('cancel share')
                }
            ]
        });

        actionSheet.present();
    }

}
