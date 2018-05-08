import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrokerListPage } from './broker-list';

@NgModule({
	declarations: [
		BrokerListPage
	],
	imports: [
		IonicPageModule.forChild(BrokerListPage)
	],
	exports: [
		BrokerListPage
	]
})

export class BrokerListPageModule { }
