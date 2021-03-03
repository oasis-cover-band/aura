import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { NotificationsModule } from './notifications/notifications.module';
import { SystemNotificationModule } from './system-notification/system-notification.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    NotificationsModule,
    BrowserAnimationsModule,
    SystemNotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
