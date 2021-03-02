import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../dynamic-info-services/web3.service';
import { ProjectService } from '../static-info-services/project.service';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.scss']
})
export class FarmsComponent implements OnInit {

  farms = this.web3.poolInfo;
  vault = this.web3.vault;
  project = this.projectService.project;
  allPools = true;
  masterPools = false;
  networkPools = false;
  vipPools = false;
  constructor(
    private web3: Web3Service,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

  turnAllOff(): void {
    this.allPools = false;
    this.masterPools = false;
    this.networkPools = false;
    this.vipPools = false;
  }

  toggleAllPools(): void {
    this.turnAllOff();
    this.allPools = true;
  }

  toggleMasterPools(): void {
    this.turnAllOff();
    this.masterPools = true;
  }

  toggleNetworkPools(): void {
    this.turnAllOff();
    this.networkPools = true;
  }

  toggleVipPools(): void {
    this.turnAllOff();
    this.vipPools = true;
  }

}
