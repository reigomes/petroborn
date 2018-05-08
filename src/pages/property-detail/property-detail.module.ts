import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
// import { PipesModule } from '../../pipes/pipes.module';

import { PropertyDetailPage } from './property-detail';

@NgModule({
	declarations: [
		PropertyDetailPage
	],
	imports: [
		IonicPageModule.forChild(PropertyDetailPage)
	],
	exports: [
		PropertyDetailPage
	]
})

export class PropertyListPageModule { }
