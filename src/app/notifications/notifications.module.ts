import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { NotificationModule } from './notification/notification.module';



@NgModule({
  declarations: [NotificationsComponent],
  imports: [
    CommonModule,
    NotificationModule
  ],
  exports: [
    NotificationsComponent
  ]
})
export class NotificationsModule { }
