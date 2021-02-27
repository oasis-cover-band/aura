import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LogoModule } from '../logo/logo.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    LogoModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
