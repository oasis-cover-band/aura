import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderItemsService {

  headerItems = [
    {
      link: '',
      name: 'Home',
      icon: 'home'
    },
    {
      link: 'farms',
      name: 'Farming & Staking',
      icon: 'agriculture'
    },
    {
      link: 'lge',
      name: 'LGE',
      icon: 'card_giftcard'
    },
    {
      link: 'wrapper',
      name: 'Wrapper',
      icon: 'wrap_text'
    },
    {
      link: 'dashboard',
      name: 'Dashboard',
      icon: 'stacked_bar_chart'
    },
    {
      link: 'information',
      name: 'Information',
      icon: 'info'
    },
  ];
  constructor() { }
}
