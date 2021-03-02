import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './information.component';
import { NotificationModule } from '../notifications/notification/notification.module';



@NgModule({
  declarations: [InformationComponent],
  imports: [
    CommonModule,
    NotificationModule
  ],
  exports: [
    InformationComponent
  ]
})
export class InformationModule { }
