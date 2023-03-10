import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Web3Service } from '../dynamic-info-services/web3.service';
import { ProjectService } from '../static-info-services/project.service';
import { BehaviorSubject } from 'rxjs';
import { inOutAnimations } from '../animations';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  animations: [inOutAnimations]
})
export class WrapperComponent implements OnInit {

  mode = {
    wBNB: {
      wrap: true,
      unwrap: false
    }
  };
  @ViewChild('inputEle', {static: false}) inputEle: ElementRef;
  user = this.web3.user;
  inputPlaceholder = new BehaviorSubject('Enter an amount to wrap or unwrap.');
  wrapButton = this.web3.wrapper.wrapButton;
  unwrapButton = this.web3.wrapper.unwrapButton;
  project = this.projectService.project;
  liquidityToken = this.web3.liquidityToken;
  constructor(
    private web3: Web3Service,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

  bringWrap(): void {
    this.mode.wBNB.unwrap = false;
    this.mode.wBNB.wrap = true;
  }

  bringUnwrap(): void {
    this.mode.wBNB.wrap = false;
    this.mode.wBNB.unwrap = true;
  }

  wrap(): void {
    const value = Number(Number(this.inputEle.nativeElement.value));
    this.web3.wrapFlip(value);
  }

  unwrap(): void {
    const value = Number(Number(this.inputEle.nativeElement.value));
    this.web3.unwrapFlip(value);
  }
}
