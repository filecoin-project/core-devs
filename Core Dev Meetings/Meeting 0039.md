# Filecoin Core Devs Meeting #39 - 2022-03-24

**Meeting Date/Time:** Thursday, March 24th 2022, 16:00 UTC & Friday, March 25th 2022, 00:00 UTC

**Meeting Recording:** See README

**Attendance:** Forest (Chainsafe), Fuhon (Soramitsu), Lotus (Protocol Labs), Filecoin Foundation, and Community representatives

Please note: this week, due to attendance, the second Core Devs call was cancelled.  

### Updates and Ideas from Filecoin Implementation Teams

#### Venus
* Venus is synced and running the FVM. 
* Work continues on Venus-Cluster, as does stability work on the Venus node. 
#### Fuhon 
* Fuhon is synced on interopnet with the FVM.
* Fuhon node and Fuhon miner are currently up-to-date with network v15. 
  * Node is stable; it can seal sectors and facilitate storage provision on CC sectors. 
* The team is working on building up additional community support capacities. 
#### Lotus 
* Lotus team is [focused on FVM](https://github.com/orgs/filecoin-project/projects/39); nodes are currently synced to mainnet and running the FVM. 
* Internal audits on [FVM and ref-Actors](https://github.com/filecoin-project/builtin-actors/issues?q=is%3Aissue+is%3Aopen+label%3Aarea%2Ftest) is ongoing. 
* Shipped Lotus v1.15.1-rc1, which includes canary tag, snap deals improvements, and other resource management tools.
* Finished prototyping and analyzing FIP0027. 
#### Forest 
* Forest is synced to mainnet and running the FVM. 
* Working to make Forest more nimble by removing duplicate code in Forest codebase and ref-Actors.
* The Forest team is interested in finding ways to share testing resources and requirements. 
#### Filecoin Foundation 
* A reminder to check out the [weekly Governance Updates](https://github.com/filecoin-project/FIPs/discussions/327) to see what's upcoming and what's on-deck.
* [FIP0027](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0027.md) is complete and will enter Last Call on Friday, March 25th. 
  * This FIP was opened in the second half of 2021, and originally sought to exchange strings not bytes. 
* A reminder about requesting audits: 
  * Audtors are extremely busy, and often take months to schedule new projects. 
  * It is critically important that audit requests are fully-formed, and all documentation is complete. 
  * Incomplete documentation can slow down the audit process. 

