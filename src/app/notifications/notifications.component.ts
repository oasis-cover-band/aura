import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../dynamic-info-services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notifications = this.notificationsService.notifications;
  constructor(
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
  }

}
