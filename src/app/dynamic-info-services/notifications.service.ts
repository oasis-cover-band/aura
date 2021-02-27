import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  notifications = [
  ];
  length = new BehaviorSubject(this.notifications.length);
  constructor() { }

  notify(data): void {
    this.notifications.push(data);
    this.length.next(this.notifications.length);
  }

  close(): void {
    this.notifications.shift();
    this.length.next(this.notifications.length);
  }
}
