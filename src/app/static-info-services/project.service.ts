import { Injectable } from '@angular/core';

  // tslint:disable:max-line-length
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  project = {
    contracts: {
      tokenAddress: '0x25A99d1e1A08c9211e9B1Add162aA529d92e0C93',
      vaultAddress: '0x0C87adc5490103c27Be85Ab090dabeC86919aEf8',
      stableCoinAddress: '0xA6e59Dc48E2799912e4e5CCdb6e6918Bf0F6e4f7',
      wrappedNetworkCurrencyAddress: '0xA6e59Dc48E2799912e4e5CCdb6e6918Bf0F6e4f7',
      exchangeFactoryAddress: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', // ETH MAINNET
      exchangeRouterAddress: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', // ETH MAINNET
    },
    name: 'AURA',
    tokenName: '🍇',
    lpTokenName: '🍷',
    vaultName: 'Cellar',
    networkCurrency: 'BNB',
    networkName: 'Binance Smart Chain',
    rpcNetwork: 'https://data-seed-prebsc-2-s3.binance.org:8545/', // BSC TESTNET
    blockExplorer: 'BscScan',
    blockExplorerAddress: 'https://testnet.bscscan.com', // BSC TESTNET
    // blockExplorerAddress: 'https://bscscan.com', // BSC MAINNET
    exchangeAddress: 'https://exchange.pancakeswap.finance/', // BSC MAINNET + BSC TESTNET
    socials: {
      telegram: 'https://t.me/auraprotocol',
      medium: 'https://auraprotocol.medium.com',
      github: 'https://t.me/auragroup',
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
  text: `We are introducing the concept of unwrapping wrapped ` + this.project.tokenName + `-W` + this.project.networkCurrency + ` ` + this.project.lpTokenName + ` liquidity tokens.

  A fee is taken from the tokens being unwrapped, this fee is permanently locked, creating an ever increasing price floor.

  This fee that gets permanently locked, resulting in a price floor, increases the price of ` + this.project.tokenName + ` consistently over time.`,
  date: new Date()
  },
  {
  title: `What is farming? How does it work?`,
  icon: 'agriculture',
  text: `For example: ` + this.project.tokenName + ` holders, or ` + this.project.tokenName + `-W` + this.project.networkCurrency + ` ` + this.project.lpTokenName + ` liquidity providers may provide their tokens to the ` + this.project.tokenName + ` ` + this.project.vaultName +  `, in a process known as "farming", or "staking".
  
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
