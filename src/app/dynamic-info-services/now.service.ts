import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NowService {

  now: BehaviorSubject<number> = new BehaviorSubject<number>(new Date().getTime() / 1000);
  constructor() {
    console.dir('intervalSet');
    setInterval(() => {
      this.now.next(new Date().getTime());
    }, 5000);
  }

}
