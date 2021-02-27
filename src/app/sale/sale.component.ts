import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Web3Service } from 'src/app/dynamic-info-services/web3.service';
import { ProjectService } from 'src/app/static-info-services/project.service';
import { NowService } from '../dynamic-info-services/now.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  @Input() data = this.web3.lge;
  @Input() token = this.web3.token;

  @ViewChild('inputEle', {static: false}) inputEle: ElementRef;

  inputPlaceholder = 'Enter an amount to contribute.';
  claimButton = this.web3.lge.claimButton;
  depositButton = this.web3.lge.depositButton;
  now = this.nowService.now;
  constructor(
    private web3: Web3Service,
    public project: ProjectService,
    private nowService: NowService
  ) {
    this.data = this.web3.lge;
    this.token = this.web3.token;
  }

  ngOnInit(): void {
  }

  deposit(): void {
    const value = Number(Number(this.inputEle.nativeElement.value).toFixed(5));
    this.web3.depositLGE(value, true);
  }

  claim(): void {
    this.web3.claimLGE();
  }

  createLiquidity(): void {
    this.web3.createLiquidity();
  }

}
