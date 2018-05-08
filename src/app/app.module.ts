import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { PipesModule } from '../pipes/pipes.module';

import { ionPropertyApp } from './app.component';

import { MessageService } from "../providers/message-service-mock";
import { PropertyService } from "../providers/property-service-mock";
import { BrokerService } from "../providers/broker-service-mock";
import { InvoiceService } from "../providers/invoice-service-mock";
import { ChatService } from "../providers/chat-service-mock";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { FileOpener } from '@ionic-native/file-opener';

@NgModule({
  declarations: [
		ionPropertyApp
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(ionPropertyApp, {
			preloadModules: true,
			scrollPadding: false,
			scrollAssist: true,
			autoFocusAssist: false
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
    StatusBar,
    SplashScreen,
    Keyboard,
    PropertyService,
    BrokerService,
    MessageService,
    InvoiceService,
    ChatService,
    FileOpener,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
