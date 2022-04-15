# Filecoin Core Devs Meeting #40 - 2022-04-07

**Meeting Date/Time:** Thursday, April 7th 2022, 16:00 UTC & Friday, March 25th 2022, 00:00 UTC

**Meeting Recording:** See README

**Attendance:** Forest (Chainsafe), Fuhon (Soramitsu), Lotus (Protocol Labs), Filecoin Foundation, and Community representatives

_These meeting notes are cumulative across both Meetings 1 & 2._

### Updates and Ideas from Filecoin Implementation Teams

#### Venus
* Released FVM m0.5 (rc 1.3.1-rc1) 
* Launched [Venus Hub](https://venushub.io/), a hub for resources and onboarding of storage providers. 
#### Fuhon 
* Fuhon is currently running v15, syncing through FVM. 
* Updated miner and currently completing integration testing. 
  * Working on Snap Deals integration for Fuhon Miner.  
* CLI updates continue to be in progress. 
#### Lotus 
* The team is heads-down on FVM, including updating built-in actors and integrating FIPs. 
* Beginning to test network v16 upgrade in private network, with the goal of releasing it on a public testnet next week. 
* Launched an internal audit of FVM and Lotus codebase. 
#### Forest 
* The Forest team has created a [team wiki](https://github.com/ChainSafe/forest/wiki)!  
  * The wiki includes documentation, updates, and the Forest team roadmap. 
* Continuing to work with Lotus and the FVM team to develop the ref-actors. 
  * Working on converting all Go code to Rust. 
* David Himmelstrup is the new team lead for Forest. 
#### Filecoin Foundation 
* We are still waiting on final completion of FIPs 30, 31, and 32 (the FVM FIPs) before they can enter Last Call. 
* DUdley Grant has resigned from Filecoin Foundation and will no longer be leading network security.
  * In the interim, Parth Shah (Filecoin Foundation) and Jennifer Wang (Lotus team) will be working together to triage open audit requests and bug bounties. 
  * Dragan Zurzin will be covering the ongoing FVM audit, alongside supporting engineers. 
  * There are no immediate risks or security concerns. 
#### Updates on Skyr Network v16 
* There are a few delays in the launch of the butterfly testnet due to FVM auditing and test parameters. 
  * We expect to make the butterflynet public on Thursday, April 14, but this may be delayed further. 
  * Security and auditing is the most important consideration for the network, and upgrade timeline may be pushed further to ensure that the eventual upgrade is stable and secure. 
