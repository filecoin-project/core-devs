# Filecoin Core Devs Meeting #38 - 2022-03-10

**Meeting Date/Time:** Thursday, March 10th 2022, 16:00 UTC

**Meeting Recording:** See README

**Meeting Recording:** https://docs.google.com/presentation/d/1QkXnJ4RrIQQjsyhzRi0kS_jsBjPD-fQlWIXF7A9nuLw/edit?usp=sharing

**Attendance:** Forest (Chainsafe), Fuhon (Soramitsu), Venus (IPFSForce), Lotus (Protocol Labs), Filecoin Foundation, and Community representatives

This week marked the beginning of the new Core Devs meeting format, with two biweekly meetings.  As previously communicated, Core Devs were invited to join either Meeting 1 or Meeting 2, depending on their timezone. For more information about scheduling, see the TPM repo README. 

These meeting notes aggregate information shared in both meetings. 

### Updates and Ideas from Filecoin Implementation Teams

#### Venus
* Currently working on Venus-Cluster development: 
  * Venus-Cluster is a component for management sector sealing and sector storage management for SPs running multiple nodes. 
  * Completed CC sector sealing; G2 GPU outsourcing development and market function are also available.  
  * Snap Deals will be implemented in Venus Cluster next week. 
* The team indicated their interest to have a network upgrade between [FVM M1 & M2 milestones](https://filecoin.io/blog/posts/introducing-the-filecoin-virtual-machine/); this was confirmed as the plan. 
#### Fuhon 
* 33 CLI calls out of 70 have now shipped. 
* Working with Filecoin Foundation on codebase audit and scoping new features and enhancements. 
#### Lotus 
* OhSnap upgrade is officially lived! Also shipped Lotus v1.15, which includes client -facing retrieval updates. 
  * Since the upgrade, more than 260 'snap' deals have occured! 
  * For more information on network usage and other statistics, Core Devs are encouraged to reach out the Filecoin+ team (#fil-plus in Filecoin Project Slack)
* Currently working with FVM team to develop FIPs ahead of the v16 upgrade. 
#### Forest 
* Preparing for v16 upgrade; working closely with FVM and Lotus team. 
* Currently refactoring Forest codebase
#### Filecoin Foundation 
* No security updates at this time. 
* There are many open FIP drafts and ideas.  
  * Beginning this week, weekly governance updates will be published; teams are encouraged to review. [(Link)](https://github.com/filecoin-project/FIPs/discussions/categories/announcements)
#### Retro on v15 Network Upgrade
* Hardest part was coordinating testing on an otherwise complicated upgrade. 
  * Having a dedicated test network worked well, and ought to be replicated in the future. 
  * Having multiple implementers join the testnet was also helpful, and it was great to have some test benchmarks available. 
  * It remains difficult to parse the origin of issues, whether their in an implementation or in features, actors, etc. 
#### v16 Network Planning
* The timeline has been updated by a few days in order to accommodate changes to the [test plan](https://github.com/filecoin-project/FIPs/blob/7244ee6e100938296cdbde35f0e5ea225733204e/FIPS/fip-0031.md#test-plan). Current schedule is confirmed as follows: 
  * Canary Tag v0 - March 14 
  * Butterflynet Upgrade - March 31 
  * Calibnet Upgrade - April 19 
  * Mainnet Upgrade - May 10 
* FIPs being considered for implementation in v16 are 27, 30, 31, 32, and 33.  
  * None of these four FIPs have yet completed 'Last Call' status.  Their authors' are currently finalizing the drafts for final community consideration. 
  * The goal is to complete 'Last Call' prior to the calibnet upgrade period, but finalization is still to be determined. 
  * Though separate, each of these FIPs is necesary in order to launch the non-programmable FVM.  No other FIPs will be considered for this upgrade. 
#### v17 Network Planning 
* Dates for this upgrade are still largely tentative.  Core Devs are considering: 
  * Testnet Upgrade - June
  * Calibnet Upgrade - July 
  * Mainnet Upgrade - August 
#### FIPs from Protocol Opportunities Team 
* An engineering and research team within Protocol Labs' Cryptographic Network. 
* Near-term goals include the programmability of storage and markets on Filecoin, and retrieval incentives and marketplaces.
* Newest FIPs for feedback, review, and consideration: 
  * [Set Pre-Commit Deposit Independent of Sector Content](https://github.com/filecoin-project/FIPs/pull/307) 
    *  Decouples storage power consensus from deal market and will enable further separation between data markets and SPs in the future. 
    *  Should be simple to design and implement, and will lower overall gas fees on the network. 
  * [Support Contracts as Deal Clients](https://github.com/filecoin-project/FIPs/discussions/271)  
    *  A key protocol change to support deal programmability within the marketplace. 
    *  Should be relatively straightforward to build and implement, with no additional implementation requirements for clients. 
  * [Decoupling FIL+ Terms from Storage Marketplace](https://pl-strflt.notion.site/FIL-indefinite-term-limits-08079d7ec25c4cae839a3bf95a82df26)  
    *  Keeps all key workflows for Filecoin+, but keeps datacap allocations outside the term of the deal. 
    *  Enables verified clients to strike longer-term deals with trusted storage providers. 
  * [Architecture for Programmable Storage Market](https://github.com/filecoin-project/FIPs/discussions/298)  
     *  Support user-programmed markets and storage -integrated applications. 
     *  Pieces of this proposal (currently) may yet be broken off and used to inform FIPs related to later FVM milestones in network upgrade v17. 


