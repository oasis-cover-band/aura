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
  // auraContractAddress = this.web3.auraContractAddress;
  uniswapRouter = this.web3.exchangeRouterContractAddress;
  // uniswapPair = this.web3.auraWrappedNetworkCurrencyPairAddress;
  auraContractAddress = '0x26ce25148832c04f3d7f26f32478a9fe55197166'; // TEST
  uniswapPair = new BehaviorSubject('0xde5b7ff5b10cc5f8c95a2e2b643e3abf5179c987'); // TEST
  constructor(
    private apollo: Apollo,
    private web3: Web3Service
    ) {
      console.dir('intervalSet');
    setInterval(() => {
      if (this.uniswapPair.getValue() !== '') {
      const pair = this.uniswapPair.getValue();
      this.apollo
      .watchQuery({
        query: gql`
        {
            token(id: "${this.auraContractAddress}" ) {
                id
                derivedETH
            },
            pair(id: "${pair}" ) {
                volumeToken1
                volumeToken0
                volumeUSD
            },
            tokenDayDatas(first: 10, orderBy: date, orderDirection: desc,
             where: {
               token: "${this.auraContractAddress}"
             }
            ) {
               id
               date
               priceUSD
               totalLiquidityToken
               totalLiquidityUSD
               totalLiquidityETH
               dailyVolumeETH
               dailyVolumeToken
               dailyVolumeUSD
            }
        }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        if (result.data.pair !== null) {
          console.dir(result.data.tokenDayDatas);
          this.web3.exchange.dayData.next(result.data.tokenDayDatas);
          this.web3.exchange.volume.next(Number(result.data.pair.volumeToken0));
          this.web3.exchange.volumeNetworkCurrency.next(Number(result.data.pair.volumeToken1));
          this.web3.exchange.volumeUSD.next(Number(Math.floor(result.data.pair.volumeToken1 * this.networkCurrencyPriceUSD.getValue())));
          this.web3.exchange.price.next(Number(result.data.token.derivedETH));
          this.web3.exchange.priceUSD.next(Number(result.data.token.derivedETH) * this.networkCurrencyPriceUSD.getValue());
        }
      });
      }
    }, 1000);
  }
}
