import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';

export interface MenuItem {
	title: string;
	component: any;
	icon: string;
}

@Component({
	templateUrl: 'app.html'
})
export class ionPropertyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = 'page-initial';
	showMenu: boolean = true;

	homeItem: any;

	initialItem: any;

	messagesItem: any;

	invoicesItem: any;

	timelineItem: any;

	appMenuItems: Array<MenuItem>;

	yourPropertyMenuItems: Array<MenuItem>;

	accountMenuItems: Array<MenuItem>;

	helpMenuItems: Array<MenuItem>;

	constructor(public platform: Platform) {
		this.initializeApp();

		this.homeItem = {component: 'page-home' };
		this.initialItem = {component: 'page-initial'};
		this.messagesItem = {component: 'page-message-list'};
		this.invoicesItem = {component: 'page-invoices'};
		this.timelineItem = {component: 'page-timeline'};

		this.appMenuItems = [
			{title: 'Properties', component: 'page-property-list', icon: 'home'},
			{title: 'Brokers', component: 'page-broker-list', icon: 'people'},
			{title: 'Favorites', component: 'page-favorite-list', icon: 'star'},
			{title: 'Get Pre-Approved', component: 'page-pre-approved', icon: 'checkmark-circle'},
		];

		this.yourPropertyMenuItems = [
			{title: 'Rent Out', component: 'page-your-property', icon: 'clipboard'},
			{title: 'Sell', component: 'page-your-property', icon: 'cash'},
			{title: 'Lease', component: 'page-your-property', icon: 'grid'}
		];


		this.accountMenuItems = [
			{title: 'Authentication', component: 'page-auth', icon: 'log-in'},
			{title: 'My Account', component: 'page-my-account', icon: 'contact'},
			{title: 'Logout', component: 'page-initial', icon: 'log-out'},
		];

		this.helpMenuItems = [
			{title: 'About', component: 'page-about', icon: 'information-circle'},
			{title: 'Support', component: 'page-support', icon: 'information-circle'}
		];

	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
		});
	}

	openPage(page) {
		this.nav.setRoot(page.component);
	}
}
