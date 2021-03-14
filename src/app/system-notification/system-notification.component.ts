import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../dynamic-info-services/web3.service';
import { NowService } from '../dynamic-info-services/now.service';
import { Router } from '@angular/router';
import { ProjectService } from '../static-info-services/project.service';
import { inOutAnimations } from '../animations';

@Component({
  selector: 'app-system-notification',
  templateUrl: './system-notification.component.html',
  styleUrls: ['./system-notification.component.scss'],
  animations: [ inOutAnimations ]
})
export class SystemNotificationComponent implements OnInit {

  tokensToClaim = this.web3.lge.user.contribution;
  ended = this.web3.lge.calculatedEnd;
  now = this.nowService.now;
  currentChain = this.web3.user.chainId;
  projectChain = this.project.project.chainId;
  networkName = this.project.project.networkName;
  opened = true;
  constructor(
    private web3: Web3Service,
    private nowService: NowService,
    private router: Router,
    private project: ProjectService
  ) { }

  ngOnInit(): void {
  }

  goClaim(): void {
    this.router.navigateByUrl('lge');
  }

  close(): void {
    this.opened = false;
  }

}
