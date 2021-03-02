import { Component } from '@angular/core';
import { Web3Service } from './dynamic-info-services/web3.service';
import { routerAnimations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [routerAnimations],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aura';

  constructor(
    private web3: Web3Service
  ) {
  }
}
