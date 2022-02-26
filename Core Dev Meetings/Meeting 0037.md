# NOTES IN PROGRESS - Filecoin Core Devs Meeting #37 - 2022-02-24

**Meeting Date/Time:** Thursday, February 24th 2022, 16:00 UTC

**Meeting Recording:** See README

**Attendance:** Forest (Chainsafe), Fuhon (Soramitsu), Venus (IPFSForce), Lotus (Protocol Labs), Filecoin Foundation, and Community representatives

### Updates and Ideas from Filecoin Implementation Teams

*In preparation of our move to hosting two asynchronous Core Devs meetings biweekly, in order to better accomodate global timezones, both February meetings will use formal presentations to organize meeting materials.  Implementation teams are asked to provide all updates, etc., ahead of the meeting, in order to facilitate this new format.* 

*Placeholders for the two optional Core Devs meetings (begin with Core Devs #38) have been sent to all current attendees.  For more information, see the TPM repo README.*

#### Venus
* NV15 is live ([release documentation](https://github.com/filecoin-project/venus/discussions/4688))
*
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
* XXX
#### v15 Network Planning 
* XXX
#### v16 Network Planning
* XXX
