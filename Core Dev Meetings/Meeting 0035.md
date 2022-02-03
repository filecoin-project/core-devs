# Filecoin Core Devs Meeting #35 - 2022-01-27

**Meeting Date/Time:** Thursday, January 27th 2022, 16:00 UTC

**Meeting Recording:** See README

**Attendance:** Forest (Chainsafe), Fuhon (Soramitsu), Venus (IPFSForce), Lotus (Protocol Labs), Filecoin Foundation, and Community representatives

### Updates and Ideas from Filecoin Implementation Teams
#### Venus
* Testing for v15 is ongoing; no delays or bugs to report.  
* Team plans to join the calibnet upgrade on 2/8. 
* Most of the team will be on vacation through 2/8 due to Lunar New Year. 
#### Fuhon 
* Work on the miner module continues. 
* The team may be able to sync v15 on mainnet, but is not sure. 
#### Lotus 
* Testing work continues as scheduled; trusted setup for Snap Deals was complete, and the team is ready for calibnet on 2/8.    
    *   New Poseidon circuts have been added to testnet; for more info, see the [neptune repo](https://github.com/filecoin-project/neptune). 
#### Forest 
* Team is working with FVM team to finalize Rust actors for v15, and may use the FVM to upgrade to v15. 
* Team plans to join the calibnet upgrade on 2/8. 

#### Filecoin Foundation 
* There are no outstanding security issues or concerns. 
* Core Devs agreed to adopt a new meeting schedule with two meetings biweekly.  This will help teams better accomodate global timezone schedules. 
    *  Beginning in March, with Core Devs 38, two meetings will be held on Thursdays: one at 16:00 UTC, and another at 00:00 UTC. 
    *  Core Devs are welcome to join *either* call; guests, speakers, and/or presenters must be registered in advance, and are asked to attend *both* meetings (as possible). 
    *  In order to communicate information across meetings, a detailed meeting presentation will be kept.  This practice will begin in February, to get teams accustomed to a more formal meeting structure. 

### Planning for the v15 'OhSnap' Network Upgrade and v16 Network Pre-Planning
* Venus, Lotus, and Forest are prepared to sync v15 on calibnet. 
    * There appears to be a bug where Snap Deals consumes a disproportionate amount of comuputer memory; Dragan will investigate and circle back with the group. 
* The FVM team has asked for the v16 upgrade to happen at the end of March, which may or may not be possible.  Teams will confirm at the next Core Devs call. 


### Filecoin Fuzzer Project
* Medhi, the lead at SigmaPrime, is leading the Filecoin Fuzzer project. 
* The Fuzzer is modeled after Ethereum's Fuzzer model; the team will provide development updates monthly and expects to conclude in four months. 
* Lotus and Forest will be the first to test; Venus will test afterwards. 
