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
  constructor(
    private web3: Web3Service,
    public project: ProjectService
  ) { }

  ngOnInit(): void {
  }

}
