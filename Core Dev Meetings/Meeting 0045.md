# Filecoin Core Devs Meeting #45 - 2022-06-02

**Meeting Date/Time:** Thursday, June 16th 2022, 16:00 UTC & Friday, June 17th 2022, 00:00 UTC

**Meeting Recording:** See README

**Meeting Slides:** https://docs.google.com/presentation/d/1QBNZfiXy5_9JPQHUafB_Lq63rUYecatg7kCctoG04vc/edit?usp=sharing

**Attendance:** Forest (Chainsafe), Lotus (Protocol Labs), Filecoin Foundation, and Community representatives

_These meeting notes are cumulative across both Meetings 1 & 2._

### Updates and Ideas from Filecoin Implementation Teams

#### Venus
* Venus components upgraded and tested on butterflynet for v16. 
* Bug fixes for Venus-Market have shipped. 
* Currently testing v16 on calibnet. 
#### Forest 
* Team is nearly complete with builtin actors testing! 
* Next week, the team will begin preparing Forest for the nv16 mainnet upgrade. 
#### Lotus 
* Calibnet was upgraded! 
   * Mainnet upgrade epoch will be at 10:00am EST on July 6! 
* Testing is nearly complete and there are no outstanding concerns or signficant dependencies.
  * Jennifer is organizing a longer maintainers' window during the upgrade. 
  * Monitoring period will begin approximately one hour before upgrade and last for five hours in total. 
* Core Devs do not anticipate any network disruption during v16 upgrade. 
* Preparing v17.00.01 for release. 
* Lotus team will be attending [FIL Toronto!](https://www.eventbrite.ca/e/fil-toronto-summithackathon-tickets-337581243587) 

#### Filecoin Foundation 
* Governance 
   * There are no FIPs currently in Last Call. 
   * Work is being done to ship the first two FRC documents into the FIPs repo. 
   * A reminder that [changes to the Core Devs meeting](https://github.com/filecoin-project/tpm/discussions/104) will be implemented after v16. 
   * Zenground is going to lead a technical retro after v16; this will replace the retro previously held during Core Devs calls. 
     * Jennifer will organize the event and invite attendees in the next 1-2 weeks. 
* Security 
  * N/A
 
#### Updates on Skyr Network v16 
* Jennifer reported that the FVM audited was full and complete; core engineers and auditors have high confidence in the security of the system.

#### Updates on Skyr Network v16 
* Core Devs seem to have coalesced around supporting a large, FIP -heavy upgrade that emphasizes storage market development. 
* Proposed (and tentative) FIPs for inclusion in this upgrade include: 
   *  [FIP0029 - Beneficiary Address for Storage Providers](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0029.md)
   *  [FIP0034 - Fix PreCommi Deposit Independent of Sector Content](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0034.md) 
   *  [FIP0035 - Support Actors as BuiltIn Storage Market Clients](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0035.md)
   *  [FIP00XX - Gas Model for User Programmability](https://github.com/filecoin-project/FIPs/pull/317)
* The Lotus team is working to support the creation and prototyping of the [Fil+ decoupling FIP](https://github.com/filecoin-project/FIPs/discussions/313) 
   * This FIP has already been circulated with storage providers and the Fil+ governance teams, who were generally in support. 
   * Kaitlin reminded the Lotus team that this FIP will still need to be reviewed and accepted, regardless of the team's work on its design parameters. 

#### Discussion: Protocol Improvements for Programmability
* The CryptoNetLab team is currently working to enable storage markets and improve FVM capabilities and standards for interoperability. 
* Detail about the team's work on developing Filecoin storage markets can be found [HERE](https://pl-strflt.notion.site/Filecoin-storage-market-programmability-9ca43ca5fe714edaacb9b439978fb343).
   * Goals for this work include: 
     * Enable alternative, fully -capable storage deal markets. 
     * Support hetergenous market features, implementations, and policies. 
     * Guide standards for interoperable, composable market primitives and derivatives. 
     * Improve support for Filecoin Plus and other storage incentive schemes. 
* Summary of the storage market development roadmap: 
   * Fix pre-commit deposit ([Draft FIP](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0034.md))
   * Forward compatibility shim for pre-commit ([Discussion Post](https://github.com/filecoin-project/FIPs/discussions/380))
   * Beneficiary address ([Accepted FIP](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0029.md))
   * Actors as deal clients ([Draft FIP](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0035.md))
   * Decouple fil+ from markets ([Discussion Post](https://github.com/filecoin-project/FIPs/discussions/313))
   * Re-architecture for programmable markets ([Discussion Post](https://github.com/filecoin-project/FIPs/discussions/298))
* It seems likely that all of the above proposals- except for network re-architecture- could be included in a v17 scope if accepted. 
* Summary of network capabilities and interoperability roadmap:
   * Predicatable actor addresses ([Discussion Post](https://github.com/filecoin-project/FIPs/discussions/379))
   * Calling convention ([Discussion Post](https://github.com/filecoin-project/FIPs/discussions/382))
   * Remove unwanted actor code
   * Remove DeleteActor syscall 
   * Account abstraction ([Discussion Post](https://github.com/filecoin-project/FIPs/discussions/388))
   * Define exported methods for built-in actors
   * New syscalls 
   * Fungible token standard API ([Discussion Post](https://github.com/filecoin-project/FIPs/discussions/277))
   * Non-fungible token standard API
   * Universal profiles
* @anorth and the CryptoNetLab team are looking for community members to contribute to or lead this work! 
   * If you're interested in getting involved or learning more about any of this work, reach out to Kaitlin or Alex. 
   * A reminder: alternative ideas, challenges, and concerns are better when raised earlier. 
