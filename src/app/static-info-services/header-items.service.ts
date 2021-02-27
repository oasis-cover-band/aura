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
      icon: 'flip_camera_android'
    },
    {
      link: 'lge',
      name: 'LGE',
      icon: 'point_of_sale'
    },
  ];
  constructor() { }
}
