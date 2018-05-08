import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";

@IonicPage({
	name: 'page-settings',
	segment: 'settings'
})

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
	language: string;
	currency: string;
	munits: string;

  constructor(public nav: NavController) {
		this.language = 'en-US';
		this.currency = 'USD';
		this.munits = 'F';
  }

}
