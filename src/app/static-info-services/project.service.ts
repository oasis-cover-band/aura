import { Injectable } from '@angular/core';

  // tslint:disable:max-line-length
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  cancelled = true;
  project = {
    contracts: {
      tokenAddress: '0x70D1240B21BeFe1118a7F0fCe40c6013DbFF81a2',
      cellarAddress: '0xa2b20C0F41FD5B9c1658E78134Ec0F7d46c7a1bF',
      stableCoinAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BSC (BUSD) MAINNET
      wrappedNetworkCurrencyAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', // BSC (WBNB) MAINNET
      exchangeFactoryAddress: '0xBCfCcbde45cE874adCB698cC183deBcF17952812', // BSC (PANCAKESWAP) MAINNET
      // exchangeFactoryAddress: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', // ETH (UNISWAP) MAINNET
      exchangeRouterAddress: '0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F', // BSC (PANCAKESWAP) MAINNET
      // exchangeRouterAddress: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', // ETH (UNISWAP) MAINNET
    },
    name: 'Vineyard',
    tokenName: '🍇',
    lpTokenName: '🍷',
    tokenFullName: 'GRAPES',
    lpTokenFullName: 'WINE',
    exchangeLPTokenName: 'CAKE',
    vaultName: 'Cellar',
    networkCurrency: 'BNB', // BSC MAINNET + BSC TESTNET
    chainId: 56, // BSC MAINNET
    // chainId: 97, // BSC TESTNET
    networkName: 'Binance Smart Chain', // BSC MAINNET + BSC TESTNET
    rpcNetwork: 'https://bsc-dataseed.binance.org/', // BSC MAINNET
    // rpcNetwork: 'https://data-seed-prebsc-2-s3.binance.org:8545/', // BSC TESTNET
    blockExplorer: 'BscScan', // BSC MAINNET + BSC TESTNET
    blockExplorerAddress: 'https://bscscan.com', // BSC MAINNET
    // blockExplorerAddress: 'https://testnet.bscscan.com', // BSC TESTNET
    exchangeAddress: 'https://exchange.pancakeswap.finance/', // BSC MAINNET + BSC TESTNET
    socials: {
      telegram: '',
      medium: '',
      github: ''
    }
  };
  pageInformation = {

  };
  projectInformation = [
    {
    title: `What is ` + this.project.name + `?`,
    icon: 'accessibility',
    text: `` + this.project.name + ` is a protocol based on the highly successful Ethereum project, cVault Finance (CORE).`,
    date: new Date()
  },
  {
  title: `What are ` + this.project.tokenFullName + `?`,
  icon: 'accessibility',
  text: `` + this.project.tokenName + ` is a deflationary protocol token that serves as a reward for farmers and stakers using the inflationless ` + this.project.tokenName + ` ` + this.project.vaultName +
  `.`,
  date: new Date()
},
{
title: `What is ` + this.project.lpTokenFullName + `?`,
icon: 'accessibility',
text: `` + this.project.lpTokenName + ` is a wrapping token that contains a 1:1 ratio of ` + this.project.exchangeLPTokenName +
` LP tokens.

  ` + this.project.lpTokenName + ` has an unwrapping timer, meaning once it has been wrapped, it can't be unwrapped for a specific amount of time.

  There is a fee for unwrapping your ` + this.project.lpTokenName + `. This fee is offset if you plan on farming for some time, due to ` + this.project.lpTokenName + ` pools providing higher yields than ` + this.project.exchangeLPTokenName +
` LP token pools.`,
date: new Date()
},
  {
  title: `How does ` + this.project.name + ` make everyone money?`,
  icon: 'monetization_on',
  text: `` + this.project.name + ` provides token holders with an inflationless method of earning rewards for placing their tokens in the ` + this.project.tokenName + ` ` + this.project.vaultName +  `.

  ` + this.project.name + ` also creates an ever-increasing price floor, increasing ` + this.project.tokenName + `'s price consistently overtime.

  ` + this.project.name + ` is the backbone of a much larger ecosystem, with each project providing unique utility to BSC.`,
  date: new Date()
  },
  {
  title: `What is a price floor? How does it work?`,
  icon: 'layers',
  text: `We are introducing the concept of unwrapping wrapped ` + this.project.tokenName + `-W` + this.project.networkCurrency + ` ` + this.project.exchangeLPTokenName + ` LP (` + this.project.lpTokenName + `)

  A fee is taken from the tokens being unwrapped, this fee is permanently locked, creating an ever increasing price floor.

  This fee that gets permanently locked, resulting in a price floor, increases the value of ` + this.project.tokenName + ` consistently over time.`,
  date: new Date()
  },
  {
  title: `What is farming? How does it work?`,
  icon: 'agriculture',
  text: `For example: ` + this.project.tokenName + ` holders, ` + this.project.tokenName + `-W` + this.project.networkCurrency + ` ` + this.project.exchangeLPTokenName + ` liquidity providers, or ` + this.project.lpTokenName + ` holders may provide their tokens to the ` + this.project.tokenName + ` ` + this.project.vaultName +  `, in a process known as "farming", or "staking".

  These "farmers" and "stakers" are then rewarded for locking up their tokens. Their tokens are not permanently locked. They earn rewards for every second their tokens are placed in the ` + this.project.tokenName + ` ` + this.project.vaultName +  `.

  The protocol does not need to mint new tokens to reward farmers. The protocol is designed to provide an inflationless, sustainable and safe method of generating yield through taxing a portion of each trade, and providing it to those currently farming.`,
  date: new Date()
  },
  {
  title: `Is anything else coming to ` + this.project.name + `?`,
  icon: 'add_circle',
  text: `Similarly to cVault Finance, we are building a series of 'Automated Strategy ` + this.project.vaultName + `s' which will execute second-layer profit generating strategies.

  Though on the ` + this.project.networkName + ` this causes a hurdle due to the lack of safe and reputable protocols. Our first ` + this.project.vaultName + ` will interact with Pancakeswap, with community voting to guide the team towards integrating more projects.`,
  date: new Date()
  },
  {
  title: `What makes ` + this.project.name + ` great?`,
  icon: 'code',
  text: `By adopting all of CORE's values that make it such a successful DeFi project, and improving upon parts of the protocol, ` + this.project.name + ` is looking to improve upon an already functional and successful product.

  Simply put, by porting to ` + this.project.networkName + `, ` + this.project.name + ` is already improving upon the mechanics of CORE. We will be the first team to move the cVault Finance team's revolutionary protocol to the ` + this.project.networkName + `.

  This is only a start to the changes we're making.

  You will be able to unwrap liquidity after a set time! No longer will you be worried about having permanently wrapped liquidity tokens. ` + this.project.lpTokenName + ` tokens give you just that, piece of mind.

  There will be VIP pools, where you must stake a certain amount of ` + this.project.tokenName + ` to participate in the farming of these pools.`,
  date: new Date()
},
{
title: `Who is behind ` + this.project.name + `?`,
icon: 'adb',
text: `We are a team of successful mobile developers, web developers, software engineers, traders and mathematicians who have been in the cryptocurrency space since 2015. We are forming a brand around ` + this.project.name + `, with plans to continue developing fairly launched, safe and profitable projects to contribute to ` + this.project.name + `.

  The majority of our team wishes to remain anonymous due to not owning their Intellectual Property Rights. This means that their respective companies would own any code they are to write.`,
date: new Date()
},
{
title: `What is next for the ` + this.project.name + ` team?`,
icon: 'sports_kabaddi',
text: `Our primary focus is and will always be ` + this.project.name + `. We will be developing fairly launched projects to contribute to ` + this.project.name + `'s volume and to expand on it's use cases.

  Holders and farmers of ` + this.project.tokenName + ` will be able to participate in any launch before everyone else, in addition to benefitting the most from the platform.`,
date: new Date()
}
];
  constructor() { }
}
