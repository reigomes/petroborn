import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
// import { PipesModule } from '../../pipes/pipes.module';

import { PropertyFilterPage } from './property-filter';

@NgModule({
	declarations: [
		PropertyFilterPage
	],
	imports: [
		IonicPageModule.forChild(PropertyFilterPage)
	],
	exports: [
		PropertyFilterPage
	]
})

export class PropertyFilterPageModule { }
