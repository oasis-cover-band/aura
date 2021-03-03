import { Component, OnInit, HostBinding } from '@angular/core';
import { Web3Service } from '../dynamic-info-services/web3.service';
import { ProjectService } from '../static-info-services/project.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  user = this.web3.user;
  opened = true;
  project = this.projectService.project;
  @HostBinding('class.viewing') viewingBalances = false;
  @HostBinding('class.showing-pool') showPoolTokens = false;
  @Output() newItemEvent = new EventEmitter<string>();
  
  constructor(
    private web3: Web3Service,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

  connectWallet(): void {
    this.web3.connectWallet();
  }

  viewBalances(): void {
    this.showPoolTokens = true;
    this.viewingBalances = !this.viewingBalances;
    console.dir('this.showPoolTokens');
    console.dir(this.showPoolTokens);
    console.dir('this.viewingBalances');
    console.dir(this.viewingBalances);
  }
}
