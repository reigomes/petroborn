import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipesModule } from '../../pipes/pipes.module';

import { PropertyListPage } from './property-list';

@NgModule({
	declarations: [
		PropertyListPage
	],
	imports: [
		IonicPageModule.forChild(PropertyListPage),
		PipesModule
	],
	exports: [
		PropertyListPage
	]
})

export class PropertyListPageModule { }
