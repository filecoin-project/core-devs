# Filecoin Core Devs Meeting #46 - 2022-06-30

**Meeting Date/Time:** Thursday, June 30th 2022, 16:00 UTC & Friday, July 1st 2022, 00:00 UTC

**Meeting Recording:** See README

**Meeting Slides:** https://docs.google.com/presentation/d/1A6ORHDaBKJ0BId2axPt_jkl5zNA0TquyxCf4N5dn-ww/edit?usp=sharing

**Attendance:** Forest (Chainsafe), Lotus (Protocol Labs), Filecoin Foundation, CryptoEconLab (Vik, Tom, and Maria) and Community representatives

_These meeting notes are cumulative across both Meetings 1 & 2._

### Updates and Ideas from Filecoin Implementation Teams

#### Venus
* Venus Suite now supports Filecoin network v16! 
* Venus-Market to support all market functionality. 
* Completed code geenration tool for go-fvm-sdk. 
#### Forest 
* Focused on Forest version updates, after months of focus on builtin actors. 
  * Cleaned up a lot of duplicate code introduced by builtin actors. 
#### Lotus 
* Lotus version 1.16 was released, and supports network v16! 
  * Coincidentally, this Lotus release is version 16; it is not named this way to correspond with Filecoin network 16! 
  * Will soon be releasing Lotus v1.17, which will deliver several bug improvements and will also support Filecoin network 16. 
* Completed H2 roadmap, which includes: 
  * Supporting new FIPs in future upgrades; 
  * Major improvements for Lotus miner, and;  
  * Splitstore, which will deliver performance improvements and online garbage collection.

#### Filecoin Foundation 
* Governance 
   * A new folder for [Filecoin Requests for Comments](https://github.com/filecoin-project/FIPs/tree/master/FRCs) has been added to the FIPs repo! 
   * We have many new FIP drafts that have been pushed into the repo- be sure to check them out! 
     * If you're looking for a summary of FIP drafts and merges, check out the [weekly governance update!](https://github.com/filecoin-project/FIPs/discussions/categories/announcements) 
* Security 
  * N/A
 
#### Updates on Skyr Network v16 
* A group will be organized to watch the upgrade, respond to any road bumps, and celebrate the launch of v16! 

#### Updates on Skyr Network v17 
* Core Devs have coalesced around supporting a large, FIP -heavy upgrade that emphasizes storage market development. 
* Proposed (and tentative) FIPs for inclusion in this upgrade include: 
   *  [FIP0029 - Beneficiary Address for Storage Providers](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0029.md)
   *  [FIP0034 - Fix PreCommi Deposit Independent of Sector Content](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0034.md) 
   *  [FIP0035 - Support Actors as BuiltIn Storage Market Clients](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0035.md)
   *  [FIPXXXX - Decoupling FIL+ from Marketplace](https://github.com/filecoin-project/FIPs/discussions/313)
   *  [FIPXXXX - Forward Compatibility for Pre-Commit](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0041.md)
* Before we approve a tentative timeline, we have to confirm which FIPs want to be included. 
* A summary of FIPs to consider will be distributed to teams so they can review implementation needs and their capacity for FIPs. 
   * Reminder: it is the responsibility of Core Devs to confirm which FIPs will be included in the upgrade! 
   * It is critical that Core Devs review open FIPs, understand which FIPs are being proposed, and weigh in on where resources ought to be allocated! 

#### FIP Presentation: Sector Duration Multiple for Longer Term Storage
* The purpose of the CryptoEconLab (CEL) is to design incentives around 1) the needs of the network, and 2) the vision of Filecoin. 
* The [Sector Duration Multiple FIP](https://github.com/filecoin-project/FIPs/pull/390) is being proposed for a variety of reasons. 
   * There are incentives which are currently missing from the network which helps support the long-term sustainability of Filecoin. 
   * There are macroeconomic issues at play which have caused persistent, unfavorable conditions for certain stakeholders. 
   * CEL wants to be proactive and transparent in proposing this FIP, while maximizing benefit to the broadest array of stakeholders while having the smallest technical impact on the protocol surface. 
*  This FIP was motivated by the fact that longer term storage deals are directly aligned with the network's goal to storage humanity's most important data, but that SPs are currently asked to shoulder the risk of long-term storage without additional reward. 
*  Much like how Filecoin+ incentivizes the onboarding of trusted data, this FIP introduces a quality-adjusted multiplier that rewards SPs who commit resources to the network for longer.
   * The FIP proposes to 1) increase minimum sector duration time to 1 year, and 2) maximum time of 5 years. 
   * The same policy would apply to sector upgrade and sector extension.  
   * The goal is to create a linear distribution of multiplier block rewards to SPs a a function of data stored over time. 
* CEL wants ample community feedback to drive the development of the FIP. 
   * It is the preference of CEL that the FIP be accepted and implemented as quickly as possible, but only after strong community buy-in.   
   * The team is also considering alternatives to the initial model, and wants community feedback to help drive these considerations. 
   * Additional data modeling will be released by CEL this week to support the assumptions of this FIP. 
* Questions from CEL: 
   * Q: How difficult would this proposal be for Core Devs to implement?
     * A:  Should be easy to implement.  The larger challenge is organizing community support around this proposal. 
   * Q: How does this interact with the existing construction of the protocol?
     * A:  In order to be included in the v17 upgrade, Core Devs will need to agree that this FIP is a priority. It is currently unclear whether this proposal is more important than others.
   * Q: By when do we need community alignment? What's next in the FIPs process?
     * A:  The FIP will need to be complete by the end of July in order to have enough time to complete the Last Call process. It is unclear whether or not CEl will be able to achieve this on time for inclusion in v17. 






