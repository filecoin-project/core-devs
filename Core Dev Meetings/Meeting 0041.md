# Filecoin Core Devs Meeting #41 - 2022-04-21

**Meeting Date/Time:** Thursday, April 21st 2022, 16:00 UTC & Friday, April 22nd 2022, 00:00 UTC

**Meeting Recording:** See README

**Meeting Slides:** https://docs.google.com/presentation/d/1sv1ypAuuHOggN8aztgillU6ko-bWWzMOa5sKH64swJA/edit?usp=sharing

**Attendance:** Forest (Chainsafe), Fuhon (Soramitsu), Lotus (Protocol Labs), Filecoin Foundation, and Community representatives

_These meeting notes are cumulative across both Meetings 1 & 2._

### Updates and Ideas from Filecoin Implementation Teams

#### Venus
* Venus is working on Venus-Cluster, including changes to sealer and worker, as well as support for Snap Deals. 
* Venus-Market is entering phase 2, which will allow Venus support multiple storage providers simultaneously. 
* The team continues to work with the FVM team, to ready for FVM integration and to support additional FVM development. 
  * Currently supporting FileDrive, a data client that wants to incorporate Venus-Market as a core business service for their clients. 
  * Currently working on an SDK for FVM.
#### Fuhon 
* Currently working on CLI enhancements. 
* Working to enhance Fuhon miner module. 
#### Lotus 
* Monthly Lotus release v1.15.2-rc1 now available! 
  * Includes post-worker and scheduler enhancements for the sealing pipeline. 
* Implemented Boost, the recommended market implementation for Lotus! 
* Currently working with FVM team. 
  * FIP0031 is currently fully implemented. 
  * FIP0032 gas parameters are currently scheduled for end of week!   
#### Forest 
* Continuing to help with FVM testing and infrastructure, especially in builtin actors repo. 
* Shipped Rust actors v6 and synced on FVM through network v14. 
* Security audits by SigmaPrime (Forest) and Consensys (Rust actors v7) currently underway. 
* REMINDER: weekly updates and work announcements from the Forest team can now be found in the [Forest team wiki](https://github.com/ChainSafe/forest/wiki)! 
#### Filecoin Foundation 
* Governance 
  * *FIP0027 - Change DealProposal label from string to bite array* has officially been accepted! 
  * *FIP0029 - Beneficiary Address* is currently in Last Call through Friday, April 29!
* Security 
  * Welcome, Parth Shah! Parth has joined the Filecoin Foundation on the Security team. 
  * Parth will be managing the Filecoin Bug Bounty program, and working with Jennifer Wang to provide triage support on open audits. 
#### Updates on Skyr Network v16 
* Unlike previous network upgrades, the timeline for v16 remain tentative and extremely changeable. 
  * This is due to the scale and complexity of the FVM FIPs.
  * The FVM- including the builtin actors repo- must be fully audited and tested before they can be introduced onto the network. 
  * The FVM team has asked Core Devs to remain flexible and responsive to changing requirements. 
* The [TPM Forum](https://github.com/filecoin-project/tpm/discussions/90) has been updated with the latest network upgrade timeline, but it ought to be noted that this update is likewise tentative and extremely likely to change.
  * More immediately, the latest planning around the butterflynet upgrade will be shared directly with implementers after the call. 
#### Indexer Node 'Advertisement' Protocol Proposal
* The [Indexer 'Advertisement' Protocol](https://github.com/filecoin-project/FIPs/pull/341) is a new FIP draft that has recently been merged into the repo. 
* This FIP proposes a market standardization, not a consensus -bound and/or protocol change. 
* The purpose of the 'Advertiser' protocol is to implement a standard protocol for storage providers to 'advertise' the data they're storing. 
  * This protocol will support upcoming work on the Filecoin retrieval market. 
* Currently, you can visit CID.contact to explore existing data (via CID index). 
* For more information or further technical details, consult the [FIP draft](](https://github.com/filecoin-project/FIPs/pull/341)) and/or review the [Core Devs recording](https://www.youtube.com/watch?v=RFcYvSJ9dXI&list=PL_0VrY55uV1-9t74K-eFQN7Bc7ROG06hT&index=33). 
#### Fuhon Team Node State Compaction Proposal
* This proposal is for a new idea being explored by the Fuhon engineering team. 
* The presentation suggests the need for a way for the implementation to transfer diffs instead of full state, just like Git does. 
  * There are many potential use cases for this, including the introduction of 'light' actors. 
* For detailed technical information, please review the [Core Devs meeting recording](https://www.youtube.com/watch?v=RFcYvSJ9dXI&list=PL_0VrY55uV1-9t74K-eFQN7Bc7ROG06hT&index=33). 
