import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import {PropertyService} from '../../providers/property-service-mock';

@IonicPage({
	name: 'page-favorite-list',
	segment: 'favorite-list'
})

@Component({
    selector: 'page-favorite-list',
    templateUrl: 'favorite-list.html'
})
export class FavoriteListPage {

    favorites: Array<any> = [];

    constructor(public navCtrl: NavController, public service: PropertyService) {
        this.getFavorites();
        // console.log(this.favorites);
    }

    itemTapped(favorite) {
		this.navCtrl.push('page-property-detail', {
			'id': favorite.property.id
		});
    }

    deleteItem(favorite) {
        this.service.unfavorite(favorite)
            .then(() => {
                this.getFavorites();
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    getFavorites() {
        this.service.getFavorites()
            .then(data => this.favorites = data);
    }

}
