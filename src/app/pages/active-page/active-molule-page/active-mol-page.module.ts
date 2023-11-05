import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameDebtorComponent } from './name-debtor/name-debtor.component';
import { NameCreditorComponent } from './name-creditor/name-creditor.component';
import { ValuesComponent } from './values/values.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NameDebtorComponent,
    NameCreditorComponent,
    ValuesComponent
  ]
})
export class ActiveMolPageModule { }
