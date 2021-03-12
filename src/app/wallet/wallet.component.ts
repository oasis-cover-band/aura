import { Component, OnInit, HostBinding } from '@angular/core';
import { Web3Service } from '../dynamic-info-services/web3.service';
import { ProjectService } from '../static-info-services/project.service';
import { Output, EventEmitter } from '@angular/core';
import { inOutAnimations } from '../animations';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  animations: [inOutAnimations],
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  user = this.web3.user;
  opened = true;
  project = this.projectService.project;
  poolInfo = this.web3.poolInfo;
  @HostBinding('class.viewing') viewingBalances = false;
  @HostBinding('class.showing-pool') showingPoolTokensStyle = false;
  @Output() showingPoolTokens = new EventEmitter<boolean>();
  
  constructor(
    private web3: Web3Service,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

  connectWallet(): void {
    this.web3.connectWallet();
  }

  showPoolTokens(): void {
    this.showingPoolTokensStyle = !this.showingPoolTokensStyle;
    this.showingPoolTokens.emit(this.showingPoolTokensStyle);
  }

  viewBalances(): void {
    // this.showingPoolTokensStyle = true;
    // this.showingPoolTokens.emit(true);
    this.viewingBalances = !this.viewingBalances;
  }

  logout(): void {
    this.web3.logout();
  }
}
