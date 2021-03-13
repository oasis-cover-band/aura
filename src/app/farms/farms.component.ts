import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../dynamic-info-services/web3.service';
import { ProjectService } from '../static-info-services/project.service';
import { BehaviorSubject } from 'rxjs';
import { inOutAnimations } from '../animations';
// tslint:disable:max-line-length

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.scss'],
  animations: [ inOutAnimations ]
})
export class FarmsComponent implements OnInit {

  farms = this.web3.poolInfo;
  vault = this.web3.cellar;
  project = this.projectService.project;
  allPools = true;
  masterPools = false;
  networkPools = false;
  vipPools = false;
  firstVipPool = new BehaviorSubject(0);
  firstSlice = new BehaviorSubject(0);
  lastSlice = new BehaviorSubject(this.farms.length);
  constructor(
    private web3: Web3Service,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.searchForFirstVipPool();
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
    this.setToAll();
  }

  toggleMasterPools(): void {
    this.turnAllOff();
    this.masterPools = true;
    this.setToMaster();
  }

  toggleNetworkPools(): void {
    this.turnAllOff();
    this.networkPools = true;
    this.setToNetwork();
  }

  toggleVipPools(): void {
    this.turnAllOff();
    this.vipPools = true;
    this.setToVip();
  }

  setToAll(): void {
    this.firstSlice.next(0);
    this.lastSlice.next(this.farms.length);
  }

  setToMaster(): void {
    this.firstSlice.next(0);
    this.lastSlice.next(3); // ALWAYS 3 MASTER POOLS, TOKEN, TOKEN-NETWORK_CURRENCY LQIUIDITY, AND WRAPPED TOKEN-NETWORK_CURRENCY LQIUIDITY
  }

  setToNetwork(): void {
    this.firstSlice.next(3); // ALWAYS 3 MASTER POOLS, TOKEN, TOKEN-NETWORK_CURRENCY LQIUIDITY, AND WRAPPED TOKEN-NETWORK_CURRENCY LQIUIDITY
    this.lastSlice.next(this.firstVipPool.getValue());
  }

  setToVip(): void {
    this.firstSlice.next(this.firstVipPool.getValue());
    this.lastSlice.next(this.farms.length);
  }

  searchForFirstVipPool(): void {
    if (this.firstVipPool.getValue() !== 0) {
      return;
    }
    this.farms.forEach((farm, index) => {
      if (this.firstVipPool.getValue() !== 0) {
        return;
      }
      if (farm.poolInfo.getValue().VIPpool === true) {
        this.firstVipPool.next(index);
        return;
      }
    });
}

}
