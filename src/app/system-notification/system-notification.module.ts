import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemNotificationComponent } from './system-notification.component';



@NgModule({
  declarations: [SystemNotificationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SystemNotificationComponent
  ]
})
export class SystemNotificationModule { }
