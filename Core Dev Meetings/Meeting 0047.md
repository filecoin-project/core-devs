# Filecoin Core Devs Meeting #47 - 2022-07-14

**Meeting Date/Time:** Thursday, July 14th 2022, 16:00 UTC & Friday, July 15th 2022, 00:00 UTC

**Meeting Recording:** See README

**Meeting Slides:** https://docs.google.com/presentation/d/1W8aan93-IVOfWPUPeFw4qh1g3jhqIXpRFpwXK0dK6qk/edit?usp=sharing

**Attendance:** Forest (Chainsafe), Lotus (Protocol Labs), Filecoin Foundation, CryptoNetLab, and Community representatives

_These meeting notes are cumulative across both Meetings 1 & 2._

### Updates and Ideas from Filecoin Implementation Teams

#### Venus
* Provided support during v16; Venus Suite is network compatible and operating well. 
* Venus-Messenger now supports premium setting from CLI to mitigate v16 message congestion. 
* Venus-Market now supports retrieval directly via dataCID, and rebuilds index based on piece history. 
* Venus-Cluseter supports user-defined storage. 
* Team will be porting FIP0029 to builtin actors. 
#### Forest 
* The team collaborated with @Wired to squash a bug, and will soon release a v16 -compatible version of Forest! 
* Moving to generate and host regular calibnet snapshots. 
#### Lotus 
* Team has been fully focused on Skyr upgrade; glad to see everything went so smoothly! 
  * Shipped a patch release of Lotus 1.16.v1, to patch a small issue with network gas fees and messages. 
  * June and July feature releases have been merged into one :) 
* Team will be working at half capacity through June and July as team members take breaks. 

#### Filecoin Foundation 
* Governance 
   * [FIP0034 - Set Pre-Commit Deposit](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0034.md) is now in Last Call until Wednesday, July 27.
   * Many new FIPs have been moved around the repo and updated- be sure to review new drafts, check out the weekly governance update, and review individual FIP reviews that were sent to implementers! 
   * A few other updates coming in governance: 
     * Hiring! We are adding at least one Project Manager to the governance team to add much-needed capacity. 
     * FIP tracking table for v17 coming next week! Will be shared in #fil-implementers once available. 
     * FIP management workflows will be created and shared publicly for feedback and review. 
     * Core Devs format & content improvement launching early next week. 
     * Scoping an update to FIP0001 for accuracy. 
   * A reminder that the next Core Devs call will be on Thursday, August 4! For more information on the changing Core Devs meeting structure, see [HERE](https://github.com/filecoin-project/tpm/discussions/108).  
* Security 
  * N/A
 
#### Updates on Skyr Network v16 
* The Lotus team will be hosting a joint engineering retro open to all implementers, as well as a smaller retro between Lotus and Forest. 
   * Invites will be coming from @jennijuju next week. 
   * A synthesis and summary of all retros will be shared in #fil-implementers afterwards. 

#### Updates on Skyr Network v17 
* Core Devs have coalesced around supporting the following FIPs:
   *  [FIP0029 - Beneficiary Address for Storage Providers](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0029.md)
   *  [FIP0034 - Fix PreCommi Deposit Independent of Sector Content](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0034.md) 
   *  [FIP0035 - Support Actors as BuiltIn Storage Market Clients](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0035.md)
   *  [FIP0041 - Forward Compatibility for Pre-Commit](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0041.md)
   *  [FIPXXXX - Decoupling FIL+ from Marketplace](https://github.com/filecoin-project/FIPs/discussions/313)
* The last FIP requires testing and modeling in situ, so no draft is formally available yet.  The team can push an early draft early July, but a final draft for community Last Call won't be available until the end of August.
* Mainnet will be tentatively upgraded end of September. 
* Additional assumptions: 
  * FIP drafts need to be open for ~1 month prior to calibnet in order to be considered for inclusion in v17. 
  * Timeline is largely dependent on FIPs, as well as expectations around FVM M2 (later in 2022). 
  * Additional follow-up from CNL is still needed to confirm FIP development and prioritization. 

#### FIP Presentation: Forward Compatibility for PreCommit and ReplicaUpdate
* This FIP was written by engineers within the CryptoNetLab (CNL) and proposes to improve PreCommitBatch and ProveReplicaUpdate methods in order to better support the network in the future. 
  * This FIP was motivated by coming programmable storage and retrieval markets. 
  * Though we currently refer to a single deal ID, different marketplaces in the future may reference different deal IDs. 
    * These IDs could be numerical, they could be hashes, or they could be something else entirely. 
  * This means that, in the future, we'll need to refer to unsealed deal and sector IDs. This FIP is designed to address this reality. 
* Technically: 
  * This FIP first proposes to introduce a new method number 28, called `PreCommitSectorBatch2`, a copy of `PreCommitSector Batch`, with the following changes:
    * Remove fields related to deprecated and non-functional CC upgrades.
    * Introduce an `unsealed_sector_cid` field, a tagged union of `cid` and `none`.  `None` signifies an `UnsealedSectorCID` of sector containing just zeros (i.e., a CC sector).
    * Verify that the U`nsealedSectorCID` is consistent with `UnsealedSectorCID` computed from `DealID`s. 
  * Second, new method number 29, called  `ProveReplicaUpdate2`, a copy of `ProveReplicaUpdates` with the following changes: 
    * Introduces a `new_unsealed_cid` field of type CID.
    * Verify that the `UnsealedSectorCID` is consisted with `UnsealedSectorCID` computed from DealIDs
* Q: Are there any other alternatives to this method? WHich methods have you considered? 
  * A: There is a node alternative that could be used.  However, this path is a relatively lightweight change, and one which is easiest for community members. Other methods of achieving the same outcome are signficantly more complex for no clear benefit.
* Q: Is a state migration necessary for this change? 
  * A: Not specifically.  A state migration will be undertaken when FIP0034 is implemented, so these FIPs should be implemented together.   
