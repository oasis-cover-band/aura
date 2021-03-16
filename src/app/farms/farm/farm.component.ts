import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Web3Service } from 'src/app/dynamic-info-services/web3.service';
import { ProjectService } from 'src/app/static-info-services/project.service';
import { Router } from '@angular/router';
import { inOutAnimations } from 'src/app/animations';
import { NotificationsService } from 'src/app/dynamic-info-services/notifications.service';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  animations: [inOutAnimations],
  styleUrls: ['./farm.component.scss']
})
export class FarmComponent implements OnInit {

  @Input() pid = 0;

  @Input() data = this.web3.poolInfo[this.pid];

  @ViewChild('inputEle', {static: false}) inputEle: ElementRef;
  
  inputPlaceholder = 'Enter an amount to deposit or withdraw.';
  claimButton = this.web3.poolInfo[this.pid].claimButton;
  withdrawButton = this.web3.poolInfo[this.pid].withdrawButton;
  depositButton = this.web3.poolInfo[this.pid].depositButton;
  project = this.projectService.project;
  user = this.web3.user;
  partialWithdrawDisclaimer = 0;

  showingMore = false;
  constructor(
    private web3: Web3Service,
    private projectService: ProjectService,
    private router: Router,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
  }

  getData(): void {
    this.data = this.web3.poolInfo[this.pid];
  }

  deposit(): void {
    const value = Number(Number(this.inputEle.nativeElement.value).toFixed(5));
    if (value === 0) {
      this.web3.poolInfo[this.pid].depositButton.next(3);
      this.notificationsService.notify({
        title: 'Deposit Error',
        icon: 'alarm',
        text: 'There was an error depositing your tokens to the pool named ' + this.data.poolInfo.getValue().poolName + '.',
        date: new Date()
      });
      setTimeout(() => {
        this.web3.poolInfo[this.pid].depositButton.next(0);
      }, 2500);
      return;
    }
    this.web3.deposit(this.pid, value);
  }

  withdraw(): void {
    const value = Number(Number(this.inputEle.nativeElement.value).toFixed(5));
    if (value === 0) {
      this.web3.poolInfo[this.pid].withdrawButton.next(3);
      this.notificationsService.notify({
        title: 'Withdraw Error',
        icon: 'alarm',
        text: 'There was an error withdrawing your tokens from the pool named ' + this.data.poolInfo.getValue().poolName + '.',
        date: new Date()
      });
      setTimeout(() => {
        this.web3.poolInfo[this.pid].withdrawButton.next(0);
      }, 2500);
      return;
    }
    this.web3.withdraw(this.pid, value);
  }

  withdrawAll(): void {
    const value = Number(Number(this.data.userPoolInfo.getValue().amount));
    this.web3.withdrawAll(this.pid, value);
    this.partialWithdrawDisclaimer = 0;
  }

  partialWithdrawWaiver(claimOrWithdraw): void {
    this.partialWithdrawDisclaimer = claimOrWithdraw;
  }
  cancelDisclaimer(): void {
    this.partialWithdrawDisclaimer = 0;
  }

  claim(): void {
    this.web3.claim(this.pid);
  }

  claimAll(): void {
    this.withdrawAll();
  }
  
  showMore(): void {
    this.showingMore = !this.showingMore;
  }

  goWrapper(): void {
    this.router.navigateByUrl('wrapper');
  }
  setMaxDeposit(): void {
    this.inputEle.nativeElement.value = (String((this.data.userPoolInfo.getValue().amount / 1e18).toFixed(5)));
  }
  setMaxBalance(): void {
    this.inputEle.nativeElement.value = (String((this.data.userBalance.getValue() / 1e18).toFixed(5)));
  }
}
