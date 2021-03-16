import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './sale.component';
import { LogoModule } from '../logo/logo.module';
import { PipeModule } from '../pipe/pipe.module';



@NgModule({
  declarations: [SaleComponent],
  imports: [
    CommonModule,
    LogoModule,
    PipeModule.forRoot()
  ],
  exports: [
    SaleComponent
  ]
})
export class SaleModule { }
