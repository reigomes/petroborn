import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreApprovedPage } from './pre-approved';

@NgModule({
	declarations: [
		PreApprovedPage
	],
	imports: [
		IonicPageModule.forChild(PreApprovedPage)
	],
	exports: [
		PreApprovedPage
	]
})

export class PreApprovedPageModule { }
