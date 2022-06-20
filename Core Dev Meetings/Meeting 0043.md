# Filecoin Core Devs Meeting #43 - 2022-05-19

**Meeting Date/Time:** Thursday, May 19th 2022, 16:00 UTC & Friday, May 20th 2022, 00:00 UTC

**Meeting Recording:** See README

**Attendance:** Forest (Chainsafe), Lotus (Protocol Labs), Filecoin Foundation, and Community representatives

_These meeting notes are cumulative across both Meetings 1 & 2._

### Updates and Ideas from Filecoin Implementation Teams

#### Venus
* The team is working to support the FVM; currently synced on caterpillarnet and ready to join calibnet upgrade. 
* Shipped several enhancements to Venus-Market module, including support for object storage. 
* Venus-Cluster now supports separate winningPoster and winningPosted. 
#### Forest 
* Collaborating with Lotus on the Go actors testing. 
  * Hundreds of tests left to complete. 
  * Have already discovered several mismatches between Go And Rust actors, but no major issues or concerns. 
#### Lotus 
* Shared a public THANK YOU to the Forest team for all of the hard work on the Rust actors transition! 
* Shipped 01.15.rc-2 and began testing 01.15.rc-3. 
* The team has begun to receive reports of nodes falling out of sync with greater frequency. 
   * The new rc releases should address this issue; if you're encountering sync issues, it's recommended that you upgrade. 
* The team continues to prepare for FVM impelementation.  

#### Filecoin Foundation 
* Governance 
  * This is the final week for all FVM FIPs in last call!
  * New documentation is forthcoming for the new Filecoin Request for Comment (FRC) procedure, which will apply to the Boost and Indexer Advertisement Protocol FIPs that were discussed in previous meetings.
* Security 
  * N/A
 
#### Updates on Skyr Network v16 
* The FVM code, including ref actors, have been frozen; the team is preparing release candidates with various bug fixes and the entire FVM codebase. 
   * We expect butterflynet to be launched no later than June 2. 
   * We expect 5-6 weeks between butterflynet and mainnet upgrade. 
* Updates from the FVM Engineering team: 
   * Released FVM 01.00.rc-1 and SDK 01.00.rc-1, the two public entrypoints for both actors and implementations for FVM! 
     * FVM and SDK versions 01 applying to FVM milestone 1; the versioning begins at 1, not 0.    

#### Open Discussion: Pre-Planning for v17
* Given the scope of the v16 upgrade, and that new actors requires a new upgrade procedure for community members, Jennifer suggested that v17 be scoped as a small 'community' upgrade. 
  * The upgrade would be very FIP -lite, and would mostly incorporate bug fixes and small implementation enhancements (including gas optimizations).
  * Core Devs were generally open to this idea, but suggested that there may be too many important FIPs that need to be implemented before FVM M2.  As a result, there may not be enough time to do a FIP - lite upgrade. 
* To participate in the conversation about planning for v17, see [HERE](https://github.com/filecoin-project/tpm/discussions/91). 
