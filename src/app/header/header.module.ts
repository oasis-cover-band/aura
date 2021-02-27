import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderItemModule } from './header-item/header-item.module';
import { WalletModule } from '../wallet/wallet.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderItemModule,
    WalletModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
