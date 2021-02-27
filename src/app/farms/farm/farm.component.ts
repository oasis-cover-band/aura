import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Web3Service } from 'src/app/dynamic-info-services/web3.service';
import { ProjectService } from 'src/app/static-info-services/project.service';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
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
  constructor(
    private web3: Web3Service,
    public project: ProjectService
  ) { }

  ngOnInit(): void {
  }

  getData(): void {
    this.data = this.web3.poolInfo[this.pid];
  }

  deposit(): void {
    const value = Number(Number(this.inputEle.nativeElement.value).toFixed(5));
    this.web3.deposit(this.pid, value);
  }

  withdraw(): void {
    const value = Number(Number(this.inputEle.nativeElement.value).toFixed(5));
    this.web3.withdraw(this.pid, value);
  }

  claim(): void {
    this.web3.claim(this.pid);
  }

}