import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
// SHARED
import { SharedModule } from './shared/shared.module';
// VENTA MODULE
import { VentasModule } from './ventas/ventas.module';
// APP ROUTER MODULES
import { AppRouterModule } from './app-router.module';
// Cambiar el locales de la app
import localeEs from '@angular/common/locales/es-HN';
import localeFa from '@angular/common/locales/fa';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);
registerLocaleData(localeFa);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,                       
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:'es-HN'}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
