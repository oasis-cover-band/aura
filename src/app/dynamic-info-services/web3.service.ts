import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { BehaviorSubject } from 'rxjs';
import { NotificationsService } from './notifications.service';
import { ProjectService } from '../static-info-services/project.service';
const auraAbi = require('../../assets/abi/auraabi.json');
const stableCoinAbi = require('../../assets/abi/auraabi.json');
const wrappedNetworkCurrencyAbi = require('../../assets/abi/auraabi.json');
const auraLPAbi = require('../../assets/abi/auraabi.json');
const auraWLPAbi = require('../../assets/abi/aurawrapabi.json');
const auraVaultAbi = require('../../assets/abi/auravaultabi.json');
const exchangeAbi = require('../../assets/abi/exchangeabi.json');
declare const window: any;
// tslint:disable:max-line-length

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  web3: Web3;

  auraContract;
  auraContractAddress = this.projectService.project.contracts.tokenAddress;

  auraVaultContractAddress = this.projectService.project.contracts.vaultAddress;
  auraVaultContract;

  stableCoinContractAddress = this.projectService.project.contracts.stableCoinAddress;
  stableCoinContract;

  exchangeFactoryContractAddress = this.projectService.project.contracts.exchangeFactoryAddress;
  exchangeFactoryContract;

  wrappedNetworkCurrencyContractAddress = this.projectService.project.contracts.wrappedNetworkCurrencyAddress;
  wrappedNetworkCurrencyContract;

  stableCoinWrappedNetworkCurrencyPairAddress = new BehaviorSubject('');
  auraWrappedNetworkCurrencyPairAddress = new BehaviorSubject('');

  // USERVARS
  user = {
    address: new BehaviorSubject(''),
    auraBalance: new BehaviorSubject(0),
    bnbBalance: new BehaviorSubject(0),
    lpBalance: new BehaviorSubject(0),
    wLPBalance: new BehaviorSubject(0),
  };
  token = {
    name: new BehaviorSubject(''),
    symbol: new BehaviorSubject(''),
    decimals: new BehaviorSubject(0),
    totalSupply: new BehaviorSubject(0),
    buyFee: new BehaviorSubject(0),
    sellFee: new BehaviorSubject(0),
  };
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
  };

  wrapper = {
    unwrapButton: new BehaviorSubject(0),
    wrapButton: new BehaviorSubject(0)
  };

  // LGE VARS
  lge = {
    user: {
      contribution: new BehaviorSubject(0)
    },
    started: new BehaviorSubject(0),
    ended: new BehaviorSubject(0),
    duration: new BehaviorSubject(0),
    calculatedEnd: new BehaviorSubject(0),
    FLIPperBNBUnit: new BehaviorSubject(0),
    individualCap: new BehaviorSubject(0),
    initialSupply: new BehaviorSubject(0),
    totalFLIPMinted: new BehaviorSubject(0),
    totalBNBContributed: new BehaviorSubject(0),
    FLIPBurnRatio: new BehaviorSubject(0),
    depositButton: new BehaviorSubject(0),
    claimButton: new BehaviorSubject(0),
    createLiquidityButton: new BehaviorSubject(0)
  };

  // VAULTVARS
  vault = {
    cumulativeRewardsSinceStart: new BehaviorSubject(0),
    averageFeesPerBlockSinceStart: new BehaviorSubject(0),
    averageFeesPerBlockEpoch: new BehaviorSubject(0),
    length: new BehaviorSubject(0)
  };

  // POOL INFO
  poolInfo = [
    {
      name: 'WBNB-AURA', // MAKE IT GET FROM token.name()
      token: {
        name: new BehaviorSubject(''),
        address: new BehaviorSubject(''),
        contract: undefined,
        decimals: new BehaviorSubject(0),
        symbol: new BehaviorSubject(''),
      },
      apy: new BehaviorSubject(30),
      priceInUSD: new BehaviorSubject(0),
      priceInNetworkCurrency: new BehaviorSubject(0),
      claimButton: new BehaviorSubject(0),
      depositButton: new BehaviorSubject(0),
      withdrawButton: new BehaviorSubject(0),
      tokenApproval: new BehaviorSubject(0),
      tokenRewards: new BehaviorSubject(0),
      pendingAura: new BehaviorSubject(0),
      userPoolInfo: new BehaviorSubject({
        amount: 0,
        rewardPaid: 0
      }),
      poolInfo: new BehaviorSubject({
        poolName: '',
        stakedToken: '',
        allocPoint: 0,
        accAURAPerShare: 0,
        VIPpool: false,
        withdrawable: false
      }),
      pairInfo: {
        pairAddress: new BehaviorSubject(''),
        networkCurrencyPairBalance: new BehaviorSubject(0),
        tokenPairBalance: new BehaviorSubject(0)
      },
      userBalance: new BehaviorSubject(0)
    }
  ];

  // BUTTONS
  sendButton: BehaviorSubject<any> = new BehaviorSubject(0);

  // STABLECOIN-NETWORK CURRENCY FOR APY CALCULATIONS
  apyCalculator = {
    aura: {
      priceInUSD: new BehaviorSubject(0),
      priceInNetworkCurrency: new BehaviorSubject(0),
      pairBalance: new BehaviorSubject(0)
    },
    networkCurrency: {
      price: new BehaviorSubject(0),
      pairBalanceAura: new BehaviorSubject(0),
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
    this.tryProvider().then(tryProviderResult => {
      this.connectWallet();
    });
  }

  async getInfo(): Promise<any> {
    this.getTokenInfo();
    this.getUserInfo();
    this.getLGEInfo();
    await this.getLPTokensInfo();
    // await this.getPrices();
    await this.getAllPoolInfo().then(afterGetAllPoolInfo => {
      this.poolInfo.forEach(async (element, index) => {
        await this.setContract(index).then(afterSetting => {
          this.getPoolTokenContractInfo(index);
        });
      });
    });
  }

  async getPrices(): Promise<any> {
    return await this.getAuraNetworkCurrencyPairAddress().then(async afterAuraNetworkCurrencyPairAddress => {
      await this.getStableCoinNetworkCurrencyPairAddress().then(async afterStableCoinNetworkCurrencyPairAddress => {
        await this.getNetworkCurrencyPrice().then(async afterNetworkCurrencyPrice => {
          await this.getAuraPriceInNetworkCurrency().then(async afterAuraPriceInNetworkCurrency => {
            await this.getAuraPriceInUSD().then(async afterAuraPriceInUSD => {
    
            });
          });
        });
      });
    });
  }

  async getAuraNetworkCurrencyPairAddress(): Promise<any> {
    return await this.exchangeFactoryContract.methods.getPair(this.auraContractAddress, this.wrappedNetworkCurrencyContractAddress).call().then(async result => {
      await this.auraWrappedNetworkCurrencyPairAddress.next(result);
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

  async getAuraPriceInNetworkCurrency(): Promise<any> {
    return await this.auraContract.methods.balanceOf(this.auraWrappedNetworkCurrencyPairAddress.getValue()).call().then(async resultAura => {
      await this.apyCalculator.aura.pairBalance.next(resultAura);
      await this.wrappedNetworkCurrencyContract.methods.balanceOf(this.auraWrappedNetworkCurrencyPairAddress.getValue()).call().then(async resultNetwork => {
        await this.apyCalculator.networkCurrency.pairBalanceAura.next(resultNetwork);
        await this.apyCalculator.aura.priceInNetworkCurrency.next(this.apyCalculator.aura.pairBalance.getValue() / this.apyCalculator.networkCurrency.pairBalanceAura.getValue());
      });
    });
  }

  async getAuraPriceInUSD(): Promise<any> {
    return await this.apyCalculator.aura.priceInUSD.next(this.apyCalculator.aura.priceInNetworkCurrency.getValue() * this.apyCalculator.networkCurrency.price.getValue());
  }

  connectWallet(): void {
    this.loginProcedure();
  }

  async tryProvider(): Promise<any> {
    this.web3 = new Web3(Web3.givenProvider);
    if (Web3.givenProvider) {
      this.web3 = new Web3(Web3.givenProvider);
    } else {
      this.web3 = new Web3(window.ethereum);
    }
    if (!this.web3.givenProvider && !this.web3.currentProvider) {
      this.web3 = new Web3('https://data-seed-prebsc-2-s3.binance.org:8545/'); // METAMASK
    }
    await this.setContracts();
  }

  loginProcedure(): void {
    try {
      this.requestAccounts();
      window.ethereum.on('accountsChanged', (userAddresses) => {
        this.user.address.next(userAddresses[0]);
        this.web3.eth.defaultAccount = userAddresses[0];
      });
      this.setContracts();
    } catch (error) {
    }
  }

  requestAccounts(): void {
    this.web3.eth.requestAccounts().then(userAddresses => {
      this.web3.eth.defaultAccount = userAddresses[0];
      this.user.address.next(userAddresses[0]);
    });
  }

  async getPoolTokenContractInfo(poolId: number): Promise<any> {
    await this.getPoolTokenName(poolId);
    await this.getPoolTokenDecimals(poolId);
    await this.getPoolTokenSymbol(poolId);
    await this.getPoolTokenApproval(poolId);
    // await this.getPoolTokenPrices(poolId);
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
    return await this.poolInfo[poolId].token.contract.methods.allowance(this.user.address.getValue(), this.auraVaultContractAddress).call().then(result => {
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

  async getPoolTokenNetworkCurrencyPairAddress(poolId: number): Promise<any> {
    return await this.exchangeFactoryContract.methods.getPair(this.poolInfo[poolId].token.address, this.wrappedNetworkCurrencyContractAddress).call().then(async result => {
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
    return await this.poolInfo[poolId].token.contract.methods.approve(this.auraVaultContractAddress, BigInt(999999999999999999999999)).send({ from: this.user.address.getValue() })
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
          text: 'You have successfully approved your tokens to pool ' + this.poolInfo[poolId].name + '.',
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
          text: 'There was an error approving your tokens to pool ' + this.poolInfo[poolId].name + '.',
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
        await this.auraVaultContract.methods.deposit(
          poolId,
          String(Math.floor(amount * 1e18))
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
      return await this.auraVaultContract.methods.deposit(
        poolId,
        String(Math.floor(amount * 1e18))
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
            text: 'You have successfully deposited to pool ' + this.poolInfo[poolId].name + '.',
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
            text: 'There was an error depositing to pool ' + this.poolInfo[poolId].name + '.',
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
    return await this.auraVaultContract.methods.withdraw(
      poolId,
      String(Math.floor(amount * 1e18))
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
          text: 'You have successfully withdrawn from pool ' + this.poolInfo[poolId].name + '.',
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
          text: 'There was an error withdrawing from pool ' + this.poolInfo[poolId].name + '.',
          date: new Date()
        });
        setTimeout(() => {
          this.poolInfo[poolId].withdrawButton.next(0);
        }, 2500);
      });
  }

  async claim(poolId: number): Promise<any> {
    this.poolInfo[poolId].claimButton.next(1);
    return await this.auraVaultContract.methods.deposit(
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
          text: 'You have successfully claimed from pool ' + this.poolInfo[poolId].name + '.',
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
          text: 'There was an error claiming from pool ' + this.poolInfo[poolId].name + '.',
          date: new Date()
        });
        setTimeout(() => {
          this.poolInfo[poolId].claimButton.next(0);
        }, 2500);
      });
  }

  async getCumulativeRewardsSinceStart(): Promise<any> {
    return await this.auraVaultContract.methods.cumulativeRewardsSinceStart().call().then(result => {
      this.vault.cumulativeRewardsSinceStart.next(result);
    });
  }

  async getAverageFeesPerBlockSinceStart(): Promise<any> {
    return await this.auraVaultContract.methods.averageFeesPerBlockSinceStart().call().then(result => {
      this.vault.averageFeesPerBlockSinceStart.next(result);
    });
  }

  async getAverageFeesPerBlockEpoch(): Promise<any> {
    return await this.auraVaultContract.methods.averageFeesPerBlockEpoch().call().then(result => {
      this.vault.averageFeesPerBlockEpoch.next(result);
    });
  }


  async getUserInfo(): Promise<any> {
    this.getUserBNBBalance();
  }

  async getAllPoolInfo(): Promise<any> {
    await this.getCumulativeRewardsSinceStart();
    await this.getAverageFeesPerBlockSinceStart();
    await this.getAverageFeesPerBlockEpoch();
    await this.poolInfo.forEach(async (element, index) => {
      await this.getAllUserPoolInfo(index);
    });
  }

  async getPoolLength(): Promise<any> {
    return await this.auraVaultContract.methods.poolLength().call().then(result => {
      this.vault.length.next(result);
    });
  }

  async getAllUserPoolInfo(poolId: number): Promise<any> {
    this.getUserPoolInfo(poolId);
    this.getPendingAura(poolId);
    this.getPoolInfo(poolId);
    this.getUserBalance(poolId);
  }

  async getUserPoolInfo(poolId: number): Promise<any> {
    return await this.auraVaultContract.methods.userInfo(poolId, this.user.address.getValue()).call().then(result => {
      this.poolInfo[poolId].userPoolInfo.next(result);
    });
  }

  async getPendingAura(poolId: number): Promise<any> {
    return await this.auraVaultContract.methods.pendingAURA(poolId, this.user.address.getValue()).call().then(result => {
      this.poolInfo[poolId].pendingAura.next(result);
    });
  }

  async getPoolInfo(poolId: number): Promise<any> {
    return await this.auraVaultContract.methods.poolInfo(poolId).call().then(result => {
      this.poolInfo[poolId].poolInfo.next(result);
    });
  }

  async getUserBalance(poolId: number): Promise<any> {
    this.poolInfo[poolId].token.contract.methods.balanceOf(this.user.address.getValue()).call().then(async result => {
      this.poolInfo[poolId].userBalance.next(result);
    });
  }

  // LGE VALUES
  async getLGEInfo(): Promise<any> {
    this.getBNBContributed();
    this.getFLIPPerBNBUnit();
    this.getTotalBNBContributed();
    this.getLGEEnd();
    this.getLGEStart();
    this.getLGECalculatedEnd();
    this.getLGEDuration();
    this.getIndividualCap();
    this.getInitialSupply();
    this.getTotalFLIPMinted();
  }
  async getBNBContributed(): Promise<any> {
    this.auraContract.methods.BNBContributed(this.user.address.getValue()).call().then(async result => {
      this.lge.user.contribution.next(result);
    });
  }
  async getFLIPPerBNBUnit(): Promise<any> {
    this.auraContract.methods.FLIPperBNBUnit().call().then(async result => {
      this.lge.FLIPperBNBUnit.next(result);
    });
  }
  async getLGEEnd(): Promise<any> {
    this.auraContract.methods.LGECompleted_Timestamp().call().then(async result => {
      this.lge.ended.next(result);
    });
  }
  async getLGEStart(): Promise<any> {
    this.auraContract.methods.contractStart_Timestamp().call().then(async result => {
      this.lge.started.next(result);
    });
  }
  async getLGECalculatedEnd(): Promise<any> {
    this.auraContract.methods.contractStart_Timestamp().call().then(async result => {
      this.auraContract.methods.contributionPhase().call().then(async resultZ => {
        this.lge.calculatedEnd.next(Number(result) + Number(resultZ));
      });
    });
  }
  async getLGEDuration(): Promise<any> {
    this.auraContract.methods.contributionPhase().call().then(async result => {
      this.lge.duration.next(result);
    });
  }
  async getIndividualCap(): Promise<any> {
    this.auraContract.methods.individualCap().call().then(async result => {
      this.lge.individualCap.next(result);
    });
  }
  async getInitialSupply(): Promise<any> {
    this.auraContract.methods.initialSupply().call().then(async result => {
      this.lge.initialSupply.next(result);
    });
  }
  async getTotalFLIPMinted(): Promise<any> {
    this.auraContract.methods.totalFLIPTokensMinted().call().then(async result => {
      this.lge.totalFLIPMinted.next(result);
    });
  }
  async getTotalBNBContributed(): Promise<any> {
    this.auraContract.methods.totalBNBContributed().call().then(async result => {
      this.lge.totalBNBContributed.next(result);
    });
  }

  async createLiquidity(): Promise<any> {
    this.lge.createLiquidityButton.next(1);
    return await this.auraContract.methods.POOL_CreateLiquidity(
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
    return await this.auraContract.methods.USER_ClaimWrappedLiquidity(
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
    return await this.auraContract.methods.USER_PledgeLiquidity(
      tos
    ).send({
      from: this.user.address.getValue(),
      to: this.auraContract,
      value: String(Math.floor(amount * 1e18))
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
    return await this.setAuraContract().then(async setAuraResult => {
      await this.setVaultContract().then(async setVaultResult => {
        await this.getPoolLength().then(async getPoolLengthResult => {
          await this.getAllPoolInfo().then(async getAllPoolInfoResult => {
            await this.setPoolTokenContracts().then(async setPoolTokenContractsResult => {
              await this.getLPContracts().then(async getLPResult => {
                await this.setLPContracts().then(async setLPResult => {
                  await this.setSecondaryContracts().then(setSecondaryResult => {
                    setInterval(() => {
                      this.getInfo();
                    }, 5000);
                  });
                });
              });
            });
          });
        });
      });
    });
  }

  async setPoolTokenContracts(): Promise<any> {
    this.poolInfo.length = this.vault.length.getValue();
    for (let index = 0; index < this.poolInfo.length; index++) {
      this.poolInfo[index] = {
        name: 'WBNB-AURA', // MAKE IT GET FROM token.name()
        token: {
          name: new BehaviorSubject(''),
          address: new BehaviorSubject(''),
          contract: undefined,
          decimals: new BehaviorSubject(0),
          symbol: new BehaviorSubject(''),
        },
        apy: new BehaviorSubject(30),
        priceInUSD: new BehaviorSubject(0),
        priceInNetworkCurrency: new BehaviorSubject(0),
        claimButton: new BehaviorSubject(0),
        depositButton: new BehaviorSubject(0),
        withdrawButton: new BehaviorSubject(0),
        tokenApproval: new BehaviorSubject(0),
        tokenRewards: new BehaviorSubject(0),
        pendingAura: new BehaviorSubject(0),
        userPoolInfo: new BehaviorSubject({
          amount: 0,
          rewardPaid: 0
        }),
        poolInfo: new BehaviorSubject({
          poolName: '',
          stakedToken: '',
          allocPoint: 0,
          accAURAPerShare: 0,
          VIPpool: false,
          withdrawable: false
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
    await this.poolInfo[poolId].token.address.next(this.poolInfo[poolId].poolInfo.getValue().stakedToken);
    this.poolInfo[poolId].token.contract = await new this.web3.eth.Contract(auraAbi, this.poolInfo[poolId].poolInfo.getValue().stakedToken);
  }

  async getLPContracts(): Promise<any> {
    await this.getLPContract();
    await this.getWLPContract();
  }

  async setLPContracts(): Promise<any> {
    await this.setLPContract();
    await this.setWLPContract();
  }
  async setSecondaryContracts(): Promise<any> {
    await this.setStableCoinContract();
    await this.setWrappedNetworkCurrencyContract();
    await this.setExchangeFactoryContract();
  }

  async setAuraContract(): Promise<any> {
    this.auraContract = await new this.web3.eth.Contract(auraAbi, this.auraContractAddress);
  }
  async setStableCoinContract(): Promise<any> {
    this.stableCoinContract = await new this.web3.eth.Contract(stableCoinAbi, this.stableCoinContractAddress);
  }
  async setWrappedNetworkCurrencyContract(): Promise<any> {
    this.wrappedNetworkCurrencyContract = await new this.web3.eth.Contract(wrappedNetworkCurrencyAbi, this.wrappedNetworkCurrencyContractAddress);
  }
  async setExchangeFactoryContract(): Promise<any> {
    this.exchangeFactoryContract = await new this.web3.eth.Contract(exchangeAbi, this.exchangeFactoryContractAddress);
  }

  async setVaultContract(): Promise<any> {
    this.auraVaultContract = await new this.web3.eth.Contract(auraVaultAbi, this.auraVaultContractAddress);
  }

  async getLPContract(): Promise<any> {
    return await this.auraContract.methods.viewFLIP().call().then(result => {
      this.liquidityToken.lpAddress.next(result);
    });
  }

  async setLPContract(): Promise<any> {
    this.liquidityToken.lpContract = await new this.web3.eth.Contract(auraLPAbi, this.liquidityToken.lpAddress.getValue());
  }

  async getWLPContract(): Promise<any> {
    return await this.auraContract.methods.wFLIP().call().then(result => {
      this.liquidityToken.wLPAddress.next(result);
    });
  }

  async setWLPContract(): Promise<any> {
    this.liquidityToken.wLPContract = await new this.web3.eth.Contract(auraWLPAbi, this.liquidityToken.wLPAddress.getValue());
  }

  // ================== //
  // USER BALANCES      //
  // ================== //
  async getUserBNBBalance(): Promise<any> {
    this.web3.eth.getBalance(this.user.address.getValue()).then(async result => {
      this.user.bnbBalance.next(Number(result));
    });
  }

  async getUserAuraBalance(): Promise<any> {
    this.auraContract.methods.balanceOf(this.user.address.getValue()).call().then(async result => {
      this.user.auraBalance.next(result);
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
  }
  async getTokenName(): Promise<any> {
    this.auraContract.methods.name().call().then(async result => {
      this.token.name.next(result);
    });
  }
  async getTokenSymbol(): Promise<any> {
    this.auraContract.methods.symbol().call().then(async result => {
      this.token.symbol.next(result);
    });
  }
  async getTokenDecimals(): Promise<any> {
    this.auraContract.methods.decimals().call().then(async result => {
      this.token.decimals.next(result);
    });
  }
  async getTokenTotalSupply(): Promise<any> {
    this.auraContract.methods.totalSupply().call().then(async result => {
      this.token.totalSupply.next(result);
    });
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

  async wrapFlip(amount: number): Promise<any> {
    this.wrapper.wrapButton.next(1);
    return await this.liquidityToken.wLPContract.methods.wrapFLIP(
      String(Math.floor(amount * 1e18))
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

  async unwrapFlip(amount: number): Promise<any> {
    this.wrapper.unwrapButton.next(1);
    return await this.liquidityToken.wLPContract.methods.wrapFLIP(
      String(Math.floor(amount * 1e18))
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
