import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../dynamic-info-services/web3.service';
import { ProjectService } from '../static-info-services/project.service';
import { inOutAnimations } from '../animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [ inOutAnimations ]
})
export class DashboardComponent implements OnInit {

  exchange = this.web3.exchange;
  token = this.web3.token;
  vault = this.web3.cellar;
  project = this.projectService.project;
  priceInUSD = this.web3.apyCalculator.grapes.priceInUSD;
  priceInNetworkCurrency = this.web3.apyCalculator.grapes.priceInNetworkCurrency;
  constructor(
    private web3: Web3Service,
    private projectService: ProjectService,
  ) { }

  ngOnInit(): void {
  }

}
