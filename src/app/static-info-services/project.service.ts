import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  project = {
    tokenAddress: '0xA6e59Dc48E2799912e4e5CCdb6e6918Bf0F6e4f7',
    vaultAddress: '0x746c4e2B8C0f55B0d182F5Ad35F1c4dde9597334',
    tokenName: 'AURA',
    lpTokenName: 'FLIP',
    networkCurrency: 'BNB',
    blockExplorer: 'BscScan',
    blockExplorerAddress: 'https://bscscan.com',
    socials: {
      telegram: 'https://t.me/auragroup',
      medium: 'https://t.me/auragroup',
      github: 'https://t.me/auragroup',
    }
  };
  pageInformation = {

  };
  projectInformation = [
    {
    title: 'What is AURA?',
    icon: 'accessibility',
    text: `AURA is a protocol based on the highly successful Ethereum project, cVault Finance (CORE).`,
    date: new Date()
  },
  {
  title: 'How does AURA make everyone money?',
  icon: 'monetization_on',
  text: `For example: AURA holders, or AURA-WBNB flip liquidity providers may provide their tokens to the AURA Vault, in a process known as "farming", or "staking".
  
  These "farmers" and "stakers" are then rewarded for locking up their tokens. Their tokens are not permanently locked.
  
  The protocol does not need to mint new tokens to reward farmers. The protocol is designed to provide an inflationless, sustainable and safe method of generating yield through taxing a portion of each trade, and providing it to those currently farming.`,
  date: new Date()
  },
  {
  title: 'Is anything else coming to AURA?',
  icon: 'add_circle',
  text: `Similarly to cVault Finance, we are building a series of 'Automated Strategy Vaults' which will execute second-layer profit generating strategies.
  
  Though on the Binance Smart Chain this causes a hurdle due to the lack of safe and reputable protocols. Our first vault will interact with Pancakeswap, with community voting to guide the team towards integrating more projects.`,
  date: new Date()
  },
  {
  title: 'What makes AURA great?',
  icon: 'code',
  text: `By adopting all of CORE's values that make it such a successful DeFi project, and improving upon parts of the protocol, AURA is looking to improve upon an already functional and successful product.

  Simply put, by porting to Binance Smart Chain, AURA is already improving upon the mechanics of CORE. We will be the first team to move the cVault Finance team's revolutionary protocol to the Binance Smart Chain.

  This is only a start to the changes we're making.
  
  You will be able to unwrap liquidity after a set time! No longer will you be worried about having permanently wrapped liquidity tokens.
  
  There will be VIP pools, where you must stake a certain amount of AURA to participate in the farming of these pools.`,
  date: new Date()
},
{
title: 'Who is behind AURA?',
icon: 'adb',
text: `We are a team of successful mobile developers, web developers, software engineers, traders and mathematicians who have been in the cryptocurrency space since 2015. We are forming a brand around AURA, with plans to continue developing fairly launched, safe and profitable projects to contribute to AURA.

The majority of our team wishes to remain anonymous due to not owning their Intellectual Property Rights. This means that their respective companies would own any code they are to write.`,
date: new Date()
},
{
title: 'What is next for the AURA team?',
icon: 'sports_kabaddi',
text: `Our primary focus is and will always be AURA. We will be developing fairly launched projects to contribute to AURA's volume and to expand on it's use cases.

The first of these projects of which I am excited to share is a fresh take on yield farming; aptly named Kung Fu Farms. The UI and assets are currently being developed, while the code is in theoretical stages.

Holders and farmers of AURA will be able to participate in Kung Fu Farms before everyone else, in addition to benefitting the most from the platform.`,
date: new Date()
}
];
  constructor() { }
}
