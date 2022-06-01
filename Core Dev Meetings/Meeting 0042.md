# Filecoin Core Devs Meeting #42 - 2022-05-05

**Meeting Date/Time:** Thursday, May 5th 2022, 16:00 UTC & Friday, May 6th 2022, 00:00 UTC

**Meeting Recording:** See README

**Attendance:** Forest (Chainsafe), Lotus (Protocol Labs), Filecoin Foundation, and Community representatives

_These meeting notes are cumulative across both Meetings 1 & 2._

### Updates and Ideas from Filecoin Implementation Teams

#### Venus
* The team is working to support the FVM; currently synced on caterpillarnet. 
* Work on VenusCluster has also been ongoing: 
  * WindowPost and WinningPost are now separated. 
  * TinyGO SDK support pack works and a demo was successfully completed. 
* Venus Market was updated to support new market and developer activities.  
#### Fuhon
* Kaitlin alerted the other implementation teams that the Fuhon project has been suspended. 
* No work is ongoing; there are no future plans for work on a C++ implementation to be resumed, though the repos will remain public. 
* For more information or to enquire about this decision, please reach out to Kaitlin directly. 
#### Forest 
* Working to improve test coverage for builtin actors 
  * Completed four of the actors; working on the last actor, the miner actor. 
#### Lotus 
* Working on the release for rc-1.15.02, includes windowpost worker and other monthly enhamcenents. 
* Working closely with Forest team on test actors coverage. 
* The team is also collaboorating on the new actor bundle. 
* A new, mandatory release will be made available; a PR in the repo later today. 

#### Filecoin Foundation 
* Governance 
  * Currently waiting on finalization for FVM FIP last call status! 
  * We are working on a Filecoin Request for Comment (FRC) process to support new community standards. 
* Security 
  * Parth is launching a 'hall of fame' feature to the Filecoin Bounty Board
 
#### Updates on Skyr Network v16 
* The timeline remains highly tentative; the timeline is updated according to the development timeline, with a priority placed on testing requirements. 
   * An external audit remains ongoing. 
   * Jennifer proposed that the testing flow in FIP0032 be updated to accommodate new thinking about testing needs, shortening the timeline so that community testers can participate on butterflynet more quickly. 
* Currently, only Venus and Lotus are planning to be able to join the v16 upgrade on mainnet. 
* Aayush proposed a series of protocol -level bug fixes for the network. 
  * One bug addresses a DRAND bug that was originally proposed during the Chocolate network upgrade, but deprioritized at the time. 
  * The proofs team at Protocol Labs will push a brief proofs change; details will be shared with implementers.  
