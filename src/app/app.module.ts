import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule, Storage } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CabeceraParallax } from '../directives/cabecera-parallax/cabecera-parallax';
import { Settings } from '../providers'; 


export function provideSettings(storage: Storage) {
  /**
    *
    * El Provider de ajustes define por defecto algunos ajustes para la app
    *
    * Se puede añadir cualquier nueva opción, una vez los ajustes se guarden,
    * estos valores no reemplazarán a los valores guardados.
    */
  return new Settings(storage, {
    option1: true,
    option2: 'Gonzalo',
    option3: '3',
    option4: 'Hello'
  });
}


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SettingsPage,
    TabsPage,
    CabeceraParallax
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
