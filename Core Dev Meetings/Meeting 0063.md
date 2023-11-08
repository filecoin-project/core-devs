# Core Dev Meeting #63 

**Meeting Date & Time:** Friday 3, November 2023 00:00 UTC

**Meeting Recording:** See README

**Meeting Slides:** https://docs.google.com/presentation/d/1AswiN0TNBTLX8Lg-O9D_PsyJN8HLNVtKFtBQ5v1htbw/edit#slide=id.g19157ff4f70_0_0



---





## [Pledge baseline error & mitigations](https://github.com/filecoin-project/FIPs/discussions/847)
#### Alex North & Vik Kalghatgi (Protocol Labs)





## Premise

The exponential baseline function, crucial to consensus pledge calculations, is designed to double yearly.
As the exponential growth rate of the baseline outpaces other growth metrics, it drives the consensus pledge and locked collateral towards zero.
This unintended consequence would compromise consensus security and lead to massive inflation with significant impact on exchange rates and stakeholder profits.

## Governance approach and community involvement  

A transparent and open governance process for the FIP was advocated to maintain community involvement and awareness. However, the core developers' decisive role in evaluating the change's necessity and timing was affirmed.

The governance process will proceed with the understanding that the discrepancy in sector pledges is a non-issue from a protocol standpoint, as the existing mechanism already accounts for variability. 

There was a discussion on the governance approach for FIPs that concern security, highlighting the balance between public disclosure and the risk of exploit. The suggestion was to document the governance process for security FIPs more explicitly, recognizing the unique nature of this FIP due to its low exploit risk but high importance for long-term security.

## Action Items

- Publish the draft FIP with a detailed specification of the proposed pledge calculation changes.
- Initiate a community discussion on the draft FIP, with an emphasis on gathering a wide range of inputs and exploring new ideas.
- Define and document a clear governance process for handling security-critical Fips, incorporating community feedback while ensuring network security is not compromised during the interim period.
- Plan for the governance and implementation phases, ensuring network participants have clarity on operational and economic expectations.

## Next Steps 

- An amendment to the consensus pledge calculation is proposed, bifurcating it into two segments, one influenced by the baseline and the other not, to prevent the pledge from trending to zero. This approach is inspired by the minting rate calculation, which has a set floor value to maintain security and operational predictability.
- The draft FIP, reflecting these changes, is prepared for publication, subject to the call's feedback. The aim is to have the governance process for the FIP completed by December and the changes implemented early next year, post-baseline function crossover.
- The need for the baseline function to accurately mirror real-world storage growth was discussed. It's recognized that constant adjustments to match current growth rates set a precedent for frequent, reactive changes that may not be sustainable.
- Suggestions were made for a more permanent redesign of the reward calculation model that does not depend on growth prediction. This redesign would be a more substantial and long-term project, requiring thorough community input and consideration.


## [FIP0001v2 - Filecoin Governance and Guidelines](https://github.com/filecoin-project/FIPs/pull/850)
#### Kaitlin Beegle (Filecoin Foundation)
---

### Governance Tool and Procedure Updates
- A plan to revise the existing FIP0001 with an updated governance procedure was discussed.
- The proposal now is to submit changes as a new FIP file, rather than amending FIP0001.

### Engagement and Feedback
- Core developers are urged to review the open PR against the new FIP for governance updates.
- Appreciation was expressed for the current active engagement and thoughtful suggestions.

## Content of Governance Proposal

### FIP Categorization
- Introduction of five FIP categories to streamline the governance process by complexity levels.
- The new categorization aims to provide clarity for community interaction and ensure appropriate scrutiny for network changes.

### On-Chain Voting Tool
- Presentation of an on-chain voting tool that is currently in beta.
- Links to the draft spec and user interfaces were provided for review.

### Community Guild Concept
- Establishment of a community guild as a decentralized body for governance and review.
- The guild is meant to handle more contentious FIPs and aid in the decentralization of decision-making processes.

## Implementation Details

### Review and Testing
- Call for extensive review and testing of the new governance tools by core developers.
- Emphasis on the necessity for the tools to be robust and functional before full adoption.

