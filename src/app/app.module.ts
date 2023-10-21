import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { HomeActiveComponent } from 'src/components/home-page/active/home-active.component';
import { RegisterCreditorComponent } from 'src/components/home-page/register-creditor/register-creditor.component';
import { RegisterDebtorComponent } from 'src/components/home-page/register-debtor/register-debtor.component';
import { ActivatedComponent } from 'src/components/registration/activated/activated.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeActiveComponent,
    RegisterCreditorComponent,
    RegisterDebtorComponent,
    ActivatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
