import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { BehaviorSubject } from 'rxjs';
import { NotificationsService } from './notifications.service';
import { ProjectService } from '../static-info-services/project.service';
const grapesAbi = require('../../assets/abi/grapesabi.json');
const stableCoinAbi = require('../../assets/abi/grapesabi.json');
const wrappedNetworkCurrencyAbi = require('../../assets/abi/grapesabi.json');
const grapesLPAbi = require('../../assets/abi/grapesabi.json');
const grapesWLPAbi = require('../../assets/abi/grapeswineabi.json');
const grapesCellarAbi = require('../../assets/abi/grapescellarabi.json');
const exchangeAbi = require('../../assets/abi/exchangeabi.json');
declare const window: any;
// tslint:disable:max-line-length

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  web3: Web3;

  grapesContract;
  grapesContractAddress = this.projectService.project.contracts.tokenAddress;

  grapesCellarContractAddress = this.projectService.project.contracts.cellarAddress;
  grapesCellarContract;

  stableCoinContractAddress = this.projectService.project.contracts.stableCoinAddress;
  stableCoinContract;

  exchangeFactoryContractAddress = this.projectService.project.contracts.exchangeFactoryAddress;
  exchangeFactoryContract;

  exchangeRouterContractAddress = this.projectService.project.contracts.exchangeRouterAddress;
  exchangeRouterContract;

  wrappedNetworkCurrencyContractAddress = this.projectService.project.contracts.wrappedNetworkCurrencyAddress;
  wrappedNetworkCurrencyContract;

  stableCoinWrappedNetworkCurrencyPairAddress = new BehaviorSubject('');
  grapesWrappedNetworkCurrencyPairAddress = new BehaviorSubject('');

  // USED TO STOP GATHERING INFORMATION FROM BLOCKCHAIN
  exitInterval = undefined;

  // EXTERNAL
  // // EXCHANGE VARIABLES
  exchange = {
    dayData: new BehaviorSubject(0),
    price: new BehaviorSubject(0),
    priceUSD: new BehaviorSubject(0),
    volume:  new BehaviorSubject(0),
    volumeUSD: new BehaviorSubject(0),
    volumeNetworkCurrency: new BehaviorSubject(0),
  };
  // // INTERNAL
  // USER VARIABLES
  user = {
    address: new BehaviorSubject(''),
    grapesBalance: new BehaviorSubject(0),
    bnbBalance: new BehaviorSubject(0),
    lpBalance: new BehaviorSubject(0),
    wLPBalance: new BehaviorSubject(0),
    chainId: new BehaviorSubject(0),
  };
  // TOKEN VARIABLES
  token = {
    name: new BehaviorSubject(''),
    symbol: new BehaviorSubject(''),
    decimals: new BehaviorSubject(0),
    totalSupply: new BehaviorSubject(0),
    circulatingSupply: new BehaviorSubject(0),
    buyFee: new BehaviorSubject(0),
    sellFee: new BehaviorSubject(0),
    poolId: new BehaviorSubject(0)
  };
  // LIQUIDITY TOKEN VARIABLES
  liquidityToken = {
    wLPContract: undefined,
    lpContract: undefined,
    wLPAddress: new BehaviorSubject(''),
    lpAddress: new BehaviorSubject(''),
    wLPName: new BehaviorSubject(''),
    lpName: new BehaviorSubject(''),
    wLPSymbol: new BehaviorSubject(''),
    lpSymbol: new BehaviorSubject(''),
    wLPDecimals: new BehaviorSubject(0),
    lpDecimals: new BehaviorSubject(0),
    wLPTotalSupply: new BehaviorSubject(0),
    lpTotalSupply: new BehaviorSubject(0),
    wLPPoolId: new BehaviorSubject(0),
    lpPoolId: new BehaviorSubject(0)
  };
  // WRAPPED VARIABLES
  wrapper = {
    unwrapAllowance: new BehaviorSubject(0),
    wrapAllowance: new BehaviorSubject(0),
    unwrapButton: new BehaviorSubject(0),
    wrapButton: new BehaviorSubject(0)
  };
  // LGE VARIABLES
  lge = {
    user: {
      contribution: new BehaviorSubject(0)
    },
    started: new BehaviorSubject(0),
    ended: new BehaviorSubject(0),
    duration: new BehaviorSubject(0),
    calculatedEnd: new BehaviorSubject(0),
    LPTperBNBUnit: new BehaviorSubject(0),
    individualCap: new BehaviorSubject(0),
    initialSupply: new BehaviorSubject(0),
    totalLPTMinted: new BehaviorSubject(0),
    totalBNBContributed: new BehaviorSubject(0),
    LPTBurnRatio: new BehaviorSubject(0),
    depositButton: new BehaviorSubject(0),
    claimButton: new BehaviorSubject(0),
    createLiquidityButton: new BehaviorSubject(0)
  };
  // VAULT VARIABLES
  cellar = {
    cumulativeRewardsSinceStart: new BehaviorSubject(0),
    averageFeesPerBlockSinceStart: new BehaviorSubject(0),
    averageFeesPerBlockEpoch: new BehaviorSubject(0),
    rewardsInThisEpoch: new BehaviorSubject(0),
    epoch: new BehaviorSubject(0),
    length: new BehaviorSubject(0),
    totalPoolWeights: new BehaviorSubject(0),
  };
  // POOL TOKENS VARIABLES
  poolInfo = [
    {
      token: {
        name: new BehaviorSubject(''),
        address: new BehaviorSubject(''),
        contract: undefined,
        decimals: new BehaviorSubject(0),
        symbol: new BehaviorSubject(''),
      },
      ape: new BehaviorSubject(30),
      tvl: new BehaviorSubject(42000000),
      poolTokenBalance: new BehaviorSubject(0),
      priceInUSD: new BehaviorSubject(0),
      priceInNetworkCurrency: new BehaviorSubject(0),
      claimButton: new BehaviorSubject(0),
      depositButton: new BehaviorSubject(0),
      withdrawButton: new BehaviorSubject(0),
      tokenApproval: new BehaviorSubject(0),
      tokenRewards: new BehaviorSubject(0),
      pendingGrapes: new BehaviorSubject(0),
      userPoolInfo: new BehaviorSubject({
        amount: 0,
        rewardPaid: 0
      }),
      poolInfo: new BehaviorSubject({
        poolName: '',
        stakedToken: '',
        allocPoint: 0,
        accGRAPESPerShare: 0,
        VIPpool: false,
        partialWithdraw: false
      }),
      pairInfo: {
        pairAddress: new BehaviorSubject(''),
        networkCurrencyPairBalance: new BehaviorSubject(0),
        tokenPairBalance: new BehaviorSubject(0)
      },
      userBalance: new BehaviorSubject(0)
    }
  ];
  // APY CALCULATOR VARIABLES
  apyCalculator = {
    grapes: {
      priceInUSD: new BehaviorSubject(0),
      priceInNetworkCurrency: new BehaviorSubject(0),
      pairBalance: new BehaviorSubject(0)
    },
    networkCurrency: {
      price: new BehaviorSubject(0),
      pairBalanceGrapes: new BehaviorSubject(0),
      pairBalanceStableCoin: new BehaviorSubject(0),
    },
    stableCoin: {
      pairBalance: new BehaviorSubject(0)
    },
  };


  constructor(
    private notificationsService: NotificationsService,
    private projectService: ProjectService
  ) {
    this.connectWallet();
  }

  async getChainId(): Promise<any> {
    this.web3.eth.getChainId().then(result => {
      this.user.chainId.next(result);
    });
  }

  async getInfo(): Promise<any> {
    if (this.user.address.getValue() === '') {
      this.logout();
      return;
    }
    this.getChainId();
    this.getTokenInfo();
    this.getUserInfo();
    if (this.liquidityToken.wLPAddress.getValue() !== '0x0000000000000000000000000000000000000000') { // IF LGE HAS STARTED
      await this.getLGEInfo();
      await this.getWrapperApprovals();
      await this.getLPTokensInfo();
      if (this.lge.LPTperBNBUnit.getValue() !== 0 && this.lge.LPTperBNBUnit.getValue() !== Number('0')) { // IF LGE HAS FINISHED
        await this.getPrices();
      }
      await this.getAllPoolInfo().then(afterGetAllPoolInfo => {
        this.poolInfo.forEach(async (element, index) => {
          await this.setContract(index).then(async afterSetting => {
            await this.getPoolTokenContractInfo(index);
          });
        });
      });
    }
  }
  

  async getPrices(): Promise<any> {
    return await this.getGrapesNetworkCurrencyPairAddress().then(async afterGrapesNetworkCurrencyPairAddress => {
      await this.getStableCoinNetworkCurrencyPairAddress().then(async afterStableCoinNetworkCurrencyPairAddress => {
        await this.getNetworkCurrencyPrice().then(async afterNetworkCurrencyPrice => {
          await this.getGrapesPriceInNetworkCurrency().then(async afterGrapesPriceInNetworkCurrency => {
            await this.getGrapesPriceInUSD().then(async afterGrapesPriceInUSD => {

            });
          });
        });
      });
    });
  }

  async getGrapesNetworkCurrencyPairAddress(): Promise<any> {
    return await this.exchangeFactoryContract.methods.getPair(this.grapesContractAddress, this.wrappedNetworkCurrencyContractAddress).call().then(async result => {
      await this.grapesWrappedNetworkCurrencyPairAddress.next(result);
    });
  }

  async getStableCoinNetworkCurrencyPairAddress(): Promise<any> {
    return await this.exchangeFactoryContract.methods.getPair(this.stableCoinContractAddress, this.wrappedNetworkCurrencyContractAddress).call().then(async result => {
      await this.stableCoinWrappedNetworkCurrencyPairAddress.next(result);
    });
  }

  async getNetworkCurrencyPrice(): Promise<any> {
    return await this.stableCoinContract.methods.balanceOf(this.stableCoinWrappedNetworkCurrencyPairAddress.getValue()).call().then(async resultStable => {
      await this.apyCalculator.stableCoin.pairBalance.next(resultStable);
      await this.wrappedNetworkCurrencyContract.methods.balanceOf(this.stableCoinWrappedNetworkCurrencyPairAddress.getValue()).call().then(async resultNetwork => {
        await this.apyCalculator.networkCurrency.pairBalanceStableCoin.next(resultNetwork);
        await this.apyCalculator.networkCurrency.price.next(this.apyCalculator.stableCoin.pairBalance.getValue() / this.apyCalculator.networkCurrency.pairBalanceStableCoin.getValue());
      });
    });
  }

  async getGrapesPriceInNetworkCurrency(): Promise<any> {
    return await this.grapesContract.methods.balanceOf(this.grapesWrappedNetworkCurrencyPairAddress.getValue()).call().then(async resultGrapes => {
      await this.apyCalculator.grapes.pairBalance.next(resultGrapes);
      await this.wrappedNetworkCurrencyContract.methods.balanceOf(this.grapesWrappedNetworkCurrencyPairAddress.getValue()).call().then(async resultNetwork => {
        await this.apyCalculator.networkCurrency.pairBalanceGrapes.next(resultNetwork);
        await this.apyCalculator.grapes.priceInNetworkCurrency.next(this.apyCalculator.networkCurrency.pairBalanceGrapes.getValue() / this.apyCalculator.grapes.pairBalance.getValue());
      });
    });
  }

  async getGrapesPriceInUSD(): Promise<any> {
    return await this.apyCalculator.grapes.priceInUSD.next(this.apyCalculator.grapes.priceInNetworkCurrency.getValue() * this.apyCalculator.networkCurrency.price.getValue());
  }

  connectWallet(): void {
    this.notificationsService.notify({
      title: 'Logging In',
      icon: 'alarm',
      text: 'You are attempting to login.',
      date: new Date()
    });
    this.tryProvider().then(tryProviderResult => {
      this.loginProcedure();
    });
  }

  logout(): void {
    this.stopGatheringInfo();
    this.web3.setProvider(null);
    this.clearUser();
    this.notificationsService.notify({
      title: 'Logged Out',
      icon: 'alarm',
      text: 'You have successfully logged out.',
      date: new Date()
    });
  }

  clearUser(): void {
    this.user.address.next('');
    this.user.grapesBalance.next(0);
    this.user.bnbBalance.next(0);
    this.user.lpBalance.next(0);
    this.user.wLPBalance.next(0);
  }

  async tryProvider(): Promise<any> {
    this.web3 = new Web3(Web3.givenProvider);
    if (Web3.givenProvider) {
      this.web3 = new Web3(Web3.givenProvider);
    } else {
      this.web3 = new Web3(window.ethereum);
    }
    if (!this.web3.givenProvider && !this.web3.currentProvider) {
      this.web3 = new Web3(this.projectService.project.rpcNetwork);
    }
    this.getChainId();
    await this.setContracts();
  }

  loginProcedure(): void {
    try {
      this.requestAccounts();
      window.ethereum.on('accountsChanged', (userAddresses) => {
        this.user.address.next(userAddresses[0]);
        this.web3.eth.defaultAccount = userAddresses[0];
        this.notificationsService.notify({
          title: 'Account Changed',
          icon: 'alarm',
          text: 'Please verify this account is connected to the application.',
          date: new Date()
        });
      });
    } catch (error) {
      this.notificationsService.notify({
        title: 'Login Error',
        icon: 'alarm',
        text: 'There was an error logging you in.',
        date: new Date()
      });
    }
  }

  requestAccounts(): void {
    this.web3.eth.requestAccounts().then(userAddresses => {
      this.web3.eth.defaultAccount = userAddresses[0];
      this.user.address.next(userAddresses[0]);
      this.notificationsService.notify({
        title: 'Logged In',
        icon: 'alarm',
        text: 'You have successfully logged in.',
        date: new Date()
      });
    });
  }

  async getPoolTokenContractInfo(poolId: number): Promise<any> {
    if (this.poolInfo[poolId].token.contract === undefined || this.poolInfo[poolId].token.address.getValue() === '') {
      return;
    }
    await this.getUserBalance(poolId);
    await this.getPoolTokenName(poolId);
    await this.getPoolTokenDecimals(poolId);
    await this.getPoolTokenSymbol(poolId);
    await this.getPoolTokenApproval(poolId);
    if (this.apyCalculator.stableCoin.pairBalance.getValue() !== 0 && this.apyCalculator.networkCurrency.pairBalanceStableCoin.getValue() !== 0) {
      await this.getAllPoolWeights();
      await this.getPoolTokenPrices(poolId);
      await this.getPoolTokenCellarBalance(poolId);
    }
  }

  async getUserBalance(poolId: number): Promise<any> {
    return await this.poolInfo[poolId].token.contract.methods.balanceOf(this.user.address.getValue()).call().then(async result => {
      this.poolInfo[poolId].userBalance.next(result);
    });
  }

  async getPoolTokenName(poolId: number): Promise<any> {
    return await this.poolInfo[poolId].token.contract.methods.name().call().then(result => {
      this.poolInfo[poolId].token.name.next(result);
    });
  }

  async getPoolTokenDecimals(poolId: number): Promise<any> {
    return await this.poolInfo[poolId].token.contract.methods.decimals().call().then(result => {
      this.poolInfo[poolId].token.decimals.next(result);
    });
  }

  async getPoolTokenSymbol(poolId: number): Promise<any> {
    return await this.poolInfo[poolId].token.contract.methods.symbol().call().then(result => {
      this.poolInfo[poolId].token.symbol.next(result);
    });
  }

  async getPoolTokenApproval(poolId: number): Promise<any> {
    return await this.poolInfo[poolId].token.contract.methods.allowance(this.user.address.getValue(), this.grapesCellarContractAddress).call().then(result => {
      this.poolInfo[poolId].tokenApproval.next(result);
    });
  }

  async getPoolTokenPrices(poolId: number): Promise<any> {
    return await this.getPoolTokenNetworkCurrencyPairAddress(poolId).then(async afterPoolTokenNetworkCurrencyPairAddress => {
      await this.getPoolTokenPriceInNetworkCurrency(poolId, this.poolInfo[poolId].pairInfo.pairAddress.getValue()).then(async afterPoolTokenPriceInNetworkCurrency => {
        await this.getPoolTokenPriceInUSD(poolId).then(async afterPoolTokenPriceInUSD => {
        });
      });
    });
  }

  async getPoolTokenCellarBalance(poolId: number): Promise<any> {
    return await this.poolInfo[poolId].token.contract.methods.balanceOf(this.grapesCellarContractAddress).call().then(async result => {
      await this.poolInfo[poolId].poolTokenBalance.next(result);
      await this.poolInfo[poolId].tvl.next((this.poolInfo[poolId].poolTokenBalance.getValue() / 1e18) * (this.poolInfo[poolId].priceInUSD.getValue() / 1e18));
      if (this.poolInfo[poolId].tvl.getValue() === 0) {
        await this.poolInfo[poolId].tvl.next(1);
      }
      this.poolInfo[poolId].ape.next(

        ((this.poolInfo[poolId].poolInfo.getValue().allocPoint / this.cellar.totalPoolWeights.getValue())
        *
        ((this.cellar.rewardsInThisEpoch.getValue() / 1e18) * this.apyCalculator.grapes.priceInUSD.getValue()))
        /
        this.poolInfo[poolId].tvl.getValue()
      );
    });
  }

  async getPoolTokenNetworkCurrencyPairAddress(poolId: number): Promise<any> {
    return await this.exchangeFactoryContract.methods.getPair(this.poolInfo[poolId].token.address.getValue(), this.wrappedNetworkCurrencyContractAddress).call().then(async result => {
      await this.poolInfo[poolId].pairInfo.pairAddress.next(result);
    });
  }

  async getPoolTokenPriceInNetworkCurrency(poolId: number, pairAddress: string): Promise<any> {
    return await this.poolInfo[poolId].token.contract.methods.balanceOf(pairAddress).call().then(async resultToken => {
      await this.poolInfo[poolId].pairInfo.tokenPairBalance.next(resultToken);
      await this.wrappedNetworkCurrencyContract.methods.balanceOf(pairAddress).call().then(async resultNetwork => {
        await this.poolInfo[poolId].pairInfo.networkCurrencyPairBalance.next(resultNetwork);
        await this.poolInfo[poolId].priceInNetworkCurrency.next(this.poolInfo[poolId].pairInfo.tokenPairBalance.getValue() / this.poolInfo[poolId].pairInfo.networkCurrencyPairBalance.getValue());
      });
    });
  }

  async getPoolTokenPriceInUSD(poolId: number): Promise<any> {
    return await this.poolInfo[poolId].priceInUSD.next(this.poolInfo[poolId].priceInNetworkCurrency.getValue() * this.apyCalculator.networkCurrency.price.getValue());
  }

  async approve(poolId: number): Promise<any> {
    this.poolInfo[poolId].depositButton.next(4);
    return await this.poolInfo[poolId].token.contract.methods.approve(this.grapesCellarContractAddress, BigInt(999999999999999999999999)).send({ from: this.user.address.getValue() })
      .on('transactionHash', (transactionHash) => {
      })
      .on('confirmation', (confirmation) => {
        if (confirmation) {
        }
      }).on('receipt', (receipt) => {
        this.poolInfo[poolId].depositButton.next(5);
        this.notificationsService.notify({
          title: 'Approve Successful',
          icon: 'alarm',
          text: 'You have successfully approved your tokens to the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
          date: new Date()
        });
        setTimeout(() => {
          this.poolInfo[poolId].depositButton.next(1);
        }, 2500);
      })
      .on('error', (error) => {
        this.poolInfo[poolId].depositButton.next(3);
        this.notificationsService.notify({
          title: 'Approve Error',
          icon: 'alarm',
          text: 'There was an error approving your tokens to the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
          date: new Date()
        });
        setTimeout(() => {
          this.poolInfo[poolId].depositButton.next(0);
        }, 2500);
      });
  }
  async deposit(poolId: number, amount: number): Promise<any> {
    this.poolInfo[poolId].depositButton.next(1);
    if (BigInt(this.poolInfo[poolId].tokenApproval.getValue()) < 1) {
      return await this.approve(poolId).then(async result => {
        await this.grapesCellarContract.methods.deposit(
          poolId,
          BigInt(Math.floor(amount * 1e18))
        )
          .send({ from: this.user.address.getValue() })
          .on('transactionHash', (transactionHash) => {
          })
          .on('confirmation', (confirmation) => {
            if (confirmation) {
              this.poolInfo[poolId].depositButton.next(2);
              setTimeout(() => {
                this.poolInfo[poolId].depositButton.next(0);
              }, 2500);
            }
          }).on('receipt', (receipt) => {
          })
          .on('error', (error) => {
            this.poolInfo[poolId].depositButton.next(3);
            setTimeout(() => {
              this.poolInfo[poolId].depositButton.next(0);
            }, 2500);
          });
      });
    } else {
      return await this.grapesCellarContract.methods.deposit(
        poolId,
        BigInt(Math.floor(amount * 1e18))
      )
        .send({ from: this.user.address.getValue() })
        .on('transactionHash', (transactionHash) => {
        })
        .on('confirmation', (confirmation) => {
          if (confirmation) {
          }
        }).on('receipt', (receipt) => {
          this.poolInfo[poolId].depositButton.next(2);
          this.notificationsService.notify({
            title: 'Pool Deposit',
            icon: 'alarm',
            text: 'You have successfully deposited to the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
            date: new Date()
          });
          setTimeout(() => {
            this.poolInfo[poolId].depositButton.next(0);
          }, 2500);
        })
        .on('error', (error) => {
          this.poolInfo[poolId].depositButton.next(3);
          this.notificationsService.notify({
            title: 'Deposit Error',
            icon: 'alarm',
            text: 'There was an error depositing to the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
            date: new Date()
          });
          setTimeout(() => {
            this.poolInfo[poolId].depositButton.next(0);
          }, 2500);
        });
    }
  }

  async withdraw(poolId: number, amount: number): Promise<any> {
    this.poolInfo[poolId].withdrawButton.next(1);
    return await this.grapesCellarContract.methods.withdraw(
      poolId,
      BigInt(Math.floor(amount * 1e18))
    ).send({ from: this.user.address.getValue() })
      .on('transactionHash', (transactionHash) => {
      })
      .on('confirmation', (confirmation) => {
        if (confirmation) {
        }
      }).on('receipt', (receipt) => {
        this.poolInfo[poolId].withdrawButton.next(2);
        this.notificationsService.notify({
          title: 'Pool Withdraw',
          icon: 'alarm',
          text: 'You have successfully withdrawn from the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
          date: new Date()
        });
        setTimeout(() => {
          this.poolInfo[poolId].withdrawButton.next(0);
        }, 2500);
      })
      .on('error', (error) => {
        this.poolInfo[poolId].withdrawButton.next(3);
        this.notificationsService.notify({
          title: 'Withdraw Error',
          icon: 'alarm',
          text: 'There was an error withdrawing from the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
          date: new Date()
        });
        setTimeout(() => {
          this.poolInfo[poolId].withdrawButton.next(0);
        }, 2500);
      });
  }

  async claim(poolId: number): Promise<any> {
    this.poolInfo[poolId].claimButton.next(1);
    return await this.grapesCellarContract.methods.withdraw(
      poolId,
      0
    )
      .send({ from: this.user.address.getValue() })
      .on('transactionHash', (transactionHash) => {
      })
      .on('confirmation', (confirmation) => {
        if (confirmation) {
        }
      }).on('receipt', (receipt) => {
        this.poolInfo[poolId].claimButton.next(2);
        this.notificationsService.notify({
          title: 'Pool Deposit',
          icon: 'alarm',
          text: 'You have successfully claimed from the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
          date: new Date()
        });
        setTimeout(() => {
          this.poolInfo[poolId].claimButton.next(0);
        }, 2500);
      })
      .on('error', (error) => {
        this.poolInfo[poolId].claimButton.next(3);
        this.notificationsService.notify({
          title: 'Claim Error',
          icon: 'alarm',
          text: 'There was an error claiming from the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
          date: new Date()
        });
        setTimeout(() => {
          this.poolInfo[poolId].claimButton.next(0);
        }, 2500);
      });
  }

  async getCumulativeRewardsSinceStart(): Promise<any> {
    return await this.grapesCellarContract.methods.cumulativeRewardsSinceStart().call().then(result => {
      this.cellar.cumulativeRewardsSinceStart.next(result);
    });
  }

  async getAverageFeesPerBlockSinceStart(): Promise<any> {
    return await this.grapesCellarContract.methods.averageFeesPerBlockSinceStart().call().then(result => {
      this.cellar.averageFeesPerBlockSinceStart.next(result);
    });
  }

  async getAverageFeesPerBlockEpoch(): Promise<any> {
    return await this.grapesCellarContract.methods.averageFeesPerBlockEpoch().call().then(result => {
      this.cellar.averageFeesPerBlockEpoch.next(result);
    });
  }

  async getRewardsInThisEpoch(): Promise<any> {
    return await this.grapesCellarContract.methods.rewardsInThisEpoch().call().then(result => {
      this.cellar.rewardsInThisEpoch.next(result);
    });
  }

  async getEpoch(): Promise<any> {
    return await this.grapesCellarContract.methods.epoch().call().then(result => {
      this.cellar.epoch.next(result);
    });
  }



  async getUserInfo(): Promise<any> {
    this.getUserBNBBalance();
    this.getUserGrapesBalance();
  }

  async getAllPoolInfo(): Promise<any> {
    await this.getCumulativeRewardsSinceStart();
    await this.getAverageFeesPerBlockSinceStart();
    await this.getAverageFeesPerBlockEpoch();
    await this.getRewardsInThisEpoch();
    return await this.poolInfo.forEach(async (element, index) => {
      await this.getAllUserPoolInfo(index);
    });
  }

  async getPoolLength(): Promise<any> {
    return await this.grapesCellarContract.methods.poolLength().call().then(result => {
      this.cellar.length.next(result);
    });
  }

  async getAllUserPoolInfo(poolId: number): Promise<any> {
    if (this.user.address.getValue() === '') {
      return;
    }
    this.getUserPoolInfo(poolId);
    this.getPendingGrapes(poolId);
    this.getPoolInfo(poolId);
  }

  async getUserPoolInfo(poolId: number): Promise<any> {
    return await this.grapesCellarContract.methods.userInfo(poolId, this.user.address.getValue()).call().then(result => {
      this.poolInfo[poolId].userPoolInfo.next(result);
    });
  }

  async getPendingGrapes(poolId: number): Promise<any> {
    return await this.grapesCellarContract.methods.pendingGRAPES(poolId, this.user.address.getValue()).call().then(result => {
      this.poolInfo[poolId].pendingGrapes.next(result);
    });
  }

  async getPoolInfo(poolId: number): Promise<any> {
    return await this.grapesCellarContract.methods.poolInfo(poolId).call().then(result => {
      this.poolInfo[poolId].poolInfo.next(result);
    });
  }

  async getAllPoolWeights(): Promise<any> {
    this.cellar.totalPoolWeights.next(0);
    let temp = Number(0);
    return await this.poolInfo.forEach((pool, index) => {
      temp += Number(pool.poolInfo.getValue().allocPoint);
      this.cellar.totalPoolWeights.next(temp);
    });
  }

  // LGE VALUES
  async getLGEInfo(): Promise<any> {
    this.getBNBContributed();
    this.getLPTperBNBUnit();
    this.getTotalBNBContributed();
    this.getLGEEnd();
    this.getLGEStart();
    this.getLGECalculatedEnd();
    this.getLGEDuration();
    this.getIndividualCap();
    this.getInitialSupply();
    this.getTotalLPTMinted();
  }
  async getBNBContributed(): Promise<any> {
    return await this.grapesContract.methods.BNBContributed(this.user.address.getValue()).call().then(async result => {
      this.lge.user.contribution.next(result);
    });
  }
  async getLPTperBNBUnit(): Promise<any> {
    return await this.grapesContract.methods.LPTperBNBUnit().call().then(async result => {
      this.lge.LPTperBNBUnit.next(result);
    });
  }
  async getLGEEnd(): Promise<any> {
    return await this.grapesContract.methods.LGECompleted_Timestamp().call().then(async result => {
      this.lge.ended.next(result);
    });
  }
  async getLGEStart(): Promise<any> {
    return await this.grapesContract.methods.contractStart_Timestamp().call().then(async result => {
      this.lge.started.next(result);
    });
  }
  async getLGECalculatedEnd(): Promise<any> {
    return await this.grapesContract.methods.contractStart_Timestamp().call().then(async result => {
      this.grapesContract.methods.contributionPhase().call().then(async resultZ => {
        this.lge.calculatedEnd.next(Number(result) + Number(resultZ));
      });
    });
  }
  async getLGEDuration(): Promise<any> {
    return await this.grapesContract.methods.contributionPhase().call().then(async result => {
      this.lge.duration.next(result);
    });
  }
  async getIndividualCap(): Promise<any> {
    return await this.grapesContract.methods.individualCap().call().then(async result => {
      this.lge.individualCap.next(result);
    });
  }
  async getInitialSupply(): Promise<any> {
    return await this.grapesContract.methods.initialSupply().call().then(async result => {
      this.lge.initialSupply.next(result);
    });
  }
  async getTotalLPTMinted(): Promise<any> {
    return await this.grapesContract.methods.totalLPTTokensMinted().call().then(async result => {
      this.lge.totalLPTMinted.next(result);
    });
  }
  async getTotalBNBContributed(): Promise<any> {
    return await this.grapesContract.methods.totalBNBContributed().call().then(async result => {
      this.lge.totalBNBContributed.next(result);
    });
  }

  async createLiquidity(): Promise<any> {
    this.lge.createLiquidityButton.next(1);
    return await this.grapesContract.methods.POOL_CreateLiquidity(
    ).send({ from: this.user.address.getValue() })
      .on('transactionHash', (transactionHash) => {
      })
      .on('confirmation', (confirmation) => {
        if (confirmation) {
        }
      }).on('receipt', (receipt) => {
        this.lge.createLiquidityButton.next(2);
        this.notificationsService.notify({
          title: 'LGE Liquidity Created',
          icon: 'alarm',
          text: 'Congratulations! You have successfully launched the project.',
          date: new Date()
        });
        setTimeout(() => {
          this.lge.createLiquidityButton.next(0);
        }, 2500);
      })
      .on('error', (error) => {
        this.lge.createLiquidityButton.next(3);
        this.notificationsService.notify({
          title: 'LGE Liquidity Error',
          icon: 'alarm',
          text: 'There was an error. Someone may have launched before you, or the LGE has not ended.',
          date: new Date()
        });
        setTimeout(() => {
          this.lge.createLiquidityButton.next(0);
        }, 2500);
      });
  }

  async claimLGE(): Promise<any> {
    this.lge.claimButton.next(1);
    return await this.grapesContract.methods.USER_ClaimWrappedLiquidity(
    ).send({ from: this.user.address.getValue() })
      .on('transactionHash', (transactionHash) => {
      })
      .on('confirmation', (confirmation) => {
        if (confirmation) {
        }
      }).on('receipt', (receipt) => {
        this.lge.claimButton.next(2);
        this.notificationsService.notify({
          title: 'LGE Claim',
          icon: 'alarm',
          text: 'Your LGE claim has been proccessed successfully.',
          date: new Date()
        });
        setTimeout(() => {
          this.lge.claimButton.next(0);
        }, 2500);
      })
      .on('error', (error) => {
        this.lge.claimButton.next(3);
        this.notificationsService.notify({
          title: 'LGE Error',
          icon: 'alarm',
          text: 'There was an error claiming your LGE contribution.',
          date: new Date()
        });
        setTimeout(() => {
          this.lge.claimButton.next(0);
        }, 2500);
      });
  }

  async depositLGE(amount: number, tos: boolean): Promise<any> {
    this.lge.depositButton.next(1);
    return await this.grapesContract.methods.USER_PledgeLiquidity(
      tos
    ).send({
      from: this.user.address.getValue(),
      to: this.grapesContract,
      value: Math.floor(amount * 1e18)
    })
      .on('transactionHash', (transactionHash) => {
      })
      .on('confirmation', (confirmation) => {
        if (confirmation) {
        }
      }).on('receipt', (receipt) => {
        this.lge.depositButton.next(2);
        this.notificationsService.notify({
          title: 'LGE Deposit',
          icon: 'alarm',
          text: 'Your LGE deposit has been received successfully.',
          date: new Date()
        });
        setTimeout(() => {
          this.lge.depositButton.next(0);
        }, 2500);
      })
      .on('error', (error) => {
        this.lge.depositButton.next(2);
        this.notificationsService.notify({
          title: 'LGE Error',
          icon: 'alarm',
          text: 'There was an error receiving your LGE deposit.',
          date: new Date()
        });
        this.lge.depositButton.next(3);
        setTimeout(() => {
          this.lge.depositButton.next(0);
        }, 2500);
      });
  }

  async setContracts(): Promise<any> {
    return await this.setGrapesContract().then(async setGrapesResult => {
      await this.setCellarContract().then(async setCellarResult => {
        await this.getPoolLength().then(async getPoolLengthResult => {
          await this.getAllPoolInfo().then(async getAllPoolInfoResult => {
            await this.setPoolTokenContracts().then(async setPoolTokenContractsResult => {
              await this.getLPContracts().then(async getLPResult => {
                await this.setLPContracts().then(async setLPResult => {
                  await this.setSecondaryContracts().then(setSecondaryResult => {
                    if (this.exitInterval === undefined) {
                      this.exitInterval = setInterval(() => {
                        this.getInfo();
                      }, 5000);
                    }
                  });
                });
              });
            });
          });
        });
      });
    });
  }

  stopGatheringInfo(): void {
    clearInterval(this.exitInterval);
    this.exitInterval = undefined;
  }

  async setPoolTokenContracts(): Promise<any> {
    this.poolInfo.length = this.cellar.length.getValue();
    for (let index = 0; index < this.poolInfo.length; index++) {
      this.poolInfo[index] = {
        token: {
          name: new BehaviorSubject(''),
          address: new BehaviorSubject(''),
          contract: undefined,
          decimals: new BehaviorSubject(0),
          symbol: new BehaviorSubject(''),
        },
        ape: new BehaviorSubject(30),
        tvl: new BehaviorSubject(4200000),
        poolTokenBalance: new BehaviorSubject(0),
        priceInUSD: new BehaviorSubject(0),
        priceInNetworkCurrency: new BehaviorSubject(0),
        claimButton: new BehaviorSubject(0),
        depositButton: new BehaviorSubject(0),
        withdrawButton: new BehaviorSubject(0),
        tokenApproval: new BehaviorSubject(0),
        tokenRewards: new BehaviorSubject(0),
        pendingGrapes: new BehaviorSubject(0),
        userPoolInfo: new BehaviorSubject({
          amount: 0,
          rewardPaid: 0
        }),
        poolInfo: new BehaviorSubject({
          poolName: '',
          stakedToken: '',
          allocPoint: 0,
          accGRAPESPerShare: 0,
          VIPpool: false,
          partialWithdraw: false
        }),
        pairInfo: {
          pairAddress: new BehaviorSubject(''),
          networkCurrencyPairBalance: new BehaviorSubject(0),
          tokenPairBalance: new BehaviorSubject(0)
        },
        userBalance: new BehaviorSubject(0)
      };
    }
  }

  async setContract(poolId: number): Promise<any> {
    if (this.poolInfo[poolId].poolInfo.getValue().stakedToken === this.grapesContractAddress) {
      this.token.poolId.next(poolId);
    }
    if (this.poolInfo[poolId].poolInfo.getValue().stakedToken === this.liquidityToken.wLPAddress.getValue()) {
      this.liquidityToken.wLPPoolId.next(poolId);
    }
    if (this.poolInfo[poolId].poolInfo.getValue().stakedToken === this.liquidityToken.lpAddress.getValue()) {
      this.liquidityToken.lpPoolId.next(poolId);
    }
    await this.poolInfo[poolId].token.address.next(this.poolInfo[poolId].poolInfo.getValue().stakedToken);
    return this.poolInfo[poolId].token.contract = await new this.web3.eth.Contract(grapesAbi, this.poolInfo[poolId].poolInfo.getValue().stakedToken);
  }

  async getLPContracts(): Promise<any> {
    await this.getLPContract();
    return await this.getWLPContract();
  }

  async setLPContracts(): Promise<any> {
    await this.setLPContract();
    return await this.setWLPContract();
  }
  async setSecondaryContracts(): Promise<any> {
    await this.setStableCoinContract();
    await this.setWrappedNetworkCurrencyContract();
    return await this.setExchangeFactoryContract();
  }

  async setGrapesContract(): Promise<any> {
    return this.grapesContract = await new this.web3.eth.Contract(grapesAbi, this.grapesContractAddress);
  }
  async setStableCoinContract(): Promise<any> {
    return this.stableCoinContract = await new this.web3.eth.Contract(stableCoinAbi, this.stableCoinContractAddress);
  }
  async setWrappedNetworkCurrencyContract(): Promise<any> {
    return this.wrappedNetworkCurrencyContract = await new this.web3.eth.Contract(wrappedNetworkCurrencyAbi, this.wrappedNetworkCurrencyContractAddress);
  }
  async setExchangeFactoryContract(): Promise<any> {
    return this.exchangeFactoryContract = await new this.web3.eth.Contract(exchangeAbi, this.exchangeFactoryContractAddress);
  }

  async setCellarContract(): Promise<any> {
    return this.grapesCellarContract = await new this.web3.eth.Contract(grapesCellarAbi, this.grapesCellarContractAddress);
  }

  async getLPContract(): Promise<any> {
    return await this.grapesContract.methods.viewLPT().call().then(result => {
      this.liquidityToken.lpAddress.next(result);
    });
  }

  async setLPContract(): Promise<any> {
    return this.liquidityToken.lpContract = await new this.web3.eth.Contract(grapesLPAbi, this.liquidityToken.lpAddress.getValue());
  }

  async getWLPContract(): Promise<any> {
    return await this.grapesContract.methods.viewWrappedLPT().call().then(result => {
      this.liquidityToken.wLPAddress.next(result);
    });
  }

  async setWLPContract(): Promise<any> {
    return this.liquidityToken.wLPContract = await new this.web3.eth.Contract(grapesWLPAbi, this.liquidityToken.wLPAddress.getValue());
  }

  // ================== //
  // USER BALANCES      //
  // ================== //
  async getUserBNBBalance(): Promise<any> {
      return await this.web3.eth.getBalance(this.user.address.getValue()).then(async result => {
        this.user.bnbBalance.next(Number(result));
      });
  }

  async getUserGrapesBalance(): Promise<any> {
      return await this.grapesContract.methods.balanceOf(this.user.address.getValue()).call().then(async result => {
        this.user.grapesBalance.next(result);
      });
  }

  // ================== //
  // TOKEN INFO         //
  // ================== //

  async getTokenInfo(): Promise<any> {
    this.getTokenName();
    this.getTokenSymbol();
    this.getTokenDecimals();
    this.getTokenTotalSupply();
    this.getTokenBuyFee();
    this.getTokenSellFee();
  }
  async getTokenName(): Promise<any> {
    return await this.grapesContract.methods.name().call().then(async result => {
      this.token.name.next(result);
    });
  }
  async getTokenSymbol(): Promise<any> {
    return await this.grapesContract.methods.symbol().call().then(async result => {
      this.token.symbol.next(result);
    });
  }
  async getTokenDecimals(): Promise<any> {
    return await this.grapesContract.methods.decimals().call().then(async result => {
      this.token.decimals.next(result);
    });
  }
  async getTokenTotalSupply(): Promise<any> {
    return await this.grapesContract.methods.totalSupply().call().then(async result => {
      this.token.totalSupply.next(result);
    });
  }
  async getTokenBuyFee(): Promise<any> {
    return await this.grapesContract.methods.buyFee().call().then(async result => {
      this.token.buyFee.next(result);
    });
  }
  async getTokenSellFee(): Promise<any> {
    return await this.grapesContract.methods.sellFee().call().then(async result => {
      this.token.sellFee.next(result);
    });
  }
  async getTokenCirculatingSupply(): Promise<any> {
    return await this.token.circulatingSupply.next((this.token.totalSupply.getValue() - this.apyCalculator.networkCurrency.pairBalanceGrapes.getValue()) - this.poolInfo[this.token.poolId.getValue()].poolTokenBalance.getValue());
  }

  // ================== //
  // LP TOKENS INFO   //
  // ================== //

  // THIS IS CALLED LATER DUE TO THE LP TOKENS' INFORMATION BEING PULLED FROM TOKEN CONTRACT ITSELF
  async getLPTokensInfo(): Promise<any> {
    this.getUserLPTokenBalances();
    this.getLPTokensTotalSupplies();
    this.getLPTokensDecimals();
    this.getLPTokensNames();
    this.getLPTokensSymbols();
  }

  async getLPTokensTotalSupplies(): Promise<any> {
    this.getLPTokenTotalSupply();
    this.getWLPTokenTotalSupply();
  }

  async getLPTokensDecimals(): Promise<any> {
    this.getLPTokenDecimals();
    this.getWLPTokenDecimals();
  }

  async getLPTokensNames(): Promise<any> {
    this.getLPTokenName();
    this.getWLPTokenName();
  }

  async getLPTokensSymbols(): Promise<any> {
    this.getLPTokenSymbol();
    this.getWLPTokenSymbol();
  }

  async getUserLPTokenBalances(): Promise<any> {
    this.getUserLPBalance();
    this.getUserWLPBalance();
  }

  async getUserLPBalance(): Promise<any> {
    return await this.liquidityToken.lpContract.methods.balanceOf(this.user.address.getValue()).call().then(async result => {
      this.user.lpBalance.next(result);
    });
  }
  async getLPTokenName(): Promise<any> {
    return await this.liquidityToken.lpContract.methods.name().call().then(async result => {
      this.liquidityToken.lpName.next(result);
    });
  }
  async getLPTokenSymbol(): Promise<any> {
    return await this.liquidityToken.lpContract.methods.symbol().call().then(async result => {
      this.liquidityToken.lpSymbol.next(result);
    });
  }
  async getLPTokenDecimals(): Promise<any> {
    return await this.liquidityToken.lpContract.methods.decimals().call().then(async result => {
      this.liquidityToken.lpDecimals.next(result);
    });
  }
  async getLPTokenTotalSupply(): Promise<any> {
    return await this.liquidityToken.lpContract.methods.totalSupply().call().then(async result => {
      this.liquidityToken.lpTotalSupply.next(result);
    });
  }

  async getUserWLPBalance(): Promise<any> {
    return await this.liquidityToken.wLPContract.methods.balanceOf(this.user.address.getValue()).call().then(async result => {
      this.user.wLPBalance.next(result);
    });
  }
  async getWLPTokenName(): Promise<any> {
    return await this.liquidityToken.wLPContract.methods.name().call().then(async result => {
      this.liquidityToken.wLPName.next(result);
    });
  }
  async getWLPTokenSymbol(): Promise<any> {
    return await this.liquidityToken.wLPContract.methods.symbol().call().then(async result => {
      this.liquidityToken.wLPSymbol.next(result);
    });
  }
  async getWLPTokenDecimals(): Promise<any> {
    return await this.liquidityToken.wLPContract.methods.decimals().call().then(async result => {
      this.liquidityToken.wLPDecimals.next(result);
    });
  }
  async getWLPTokenTotalSupply(): Promise<any> {
    return await this.liquidityToken.wLPContract.methods.totalSupply().call().then(async result => {
      this.liquidityToken.wLPTotalSupply.next(result);
    });
  }

  async getWrapperApprovals(): Promise<any> {
    this.getWrapperWrapApproval();
    this.getWrapperUnwrapApproval();
  }
  async getWrapperWrapApproval(): Promise<any> {
    return await this.liquidityToken.lpContract.methods.allowance(this.user.address.getValue(), this.liquidityToken.wLPAddress.getValue()).call().then(result => {
      this.wrapper.wrapAllowance.next(result);
    });
  }

  async getWrapperUnwrapApproval(): Promise<any> {
    return await this.liquidityToken.wLPContract.methods.allowance(this.user.address.getValue(), this.liquidityToken.wLPAddress.getValue()).call().then(result => {
      this.wrapper.unwrapAllowance.next(result);
    });
  }

  async approveWrapperWrap(): Promise<any> {
    this.wrapper.wrapButton.next(4);
    return await this.liquidityToken.lpContract.methods.approve(this.liquidityToken.wLPAddress.getValue(), BigInt(999999999999999999999999)).send({ from: this.user.address.getValue() })
      .on('transactionHash', (transactionHash) => {
      })
      .on('confirmation', (confirmation) => {
        if (confirmation) {
        }
      }).on('receipt', (receipt) => {
        this.wrapper.wrapButton.next(5);
        this.notificationsService.notify({
          title: 'Approve Successful',
          icon: 'alarm',
          text: 'You have successfully approved your LP okens to the wrapper.',
          date: new Date()
        });
        setTimeout(() => {
          this.wrapper.wrapButton.next(1);
        }, 2500);
      })
      .on('error', (error) => {
        this.wrapper.wrapButton.next(3);
        this.notificationsService.notify({
          title: 'Approve Error',
          icon: 'alarm',
          text: 'There was an error approving your LP tokens to the wrapper.',
          date: new Date()
        });
        setTimeout(() => {
          this.wrapper.wrapButton.next(0);
        }, 2500);
      });
  }
  async approveWrapperUnwrap(): Promise<any> {
    this.wrapper.unwrapButton.next(4);
    return await this.liquidityToken.wLPContract.methods.approve(this.liquidityToken.wLPAddress.getValue(), BigInt(999999999999999999999999)).send({ from: this.user.address.getValue() })
      .on('transactionHash', (transactionHash) => {
      })
      .on('confirmation', (confirmation) => {
        if (confirmation) {
        }
      }).on('receipt', (receipt) => {
        this.wrapper.unwrapButton.next(5);
        this.notificationsService.notify({
          title: 'Approve Successful',
          icon: 'alarm',
          text: 'You have successfully approved your wrapped LP tokens to the wrapper.',
          date: new Date()
        });
        setTimeout(() => {
          this.wrapper.unwrapButton.next(1);
        }, 2500);
      })
      .on('error', (error) => {
        this.wrapper.unwrapButton.next(3);
        this.notificationsService.notify({
          title: 'Approve Error',
          icon: 'alarm',
          text: 'There was an error approving your wrapped LP tokens to the wrapper.',
          date: new Date()
        });
        setTimeout(() => {
          this.wrapper.unwrapButton.next(0);
        }, 2500);
      });
  }

  async wrapFlip(amount: number): Promise<any> {
    this.wrapper.wrapButton.next(1);
    if (BigInt(this.wrapper.wrapAllowance.getValue()) < 1) {
      return await this.approveWrapperWrap().then(async result => {
        await this.liquidityToken.wLPContract.methods.wrapLPT(
          BigInt(Math.floor(amount * 1e18))
        ).send({
          from: this.user.address.getValue(),
        })
          .on('transactionHash', (transactionHash) => {
          })
          .on('confirmation', (confirmation) => {
            if (confirmation) {
            }
          }).on('receipt', (receipt) => {
            this.wrapper.wrapButton.next(2);
            this.notificationsService.notify({
              title: 'Wrap Successful',
              icon: 'alarm',
              text: 'Your LP tokens have been wrapped successfully.',
              date: new Date()
            });
            setTimeout(() => {
              this.wrapper.wrapButton.next(0);
            }, 2500);
          })
          .on('error', (error) => {
            this.wrapper.wrapButton.next(2);
            this.notificationsService.notify({
              title: 'Wrap Error',
              icon: 'alarm',
              text: 'There was an error wrapping your LP tokens.',
              date: new Date()
            });
          });
      });
    } else {
    return await this.liquidityToken.wLPContract.methods.wrapLPT(
      BigInt(Math.floor(amount * 1e18))
    ).send({
      from: this.user.address.getValue(),
    })
      .on('transactionHash', (transactionHash) => {
      })
      .on('confirmation', (confirmation) => {
        if (confirmation) {
        }
      }).on('receipt', (receipt) => {
        this.wrapper.wrapButton.next(2);
        this.notificationsService.notify({
          title: 'Wrap Successful',
          icon: 'alarm',
          text: 'Your LP tokens have been wrapped successfully.',
          date: new Date()
        });
        setTimeout(() => {
          this.wrapper.wrapButton.next(0);
        }, 2500);
      })
      .on('error', (error) => {
        this.wrapper.wrapButton.next(2);
        this.notificationsService.notify({
          title: 'Wrap Error',
          icon: 'alarm',
          text: 'There was an error wrapping your LP tokens.',
          date: new Date()
        });
        this.wrapper.wrapButton.next(3);
        setTimeout(() => {
          this.wrapper.wrapButton.next(0);
        }, 2500);
      });
    }
  }

  async unwrapFlip(amount: number): Promise<any> {
    this.wrapper.unwrapButton.next(1);
    if (BigInt(this.wrapper.unwrapAllowance.getValue()) < 1) {
      return await this.approveWrapperUnwrap().then(async result => {
        await this.liquidityToken.wLPContract.methods.unWrapLPT(
          BigInt(Math.floor(amount * 1e18))
        ).send({
          from: this.user.address.getValue(),
        })
          .on('transactionHash', (transactionHash) => {
          })
          .on('confirmation', (confirmation) => {
            if (confirmation) {
            }
          }).on('receipt', (receipt) => {
            this.wrapper.unwrapButton.next(2);
            this.notificationsService.notify({
              title: 'Unwrap Successful',
              icon: 'alarm',
              text: 'Your LP tokens have been unwrapped successfully.',
              date: new Date()
            });
            setTimeout(() => {
              this.wrapper.unwrapButton.next(0);
            }, 2500);
          })
          .on('error', (error) => {
            this.wrapper.unwrapButton.next(2);
            this.notificationsService.notify({
              title: 'Unwrap Error',
              icon: 'alarm',
              text: 'There was an error unwrapping your LP tokens.',
              date: new Date()
            });
            this.wrapper.unwrapButton.next(3);
            setTimeout(() => {
              this.wrapper.unwrapButton.next(0);
            }, 2500);
          });
      });
    } else {
    return await this.liquidityToken.wLPContract.methods.unWrapLPT(
      BigInt(Math.floor(amount * 1e18))
    ).send({
      from: this.user.address.getValue(),
    })
      .on('transactionHash', (transactionHash) => {
      })
      .on('confirmation', (confirmation) => {
        if (confirmation) {
        }
      }).on('receipt', (receipt) => {
        this.wrapper.unwrapButton.next(2);
        this.notificationsService.notify({
          title: 'Unwrap Successful',
          icon: 'alarm',
          text: 'Your LP tokens have been unwrapped successfully.',
          date: new Date()
        });
        setTimeout(() => {
          this.wrapper.unwrapButton.next(0);
        }, 2500);
      })
      .on('error', (error) => {
        this.wrapper.unwrapButton.next(2);
        this.notificationsService.notify({
          title: 'Unwrap Error',
          icon: 'alarm',
          text: 'There was an error unwrapping your LP tokens.',
          date: new Date()
        });
        this.wrapper.unwrapButton.next(3);
        setTimeout(() => {
          this.wrapper.unwrapButton.next(0);
        }, 2500);
      });
    }
  }
}
