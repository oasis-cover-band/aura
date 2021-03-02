import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../dynamic-info-services/web3.service';
import { ProjectService } from '../static-info-services/project.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  user = this.web3.user;
  opened = true;
  project = this.projectService.project;
  
  constructor(
    private web3: Web3Service,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

  connectWallet(): void {
    this.web3.connectWallet();
  }

}
