import { Component } from '@angular/core';
import { Web3Service } from './dynamic-info-services/web3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aura';

  constructor(
    private web3: Web3Service
  ) {
  }
}
