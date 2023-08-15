# Core Dev Meeting #60 

**Meeting Date & Time:** Thursday 3, August 2023 16:00 UTC

**Meeting Recording:** 

**Meeting Slides:** https://docs.google.com/presentation/d/1gtm7RJSYspInJ3AyR8PhmNX9iPvESuzkguVBDHfV6tk/edit#slide=id.g2555fd321ee_0_0


## Switching to a new DRand  

**Facilitated by Patrick McClurg (Protocol Labs)**

**Premise**
Patrick McClurg introduced a new DRand network that emits randomness every 3 seconds instead of the previous 30 seconds. This network has been running in parallel since March and is set for transition within the Filecoin network.

**New Network Features**
**Increased Speed**: The new network emits randomness every 3 seconds, increasing efficiency.
**Transition Plan**: An FIP for the transition to the new network is merged but not yet accepted.
**Sunsetting the Old Network**: Plans are in place to retire the existing DRand network.
**Compliance Changes**: Small compatibility changes are being made to comply with specific RFCs.
**Time-Lock Encryption**: This new feature has been under promotion for a year and is waiting for acceptance.
**Stateless Round Verification**: The new network's beacons are standalone, enabling easier verification.
**Potential for Faster Block Times**: The new network could enable block times as fast as 3 seconds for the Filecoin network.


---

**Technical Changes**
**Client Dependency Update**: Switching requires updating the DRand client dependency, mainly in the Go world.
**Consumption Change**: The Filecoin network would need to consume every tenth DRand epoch instead of every epoch.
**Block Height Setting**: A specific block height for the switch needs to be determined, building on previous experience.
**Outstanding Questions**: Questions remain about the testing pipeline and required upgrades.


---





## [Beyond FEVM: Additional Runtimes & Native Actors](https://github.com/filecoin-project/FIPs/discussions/769)
#### Facilitated by Stebalien (Protocol Labs)




**Background/Premise**
The meeting involves Steven's discussion about the ongoing development efforts, specifically related to the integration of WebAssembly (Wasm) with the blockchain platform. The talk highlights challenges, possible approaches, and considerations around the deployment of native actors and WebAssembly interpreters. These efforts are part of enhancing blockchain functionality, security, and performance.


**Challenges and Ongoing Efforts**:

Steven outlined the work around deploying native actors in the blockchain, including the consideration of WebAssembly.
Identified three core problems related to the compilation, cost charging (gas), and intricacies of Wasm.
Addressed potential performance improvements, risk factors, and complexity in enabling more native to WebAssembly actors.

**Potential Approaches**:

**Short-Term Approach**: Refraining from deploying native actors, considering immediate implications and potential risk factors.
Soonish Approach (Proposed): Introducing a simplified process for contributing actors, aimed at a lighter-weight and more accessible system. Targeted for near-term implementation.
**Midterm Approach**: Deployment of a WebAssembly interpreter around next year. Slower but offers an alternative for specific needs.
**Long-Term Approach**: Fully permissionless fast deployment of actors, expected around 2024, but still marked by complexity and unknowns.

**Other Key Points**:

Discussions around gas fees, compilation challenges, concerns over malicious native actors, and considerations around API exposure.
The need to be cautious and deliberate in implementing these changes, considering potential impacts on users and the broader system.

**Next Steps:**

* Further Discussion and Decision Making: Exploring the soonish approach of permission-contributed actors and considering the feasibility of intermediate steps.
* Exploration of Alternative Solutions: Analyzing all four outlined paths, including the viability of the midterm approach of shipping an interpreter.
* Engagement with Potential Users: Encouraging feedback from potential users who are part of the call and the wider community to influence the direction and priorities.
* Ongoing Development and Testing: Continuation of development, refinement, and testing of chosen approaches, with careful consideration of security, efficiency, and functionality.




---

## **[FIP0067: PoRep Security Policy & Replacement Sealing Enforcement](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0067.md)** 
**Facilitated by Kubuxu** 



Discussion on FIP0067 and its implications. Replacement of FIP0047 and simplification of PoRep Security Policy.

#### Introduction to FIP0067
Replaces FIP0047, simplifying PoRep Security Policy. The primary change involves no scheduling of replacement sealing; Storage Providers must seal within 1.5 years.

#### Impact on Storage Providers
Storage Providers are not required to periodically refresh sector proof. They have the freedom to choose sequencing as long as they stay on schedule.

#### Failure Consequences
Failure to adhere to the schedule initially results in recoverable faults, with continued failure leading to the termination of sectors.

#### Simplifications
Scheduling is no longer required, reducing state and bookkeeping. Immediate implementation is not mandatory but considered beneficial. Two aggregate state variables simplify the execution mechanism.

#### Migration Considerations
The introduction of placeholders can ease future migration. However, migration will be necessary for populating MinerState.IntialOldSectors based on expiration greater than 1.5 years.

#### Conclusion
FIP0067 provides a flexible and streamlined approach to PoRep Security Policy. The meeting ended with a collective understanding of the new policy's requirements and implications.

#### Actions/Follow-ups
Further review of FIP0067 details is needed. Consideration of implementation strategies and migration needs will be an ongoing focus.



# 
## [Network v21 (Watermelon Upgrade) Discussions](https://github.com/filecoin-project/core-devs/discussions/140)
**Facilitated by Lucky Nwachukwu & Kaitlin Beegle (Filecoin Foundation)**



#### Proposed FIPs for Inclusion in nv21
The following Filecoin Improvement Proposals (FIPs) are being considered for inclusion in the nv21 Watermelon network upgrade:
- [FIP0052: Increase Max Sector Commitment to 3.5 years](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0052.md)
- [Add Batch Balancer Parameter Recalibration to FIP0057](https://github.com/filecoin-project/FIPs/pull/673)
- [FIP0059: Synthetic PoRep](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0059.md)
- [FIP0063: Switching to new Drand mainnet network](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0063.md)
- [FIP0065: Ignore built-in market locked balance in circulating supply calculation](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0065.md) 
- [FIPXXXX Allow SPs to move partitions between deadlines](https://github.com/filecoin-project/FIPs/discussions/735)
- [SnarkPack SnapDeals](https://github.com/filecoin-project/FIPs/discussions/752) (No FIP draft yet)

#### Timelines
The following key dates have been established for the upgrade process:
- **Last Call for All FIPs:** Sept 15
- **Code Freeze:** Sept 28
- **Calibnet Upgrade:** Oct 10
- **Mainnet Upgrade:** Nov 7

#### Conclusion
The nv21 Watermelon network upgrade is in active planning, with specific FIPs under consideration. Key dates have been set to guide the process. Collaboration and feedback on the selected FIPs are encouraged to ensure a smooth transition.

## Governance Updates 
- Community Governance Call is is August 28- register [here](https://fil-org.zoom.us/meeting/register/tZMkf-2qpjIqEt3nkeKh_7f7_F6wPm76zbTw)
- Join the Fil-Gov channel [here](https://filecoinproject.slack.com/archives/C0535S9TUUF)
- Dates have been announced for #FilDevSummit23 with two regional hubs in Singapor and Iceland, read more [HERE](https://t.co/yZsV4UIq01)


 










---
