import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component';
import { HomeActiveComponent } from './pages/home-page/active/home-active.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterCreditorComponent } from './pages/home-page/register-creditor/register-creditor.component';
import { RegisterDebtorComponent } from './pages/home-page/register-debtor/register-debtor.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { ActivatedComponent } from './pages/registration-page/activated/activated.component';
import { CepComponent } from './pages/registration-page/cep/cep.component';
import { CityComponent } from './pages/registration-page/city/city.component';
import { NameComponent } from './pages/registration-page/name/name.component';
import { NeighborhoodComponent } from './pages/registration-page/neighborhood/neighborhood.component';
import { NumberphoneComponent } from './pages/registration-page/numberphone/numberphone.component';
import { RoadComponent } from './pages/registration-page/road/road.component';
import { StateComponent } from './pages/registration-page/state/state.component';
import { SendComponent } from './pages/registration-page/send/send.component';
import { NameCreditorComponent } from './pages/active-page/name-creditor/name-creditor.component';
import { NameDebtorComponent } from './pages/active-page/name-debtor/name-debtor.component';
import { ValuesComponent } from './pages/active-page/values/values.component';
import { ActiveMolPageComponent } from './pages/active-page/active-mol-page.component';




@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    HomeActiveComponent,
    HomePageComponent,
    RegisterCreditorComponent,
    RegisterDebtorComponent,
    RegistrationPageComponent,
    ActivatedComponent,
    CepComponent,
    CityComponent,
    NameComponent,
    NeighborhoodComponent,
    NumberphoneComponent,
    RoadComponent,
    StateComponent,
    ActivatedComponent,
    SendComponent,
    NameCreditorComponent,
    NameDebtorComponent,
    ValuesComponent,
    ActiveMolPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
