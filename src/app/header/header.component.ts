import { Component, OnInit } from '@angular/core';
import { HeaderItemsService } from '../static-info-services/header-items.service';
import { inOutAnimations } from '../animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [ inOutAnimations ]
})
export class HeaderComponent implements OnInit {

  headerItems = this.headerItemsService.headerItems;
  menuOpen = false;
  showingPoolTokens = false;
  constructor(
    private headerItemsService: HeaderItemsService
  ) { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  setShowingPoolTokens(status: boolean): void {
    this.showingPoolTokens = status;
    this.menuOpen = false;
  }
}
