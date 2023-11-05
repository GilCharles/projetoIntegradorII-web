import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { ActiveMolPageModule } from './pages/active-page/active-molule-page/active-mol-page.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActiveMolPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