### Documentation and Accessibility
- Upcoming documentation to be made available on Filecoin docs, not the Filecoin spec.
- The documentation will detail the governance changes and provide a repository for community feedback and questions.

### Rollout Plan
- A detailed rollout plan for the new governance process was outlined, with a target to have all changes ready for a "last call" by the end of the month.
- The plan includes a period for feedback incorporation and system tweaks during early deployment.

## Questions Raised

### Motivation and Context for Changes
- A request for detailed resources on the motivations and expected improvements from the proposed governance changes.
- A need for comprehensive documentation that enables a meaningful review process.

### Spec Details and Timeline
- Concerns were voiced about reviewing the changes without full spec availability.
- A timeline for sharing additional spec documentation and implementation details was requested.

### Documentation Location
- Clarification on where the new documentation will be housed, given the current maintenance status of the Filecoin spec repository.

### Core Dev Role Post-Changes
- Discussion on how the core developers' role may evolve with the new governance structure.
- Consideration of whether core devs will have more freedom to focus on technical work, separate from governance responsibilities.


# 
## [Network v21 (Watermelon Upgrade) Discussions & updated upgrade timelines](https://github.com/filecoin-project/core-devs/discussions/140)
**Facilitated by Scott Conner, (Protocol Labs)**



#### Proposed FIPs for Inclusion in nv21
The following Filecoin Improvement Proposals (FIPs) are being considered for inclusion in the nv21 Watermelon network upgrade:
- [FIP0052: Increase Max Sector Commitment to 3.5 years](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0052.md)

- [FIP0059: Synthetic PoRep](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0059.md)

- [FIP0070: Allow SPs to move partitions between deadlines](https://github.com/filecoin-project/FIPs/pull/740/commits/bd6c62d46009f586a661d3e1c797f84bb8cfb59a) 
- [FIP0071: Deterministic State Access (IPLD Reachability)](https://github.com/filecoin-project/FIPs/discussions/735)
- [FIP0072: Improved Event Syscall API](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0072.md)
- [FIP0073: Remove beneficiary from the self_destruct syscall](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0073.md) 
- [FIP0075: Improvements to the FVM Randomness syscalls](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0075.md)



## Updated Timelines


- **Schedule Announcement**: Network Version 21, dubbed "Watermelon," is scheduled for Mainnet activation at Epoch 3431940, which translates to Wednesday, November 29, at approximately 13:30 UTC.
- **Enhancement Details**: The upgrade encompasses substantial protocol enhancements to solidify the network's infrastructure and introduce new features that contribute to Filecoin's scalability and user experience.

## Calibration Network Patch Deployment

- **Issue Discovery and Patching**: A critical issue was identified within the Calibration network where partitions containing expired sectors necessitated compaction for movement. This issue has been systematically addressed by the combined efforts of the Venus, Lotus, and Forest teams.


## Calibration Network Upgrade Plans

- **Upgrade Necessity**: The identified issue led to a consensus-breaking change, requiring an upgrade to the Calibration network to ensure continuity and stability.
- **Upgrade Timing**: The upgrade is slated for Epoch 1070494, set for Wednesday, November 8, at around 11:00 UTC.
- **Operational Impact**: The calibration upgrade is a preemptive measure to prevent the bug's manifestation on Mainnet, ensuring a seamless transition during the Mainnet upgrade.

## Concluding Remarks and Next Steps

- **Continuous Monitoring**: The teams will continue to monitor the impact of these changes closely and provide support throughout the transition.
- **Call for Action**: Developers and network participants are encouraged to review the upgrade details, prepare for the transition, and adjust their operations accordingly.
- **Documentation and Support**: Comprehensive resources and documentation will be provided to facilitate understanding and navigation of the new features and changes introduced with the Watermelon upgrade.
- **Feedback and Collaboration**: Active collaboration with the community is requested to gather feedback, answer queries, and refine the upgrade process.


## Governance Updates 
- [FIP0074: Remove cron-based automatic deal settlement](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0074.md) is ready for Last Call. 
- [FIP0076: Direct data onboarding](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0076.md)is also ready for Last Call. 

Core Devs are encouraged to provide technical reviews before both FIPS enter Last Call. 



 










---
