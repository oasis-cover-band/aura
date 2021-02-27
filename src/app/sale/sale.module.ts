import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './sale.component';
import { LogoModule } from '../logo/logo.module';



@NgModule({
  declarations: [SaleComponent],
  imports: [
    CommonModule,
    LogoModule
  ],
  exports: [
    SaleComponent
  ]
})
export class SaleModule { }
