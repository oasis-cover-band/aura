import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Web3Service } from './web3.service';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  networkCurrencyPriceUSD: BehaviorSubject<any> = this.web3.apyCalculator.networkCurrency.price;
  grapesContractAddress = this.web3.grapesContractAddress;
  constructor(
    private apollo: Apollo,
    private web3: Web3Service
    ) {
    setInterval(() => {
      this.apollo
      .watchQuery({
        query: gql`
        {
            token(id: "${this.grapesContractAddress}" ) {
                id
                derivedETH
                name
                pairBase (first: 20, orderBy: volumeUSD, orderDirection: desc)  {
                  volumeToken1
                  volumeToken0
                  volumeUSD
                }
                tokenDayData (first: 10, orderBy: date, orderDirection: desc) {
                  date
                  priceUSD
                  totalLiquidityToken
                  totalLiquidityUSD
                  totalLiquidityETH
                  dailyVolumeETH
                  dailyVolumeToken
                  dailyVolumeUSD
                }
            },
        }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        if (result.data.token !== null) {
          this.web3.exchange.dayData.next(result.data.token.tokenDayData);
          this.web3.exchange.volume.next(Number(result.data.token.pairBase[0].volumeToken0));
          this.web3.exchange.volumeNetworkCurrency.next(Number(result.data.token.pairBase[0].volumeToken1));
          // tslint:disable-next-line:max-line-length
          this.web3.exchange.volumeUSD.next(Number(Math.floor(result.data.token.pairBase[0].volumeToken1 * this.networkCurrencyPriceUSD.getValue())));
          this.web3.exchange.price.next(Number(result.data.token.derivedETH));
          this.web3.exchange.priceUSD.next(Number(result.data.token.derivedETH) * this.networkCurrencyPriceUSD.getValue());
        }
      });
    }, 10000);
  }
}
