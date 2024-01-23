# Core Dev Meeting #65 

**Meeting Date & Time:** Friday 19, January 2024 00:00 UTC

**Meeting Recording:** See README

**Meeting Slides:** https://docs.google.com/presentation/d/1ZTxTJ35IxFIcEGLL4vgB9COCnCphKioTNbt8Utei-1E/edit#slide=id.g19157ff4f70_0_0



---

## [Convert f090 Mining Reserve Actor to a Keyless Account Actor](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0085.md)
#### Jennifer Wang (Lotus)

## Premise

## Motivation
- **Background**: Initially, a pool of tokens was allocated as a Mining Reserve for the Filecoin economy. The community was designated to decide the token distribution through Filecoin improvement proposals (FIPs) or similar processes.
- **Current State**: The FIL mining reserve is held by f090, a multisig actor with 3 signers and a 2-signer approval threshold. These signers, who are also account actors with wallet keys, can unilaterally move funds or change terms, contradicting decentralized governance principles.
- **Issues**:
  - Centralization Risk: The control by three individuals opposes the decentralized governance ethos.
  - Security Concern: Potential economic harm to the Filecoin network if 2 out of 3 keys are compromised.
  - Operational Overhead: Managing reserve changes via signed transactions by msig signers is cumbersome and against decentralization.

## Proposal Details
- **Conversion**: Change f090 actor type from a multisig to a keyless account type (similar to f099).
- **Governance**: All changes to the mining reserve to be proposed and governed via FIPs and the network upgrade process.
- **Benefit**: Enhances network security by distributing control of 15% of the total network token supply from three individuals to the broader network participants.

## Security Consideration
- **Improvement**: Transfers ownership and control from individuals to network participants, bolstering security.
- **Implementation**: Anticipated as straightforward, ideally to be included in an upcoming network upgrade.

## Action Points
- **Feedback**: Solicit community feedback on potential downsides or overlooked aspects as a FIP draft has been opened and this improvement should be an easy one. 



## Core Devs Participation & Feedback
#### Kaitlin Beegle (Filecoin Foundation)
---


## Ecosystem Changes
- Acknowledgement of recent transitions in team dynamics and work interests within the ecosystem.

## CoreDev Group Purpose
- The group is positioned as an open-source community working group, designed to support collaboration.

## Adaptability of Group Operations
- Meeting times and communication standards, including the primary platform for updates (e.g., Slack), are open for adjustment to suit participant needs.

## Group Membership Management
- Members are encouraged to inform the group of changes in participation. 
- The policy for joining is based on existing members' consent.
- Emphasis on maintaining a robust meeting agenda and an updated participant list.

## Feedback and Participation
- Members are urged to communicate any changes or suggestions to improve the group's functionality.

## Action Items
- Members should provide feedback and communicate any changes in team compositions or individual participation.
- Assess if the current meeting time remains suitable for all members.


# 
## [FIP0001v2 Updates](https://github.com/filecoin-project/FIPs/pull/850)
**Kaitlin Beegle (Filecoin Foundation)**

### Key Discussions and Updates
- **Project Delay and Next Steps**: Original goal to open initial PR by mid-October was delayed due to unforeseen effects and changing dependencies. 
- **Workflow Change**: Approach to the workflow has been altered for transparency and efficiency. Emphasis is now on finalizing implementation details of the PR first, followed by finalizing the policy.
- **Deliverables Status**: Six high-order deliverables proposed as part of FIP0001v2 were outlined, including their current status and the need to adjust workflow communication.
- **Community Feedback and Iteration**: The proposal received significant comments, mainly from core developers, necessitating numerous unresolved changes. 
- **Flipping the Intended Workflow**: The approach is reversed from the usual process, focusing on finalizing implementation details before finalizing the policy.
- **On-Chain Voting Tool Development**: Development of an on-chain voting tool is underway, seen as critical due to Filecoin's token utility and ecosystem structure.
- **Filecoin Community Guild**: Establishing a body of community experts to decentralize FIP oversight, aiming for more codified, interpretable, and inclusive governance.

### Key Questions and Responses
- **Community Participation**: Encouragement for community members to join monthly governance calls, review on-chain tool specifications, and contribute to discussion threads and PRs.
- **Technical Review Challenges**: Addressing the low engagement in technical peer review and exploring potential incentives for more active participation.
- **Resource Allocation Concerns**: Discussion on the allocation of budgets and resources within the Filecoin Foundation, emphasizing the importance of governance projects and the need for financial transparency.
- **Editorial Limitations**: Acknowledgment of the limited number of editors for FIPs, highlighting the need for more contributions and possibly incentivizing editors.
- **Governance Challenges**: Discussion on the complexities of changing a governing system within such a large ecosystem and the prioritization of certain aspects due to resource constraints.

# 
## [Network v22 (Dragon Upgrade) Discussions & updated upgrade timelines](https://github.com/filecoin-project/core-devs/discussions/148)
**Jennifer Wang (Lotus)**




The following Filecoin Improvement Proposals (FIPs) are being considered for inclusion in the nv22 Dragon network upgrade:
- [FIP0063: Switching to a New Drand Network](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0063.md)

- [FIP0074: Remove Cron-Based Automatic Deal Settlement](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0074.md)

- [FIP0076: Direct Data Onboarding](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0076.md) 
- [FIP0083: Add Built-In Actor Events in the Verified Registry, Miner & Market Actors](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0083.md)




## Upgrade Timeline

- **FIPs Last Call**: 15 Jan 2024
- **Code Freeze**: 30 Jan 2024
- **Calibnet Deployment**: 20 February 2024
- **Mainnet Upgrade**: 18 March 2024







---
