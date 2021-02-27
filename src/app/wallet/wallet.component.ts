import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../dynamic-info-services/web3.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  
  user = this.web3.user;
  opened = true;

  constructor(
    private web3: Web3Service
  ) { }

  ngOnInit(): void {
  }
  
  connectWallet(): void {
    this.web3.connectWallet();
  }

}
