# Filecoin Core Devs Meeting #37 - 2022-02-24

**Meeting Date/Time:** Thursday, February 24th 2022, 16:00 UTC

**Meeting Recording:** See README

**Attendance:** Forest (Chainsafe), Fuhon (Soramitsu), Venus (IPFSForce), Lotus (Protocol Labs), Filecoin Foundation, and Community representatives

### Updates and Ideas from Filecoin Implementation Teams

*In preparation of our move to hosting two asynchronous Core Devs meetings biweekly, in order to better accomodate global timezones, both February meetings will use formal presentations to organize meeting materials.  Implementation teams are asked to provide all updates, etc., ahead of the meeting, in order to facilitate this new format.* 

*Placeholders for the two optional Core Devs meetings (begin with Core Devs #38) have been sent to all current attendees.  For more information, see the TPM repo README.*

#### Venus
* NV15 is live ([release documentation](https://github.com/filecoin-project/venus/discussions/4688))
* Continuing to work on Venus gateway, miner, and wallet, as well as code refactoring for Venus2.0
  * Improved deal support in Venus cluster will be released next week
* The team is preparing for the FVM upgrade and is ready for the v15 upgrade
#### Fuhon 
* Fuhon node is currently live on interopnet; team has submitted audit documentation to Filecoin Foundation
  * Fuhon-miner fully ready for mainnet sync pending ongoing audit 
* Fuhon miner currently updated with Snap Deals and running on testnet
  * Has completed testing on butterfly net
#### Lotus 
* Shipped v1.14.0 in preparation of v15 upgrade 
  * Lotus encourages all community members to upgrade to the latest version ahead of the v15 network release
  * v1.14.2 will be released EOD on February 24 and includes one small bug related to a Snap Deals edge case 
* Rebranded MinerX program as SPX program
* Continuing to work on WindowPoSt worker improvements, libp2p resource improvements, and retrieval market improvements
#### Forest 
* Shipped Forest v0.2.1 
* Preparing to incorporate v15 FIPs and release ref-FVM during the v15 network upgrade
  * Currently fixing bugs on calibnet to prepare for v15
* The Rust actors repo is now public, but there is a small issue with repo mirroring/work tracking 
  * This is being worked on by the FVM team 
  * Once this issue is resolved, the Forest team will need to resubmit outstanding specs actors PRs to the correct repo so that the WASM runtime is properly updated.
#### Filecoin Foundation 
* The only FIPs currently in 'Accepted' status are FIP0019 and FIP0028, which will be included in the v15 upgrade 
  * The three FVM FIPs - 0030, 0031, and 0032 (upcoming)- will be scheduled for 'last call' mid-March
  * Additional communications around these FIPs will be made apparent when all three FIPs are available and preparing for 'Last Call'. 
  * Raul clarified that all three FVM FIPs need to be supported simultaneously in order for the FVM to be considered 'live' on mainnet
* There are no outstanding security risks or concerns. 
#### v15 Network Planning 
* v15 is the first upgrade to migrate every single data sector on the network! 
* The Lotus pre-migration to v15 will begin 180 epochs (~2 hours) before the upgrade time
  * Some nodes may fall out of sync during this time, and total nodes per tipset may fall, but we expect the overall impact to be relatively minimal
#### v16 Network Planning
* Implementation teams and the FVM implementation team have been in communication about upgrade needs, prefered timelines, dev capacity, and testing needs related to FVM. 
* Jennifer Wang proposed a timeline for the v16 upgrade, including 5 weeks of testing time, that was unanimously accepted by Core Devs: 
  * Late March - butterflynet sync
  * Mid April - calibnet sync and final impelementation version releases 
  * May 3 - mainnet upgrade 
* Kaitlin Beegle and Jennifer Wang will update all related network announcement materials to codify and confirm the selected timeline
