import { Component, OnInit } from '@angular/core';
import { HeaderItemsService } from '../static-info-services/header-items.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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

  showPoolTokens(): void {
    console.dir('this.showingPoolTokens');
    console.dir(this.showingPoolTokens);
    this.showingPoolTokens = !this.showingPoolTokens;
  }
}
