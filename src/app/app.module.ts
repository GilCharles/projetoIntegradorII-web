import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { HomeActiveComponent } from 'src/components/home-page/active/home-active.component';
import { RegisterCreditorComponent } from 'src/components/home-page/register-creditor/register-creditor.component';
import { RegisterDebtorComponent } from 'src/components/home-page/register-debtor/register-debtor.component';
import { ActivatedComponent } from 'src/components/registration/activated/activated.component';
import { CepComponent } from 'src/components/registration/cep/cep.component';
import { CityComponent } from 'src/components/registration/city/city.component';
import { NameComponent } from 'src/components/registration/name/name.component';
import { NeighborhoodComponent } from 'src/components/registration/neighborhood/neighborhood.component';
import { NumberphoneComponent } from 'src/components/registration/numberphone/numberphone.component';
import { RoadComponent } from 'src/components/registration/road/road.component';
import { SendComponent } from 'src/components/registration/send/send.component';
import { StateComponent } from 'src/components/registration/state/state.component';
import { ValuesComponent } from 'src/components/active-page/values/values.component';
import { NameDebtorComponent } from 'src/components/active-page/name-debtor/name-debtor.component';
import { NameCreditorComponent } from 'src/components/active-page/name-creditor/name-creditor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeActiveComponent,
    RegisterCreditorComponent,
    RegisterDebtorComponent,
    ActivatedComponent,
    CepComponent,
    CityComponent,
    NameComponent,
    NeighborhoodComponent,
    NumberphoneComponent,
    RoadComponent,
    SendComponent,
    StateComponent,
    ValuesComponent,
    NameDebtorComponent,
    NameCreditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
