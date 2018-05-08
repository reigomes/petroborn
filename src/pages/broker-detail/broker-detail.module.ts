import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrokerDetailPage } from './broker-detail';

@NgModule({
	declarations: [
		BrokerDetailPage
	],
	imports: [
		IonicPageModule.forChild(BrokerDetailPage)
	],
	exports: [
		BrokerDetailPage
	]
})

export class BrokerDetailPageModule { }
