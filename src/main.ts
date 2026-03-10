import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {enableProdMode, importProvidersFrom} from '@angular/core';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {AppRoutingModule} from './app/app-routing.module';
import {RouteReuseStrategy} from '@angular/router';
import {provideIonicAngular} from '@ionic/angular/standalone';
import {environment} from './environments/environment';
import {defineCustomElements} from '@ionic/pwa-elements/loader';
import 'zone.js';


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, IonicModule.forRoot({
        innerHTMLTemplatesEnabled: true
      }),
      AppRoutingModule
    ),
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    provideIonicAngular({useSetInputAPI: true}),
  ]
}).catch(err => console.log(err));

defineCustomElements(window).then();
