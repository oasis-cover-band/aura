import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  tokenName = 'AURA';
  LPToken = 'FLIP';
  networkCurrency = 'BNB';
  constructor() { }
}
