import { Component, OnInit, Input } from '@angular/core';
import { NotificationsService } from 'src/app/dynamic-info-services/notifications.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() data =
  {
  title: 'Approve Successful',
  icon: 'alarm',
  text: `You have successfully approved your tokens to pool.`,
  date: new Date()
};
  @Input() index = 0;
  @Input() static = false;
  notificationsLength = this.notificationsService.length;
  constructor(
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.notificationsService.close();
  }

}
