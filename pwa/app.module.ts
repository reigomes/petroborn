import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
// import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';

import { ionPropertyApp } from './app.component';

import { MessageService } from "../providers/message-service-mock";
import { PropertyService } from "../providers/property-service-mock";
import { BrokerService } from "../providers/broker-service-mock";
import { InvoiceService } from "../providers/invoice-service-mock";
import { ChatService } from "../providers/chat-service-mock";

@NgModule({
  declarations: [
		ionPropertyApp
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	IonicModule.forRoot(ionPropertyApp, {
		preloadModules: true,
		iconMode: 'md',
		mode: 'md'
    }),
    IonicStorageModule.forRoot({
      name: '__ionPropertyDB',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
		ionPropertyApp
  ],
  providers: [
    PropertyService,
    BrokerService,
    MessageService,
    InvoiceService,
	ChatService,
    // { provide: LocationStrategy, useClass: PathLocationStrategy },
    // { provide: APP_BASE_HREF, useValue : '/' },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
