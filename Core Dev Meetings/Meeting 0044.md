# Filecoin Core Devs Meeting #44 - 2022-06-02

**Meeting Date/Time:** Thursday, June 2nd 2022, 16:00 UTC & Friday, June 3rd 2022, 00:00 UTC

**Meeting Recording:** See README

**Meeting Slides:** https://docs.google.com/presentation/d/1HyFcGh3h3uxkYDRFutWFyqX1_4U7uG70cxSNDMK1kTM/edit?usp=sharing

**Attendance:** Forest (Chainsafe), Lotus (Protocol Labs), Filecoin Foundation, and Community representatives

_These meeting notes are cumulative across both Meetings 1 & 2._

### Updates and Ideas from Filecoin Implementation Teams

#### Venus
* Updates to Venus-Market and Venus-Cluster remain ongoing. 
* Team has integrated FVM changes and has synced to butterflynet.
#### Forest 
* Making great progress with actor testing; looking forward to beginning integration tests. 
  * Half the team will work on integration testing, while the other half prepares Forest for v16. 
#### Lotus 
* Shipped monthly feature release, which includes a few small bug fixes. 
* Released FVM rc-2, and upgraded butterflynet on Tuesday, May 31. 
* Beginning to work with community members to test some new upgrade requriements. 
* Expect to upgrade to calibration net around June 16.

#### Filecoin Foundation 
* Governance 
   * All of the FVM FiPs finished Last Call and have been accepted! 
   * Alex North from the CryptoNetLab team has added several large FIP drafts; check the [Discussion Forum](https://github.com/filecoin-project/FIPs/discussions) to review! 
* Security 
  * N/A
 
#### Updates on Skyr Network v16 
* Butterflynet has been upgraded! 
* The team is currently looking at a mainnet upgrade in late june, early July. 
   * All work is currently on track, but the timeline remains tentative.  This is a huge upgrade, so the timeline will continue to repsond to any and all security or usability requirements. 

#### Updates on Skyr Network v16 
* The dicussion post for v17 can be found [here](https://github.com/filecoin-project/tpm/discussions/91). 
* There are two potential scopes being discussed: 
   * A small, 'community' upgrade with few FIPs, for the purpose of onboarding community members to new upgrade requirements. 
     * Implementation teams should already be readying communhity members for v16.  Is another 'practice' upgrade really necessary?
     * Is the effort required to plan and implement a network upgrade, with very little network change, a valueable use of resources?
     * Would a small, community
   * A large, FIP -heavy upgrade on a longer timeline to better prepare the network for FVM M2.
     * We need to be careful with determining this scope, so that implementation teams are able to accommodate all FIPs while also fixing any resulting FVM bugs. 
* A larger update with a clearly defined scope, and a harder timeline, is the group's soft preference. 
   * We may want to add a final submission date for FIPs, so there are no surprises from teams that haven't communicated their work. 
   * We may also want to explore creating impelmetnation plans within FIP drafts, to cut down design time during network upgrades. 
#### Proposed Updates to Core Devs Call
* There are several challenges that we currently have with the Core Devs call, in its current format: 
   * Almost all attendees are implementers, which is not representative of the broader network and its needs. 
   * The current value of the call is unclear, particularly since current attendees frequently speak with each other and collaborate outside of the meeting. 
   * Core Devs have a privileged position within the network, but it's currently unclear who is a Core Dev and how they're supposed to operate. 
* To address these issues, Kaitlin proposed: 
   * A strict designation for Core Devs, with broader network representation and an attendance requirement. 
   * A once per month meeting, for a longer period of time, with fewer updates and more presentations about engineering topics and prerogatives. 
* To accommodate these changes, implementers were encouraged to set up weekly scrum meetings between themselves to share updates and unblock challenges.
* If accepted, changes to the Core Devs meeting would be implemented after v16. 

#### Proposal: Filecoin Request for Comment 
*  A Filecoin Request for Comment (FRC) is a non-consensus bound protocol standard. 
*  Brenda discussed how Boost could be the network's first FRC, and asked for input as to what materials should be included in the FRC documenmt. 
*  More information about the FRC proposal and workflow can be found [HERE](https://github.com/filecoin-project/FIPs/discussions/378). 
