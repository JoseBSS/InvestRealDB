import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {DecimalPipe} from '@angular/common';
// import { IonIntlTelInputModule } from 'ion-intl-tel-input';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    HttpClientModule,
    

    IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },CurrencyPipe, DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
