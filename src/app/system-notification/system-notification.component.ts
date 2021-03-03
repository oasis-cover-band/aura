import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../dynamic-info-services/web3.service';
import { NowService } from '../dynamic-info-services/now.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-system-notification',
  templateUrl: './system-notification.component.html',
  styleUrls: ['./system-notification.component.scss']
})
export class SystemNotificationComponent implements OnInit {

  tokensToClaim = this.web3.lge.user.contribution;
  ended = this.web3.lge.calculatedEnd;
  now = this.nowService.now;
  constructor(
    private web3: Web3Service,
    private nowService: NowService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goClaim(): void {
    this.router.navigateByUrl('lge');
  }

}
