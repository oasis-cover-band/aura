import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { BehaviorSubject } from 'rxjs';
import { NotificationsService } from './notifications.service';
const auraAbi = require('../../assets/abi/auraabi.json');
const auraVaultAbi = require('../../assets/abi/auravaultabi.json');
const auraLGEAbi = require('../../assets/abi/auralgeabi.json');
declare const window: any;
// tslint:disable:max-line-length

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  web3: Web3;

  auraContract;
  auraContractAddress = '0xD900cBDf3C8D7bB5ACEF39C3218E8B93A4429C50';

  auraWBNBContract;
  auraWBNBContractAddress = '0xa87411340B60ca59452bd47bbDA393Ac20a68829';

  auraVaultContractAddress = '0x9A79c9637d91aB4653cD24451F1b1773D8765Ffa';
  auraVaultContract;

  // USERVARS
  user = {
    address: new BehaviorSubject(''),
    auraBalance: new BehaviorSubject(0),
    bnbBalance: new BehaviorSubject(0),
    flipBalance: new BehaviorSubject(0),
  };

  // LGE VARS
  lge = {
    user: {
      contribution: new BehaviorSubject(0)
    },
    name: new BehaviorSubject(''),
    started: new BehaviorSubject(0),
    ended: new BehaviorSubject(0),
    FLIPperBNBUnit: new BehaviorSubject(0),
    buyFee: new BehaviorSubject(0),
    sellFee: new BehaviorSubject(0),
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
    poolLength: new BehaviorSubject(0)
  };

  // POOL INFO
  poolInfo = [
  {
    name: 'WBNB-AURA', // MAKE IT GET FROM token.name()
    tokenAddress: '0xBd10B672c274E2E2A1d175d05e28dbb9d16D5Bd9',
    tokenContract: undefined,
    tokenName: new BehaviorSubject(''),
    decimals: new BehaviorSubject(0),
    apy: new BehaviorSubject(0),
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
      stakedToken: '',
      allocPoint: 0,
      accAURAPerShare: 0,
      withdrawable: false
    }),
    userBalance: new BehaviorSubject(0),
    multiplier: new BehaviorSubject(30)
  },
];

  // BUTTONS
  sendButton: BehaviorSubject<any> = new BehaviorSubject(0);

  // LGE VALUES
  lgeStartDate: BehaviorSubject<any> = new BehaviorSubject(0);
  lgeEndDate: BehaviorSubject<any> = new BehaviorSubject(0);
  lgeContribution: BehaviorSubject<any> = new BehaviorSubject(0);
  lgeBalance: BehaviorSubject<any> = new BehaviorSubject(0);
  lgeHardcap: BehaviorSubject<any> = new BehaviorSubject(0);

  constructor(
    private notificationsService: NotificationsService
  ) {
    this.tryProvider();
    this.connectWallet();
    setInterval(() => {
      this.getInfo();
    }, 5000);
  }

  getInfo(): void {
    this.getUserInfo();
    this.getAllPoolInfo();
    this.getLGEInfo();
  }
  connectWallet(): void {
    this.loginProcedure();
  }

  tryProvider(): void {
    this.web3 = new Web3(Web3.givenProvider);
    if (Web3.givenProvider) {
      this.web3 = new Web3(Web3.givenProvider);
    } else {
      this.web3 = new Web3(window.ethereum);
    }
    if (!this.web3.givenProvider && !this.web3.currentProvider) {
      this.web3 = new Web3('https://data-seed-prebsc-2-s3.binance.org:8545/'); // METAMASK
    }
    this.getContracts();
  }

  loginProcedure(): void {
    try {
      this.requestAccounts();
      window.ethereum.on('accountsChanged', (userAddresses) => {
        this.user.address.next(userAddresses[0]);
        this.web3.eth.defaultAccount = userAddresses[0];
      });
      this.getContracts();
      setInterval(() => {
      }, 1500);
    } catch (error) {
    }
  }

  requestAccounts(): void {
    this.web3.eth.requestAccounts().then(userAddresses => {
        this.web3.eth.defaultAccount = userAddresses[0];
        this.user.address.next(userAddresses[0]);
    });
  }

  async getApproval(poolId: number): Promise<any> {
    return await this.poolInfo[poolId].tokenContract.methods.allowance(this.user.address.getValue(), this.auraVaultContractAddress).call().then(result => {
      this.poolInfo[poolId].tokenApproval.next(result);
    });
  }

  async approve(poolId: number): Promise<any> {
    this.poolInfo[poolId].depositButton.next(4);
    return await this.poolInfo[poolId].tokenContract.methods.approve(this.auraVaultContractAddress, BigInt(999999999999999999999999)).send({from: this.user.address.getValue()})
    .on('transactionHash', (transactionHash) => {
    })
    .on('confirmation', (confirmation) => {
      if (confirmation) {
      }
    }).on('receipt', (receipt) => {
      this.poolInfo[poolId].depositButton.next(5);
      setTimeout(() => {
        this.poolInfo[poolId].depositButton.next(1);
      }, 2500);
    })
    .on('error', (error) => {
          this.poolInfo[poolId].depositButton.next(3);
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
        .send({from: this.user.address.getValue()})
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
      .send({from: this.user.address.getValue()}).then(result => {
          if (result.status === true) {
            this.poolInfo[poolId].depositButton.next(2);
            setTimeout(() => {
              this.poolInfo[poolId].depositButton.next(0);
            }, 2500);
          }
      })
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
    ).send({from: this.user.address.getValue()})
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
    .send({from: this.user.address.getValue()})
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
    await this.getPoolLength();
    await this.getCumulativeRewardsSinceStart();
    await this.getAverageFeesPerBlockSinceStart();
    await this.getAverageFeesPerBlockEpoch();
    await this.poolInfo.forEach((element, index) => {
      this.getAllUserPoolInfo(index);
    });
  }

  async getPoolLength(): Promise<any> {
    return await this.auraVaultContract.methods.poolLength().call().then(result => {
      this.vault.poolLength.next(result);
    });
  }

  async getAllUserPoolInfo(poolId: number): Promise<any> {
    this.getUserPoolInfo(poolId);
    this.getPendingAura(poolId);
    this.getPoolInfo(poolId);
    this.getUserBalance(poolId);
    this.getPoolTokenName(poolId);
    this.getPoolTokenDecimals(poolId);
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

  async getPoolTokenName(poolId: number): Promise<any> {
    return await this.poolInfo[poolId].tokenContract.methods.name().call().then(result => {
      this.poolInfo[poolId].tokenName.next(result);
    });
  }

  async getPoolTokenDecimals(poolId: number): Promise<any> {
    return await this.poolInfo[poolId].tokenContract.methods.decimals().call().then(result => {
      this.poolInfo[poolId].decimals.next(result);
    });
  }

  async getPoolInfo(poolId: number): Promise<any> {
    return await this.auraVaultContract.methods.poolInfo(poolId).call().then(result => {
      this.poolInfo[poolId].poolInfo.next(result);
    });
  }

  async getUserBalance(poolId: number): Promise<any> {
    this.poolInfo[poolId].tokenContract.methods.balanceOf(this.user.address.getValue()).call().then(async result => {
      this.poolInfo[poolId].userBalance.next(result);
    });
  }

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

  // LGE VALUES
  async getLGEInfo(): Promise<any> {
    this.getName();
    this.getBNBContributed();
    this.getFLIPPerBNBUnit();
    this.getTotalBNBContributed();
    this.getLGEEnd();
    this.getLGEStart();
    this.getIndividualCap();
    this.getInitialSupply();
    this.getTotalFLIPMinted();
  }
  async getName(): Promise<any> {
    this.auraContract.methods.name().call().then(async result => {
      this.lge.name.next(result);
    });
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
    ).send({from: this.user.address.getValue()})
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
      text: 'Congratulations! You have successfully launched the project.' ,
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
            text: 'There was an error. Someone may have launched before you, or the LGE has not ended.' ,
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
    ).send({from: this.user.address.getValue()})
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
      value: String(Math.floor(amount * 1e18))})
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

  getContracts(): void {
    this.auraContract = new this.web3.eth.Contract(auraAbi, this.auraContractAddress);
    this.auraVaultContract = new this.web3.eth.Contract(auraVaultAbi, this.auraVaultContractAddress);
    // this.getVaultContract().then(result => {
    //   this.getAllPoolInfo().then(result2 => {
    //     this.poolInfo.length = this.vault.poolLength.getValue();
    //     console.dir(this.poolInfo);
    //     this.poolInfo.forEach((element, index) => {
    //       this.poolInfo[index].tokenAddress = this.poolInfo[index].poolInfo.getValue().stakedToken;
    //       this.poolInfo[index].tokenContract = new this.web3.eth.Contract(auraAbi, this.poolInfo[index].tokenAddress);
    //     });
    //   });
    // });
    this.poolInfo[0].tokenAddress = this.auraWBNBContractAddress;
    this.poolInfo[0].tokenContract = new this.web3.eth.Contract(auraAbi, this.auraWBNBContractAddress);
  }

  async getVaultContract(): Promise<any> {
    this.auraVaultContract = await new this.web3.eth.Contract(auraVaultAbi, this.auraVaultContractAddress);
  }
}
