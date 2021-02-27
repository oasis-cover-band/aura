import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  tokenName = 'AURA';
  lpTokenName = 'FLIP';
  networkCurrency = 'BNB';
  constructor() { }
}
