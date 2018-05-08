import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourPropertyPage } from './your-property';

@NgModule({
	declarations: [
		YourPropertyPage
	],
	imports: [
		IonicPageModule.forChild(YourPropertyPage)
	],
	exports: [
		YourPropertyPage
	]
})

export class YourPropertyPageModule { }
