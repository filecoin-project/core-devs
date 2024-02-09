# Core Dev Meeting #66 

**Meeting Date & Time:** Thursday 1, February 2024 16:00 UTC

**Meeting Recording:** See README

**Meeting Slides:** https://docs.google.com/presentation/d/1Dl7JhZmmwzRNcqVK29Vyf3-oLtFlcdspgj9AY8EoDWY/edit?pli=1#slide=id.g2b4dcb02b4d_0_0



---

## Core Dev Structure & Decision-Making 
#### Will Scott (Protocol Labs)

# Core Dev Meeting Notes on Decision Making Process

## Premise

The discussion was initiated due to concerns around the decision-making process for FIPs (Filecoin Improvement Proposals) entering last call timelines and their alignment with the network upgrade schedules. A key issue highlighted was the lack of a rapid response mechanism for decisions that need quicker consensus outside the monthly core dev meeting cadence. This gap was felt in situations requiring immediate action or in cases where a decision had to be disseminated quickly to prevent ambiguity.

## Summary of Ideas and Key Opinions

- **Minimum Participation Duration**: A proposal was made to establish a minimum duration for considering a proposal as "socialized." If there is no objection after a specified period (e.g., a week), it could be assumed that the proposal has been accepted by core devs. This aims to clarify the difference between lack of response and explicit consent.

- **Designated Communication Channels**: The necessity to designate specific channels (e.g., core dev Slack, regular meetings) for discussions and decision-making to ensure that all core devs have access to and monitor these channels regularly.

- **Minimum Thresholds and Timelines**: It was suggested that there should be a minimum timeline for proposals to be presented to core devs, mirroring the last call process, to ensure adequate time for review and feedback. The idea of requiring approvals from fit editors or core devs via PRs before officially moving a FIP to last call was also discussed.

- **Centralized Notification and Discussion Platform**: The importance of having a central place for making decisions was emphasized, where notifications and discussions can be centralized to ensure that all core devs are aware and can participate in decision-making processes.

- **Asynchronous and Synchronous Discussions**: The balance between asynchronous discussions (to accommodate global time zones and remote work) and the potential need for ad hoc meetings for more controversial or complex decisions was highlighted.

- **Polls for Quick Consensus**: Implementing simple polls for core devs to express their opinions on proposals was suggested as a method to gauge consensus quickly and efficiently.

## Next Steps

1. **Establish Minimum Duration for Socialization**: Define a clear timeframe within which proposals must be discussed and considered for feedback before moving forward.

2. **Clarify Designated Communication Channels**: Officially designate specific channels for decision-making discussions and ensure all core devs are aware and agree to monitor these channels regularly.

3. **Implement Approval Process for Last Call**: Explore the feasibility of requiring approvals via PRs from designated editors or core devs before moving a FIP to last call, potentially automating notifications for last call commencements.

4. **Centralize Decision-Making Notifications**: Develop a centralized platform or utilize existing tools more effectively (e.g., issue trackers, dedicated Slack channels) for decision-making discussions and notifications.

5. **Encourage and Facilitate Asynchronous Discussions**: Promote the use of asynchronous discussions for decision-making to accommodate the global distribution of core devs, while also being open to scheduling ad hoc meetings for more urgent or complex discussions.

These steps aim to enhance the decision-making process, ensuring timely and efficient consensus among core devs while accommodating the distributed nature of the team and the need for rapid action in certain scenarios.
 





## [EC Finality Calculator](https://github.com/filecoin-project/FIPs/discussions/919)
#### Guy Goren & Jorge Soares (Protocol labs)
---
## Premise and Problem Identified

The introduction of the Basic Finality Calculator was discussed, addressing the ongoing FRC (Filecoin Request for Comments) discussion with plans to submit the FRC soon. The primary focus was on achieving fast finality, identified as a critical need for many applications within the Filecoin ecosystem. The existing challenge revolves around determining when a transaction is considered safe and irreversible, a vital factor for bridges and off-chain actions, aiming to improve transaction latency for better usability.

## Summary of Ideas and Key Opinions

- **Finality and Safety in Blockchain**: The concept of finality in blockchains, especially those with probabilistic finality like Filecoin, was discussed. Finality ensures a transaction cannot be reversed, which is crucial for external dependencies. Traditional heuristics for determining finality, such as waiting for a certain number of blocks, vary across different blockchains and use cases.

- **Finality Calculator Mechanism**: The proposed Basic Finality Calculator aims to provide a more nuanced understanding of transaction finality based on chain conditions. It analyzes chain history in three parts: distant past, recent past, and future, offering a dynamic and rigorous probabilistic analysis to determine the safety of transactions. This approach contrasts with static, hardcoded constants, allowing for a responsive and adaptable finality assessment.

- **Practical Implications**: The calculator enables significant reductions in wait times for finality under normal chain conditions (from 900 epochs to approximately 30 epochs), equating to a transition from over 7 hours to about 15 minutes. It accommodates varying levels of desired certainty tailored to the value or nature of transactions, enhancing flexibility and efficiency in operations.

- **Application and Implementation**: Highlighted as a client-side solution requiring no protocol changes, the calculator serves as a bridge to faster finality while waiting for future protocol deployments. It remains useful as a fallback mechanism, offering sustained benefits for transaction processing speed and reliability.

## Next Steps

1. **Feedback on FRC Discussion**: Encouragement for core devs and community members to contribute feedback on the ongoing discussion within the FRC forum. This feedback loop is crucial for refining both theoretical foundations and the practical implementation of the finality calculator.

2. **Finalization and Submission of FRC**: Commitment to finalizing the theoretical derivation of the finality calculator and submitting the complete FRC within the upcoming week. This step is key to formalizing the approach and integrating community insights.

3. **Implementation and Experimentation**: Following the submission of the FRC, further emphasis on implementing prototype solutions and experimenting with the calculator in real-world scenarios. This practical application will be critical for validating the calculator's effectiveness and making any necessary adjustments.



# 
## [Network v22 (Dragon Upgrade) Discussions & updated upgrade timelines](https://github.com/filecoin-project/core-devs/discussions/148)
**Orjan Roren (Lotus)**

## Changes to NV22 Upgrade Timeline

### Technical Constraints and Reasons for Timeline Adjustment

- **Drand Testing**: The Drand change has not yet been tested with multiple client implementations on the same network, a prerequisite for the calibration network upgrade.
- **DDO Protocol Changes**: Significant protocol changes are pending full testing through client implementations. These changes are among the larger updates in this network upgrade.
- **Actors Code Freeze Delay**: The process fell behind by 2 days, impacting subsequent integration and testing phases.
- **Ecosystem Tooling Changes**: The introduction of DDO and Events necessitates extensive ecosystem tooling adjustments. Limited testing has been done on these changes, raising concerns about their stability and impact on ecosystem metrics.
- **Critical Infrastructure Migrations**: January saw critical infrastructure migrations, including the transition of calibration responsibilities to ChainSafe, affecting the readiness for the network upgrade.
- **Chinese New Year Impact**: The holiday period limits the ecosystem's testing and integration capabilities before the calibration network upgrade.

### Proposed Revision to Upgrade Timelines

- **Calibration Upgrade Date**: Suggested moving from February 20th to February 27th.
- **Mainnet Upgrade Date**: Suggested moving from March 18th to March 26th.

---

## General Discussion on Network Upgrades

### Approach to Future Upgrade Timelines

Discussions emphasized the importance of considering upgrade timelines as tentative, accommodating engineering constraints and unforeseen issues. Suggestions included:

- **Incorporating Buffer Times**: Adding buffer times in scheduling to handle delays.
- **Providing Upgrade Windows**: Offering upgrade windows (e.g., early March, mid-March) rather than exact dates to set realistic expectations.
- **Quarterly Upgrades**: Proposing quarterly upgrades for better preparation and resource management.
- **Fuzziness Until Month Ahead**: Keeping timelines flexible until a month ahead of the upgrade, then finalizing dates based on readiness.

### Contributions to Critical Network Infrastructure

Updates on critical network infrastructure included:

- **ChainSafe's Role**: ChainSafe has taken up significant operational responsibilities, including running the mainnet and calibration testnets.
- **Starboard's Expansion**: Starboard is extending its role to include more comprehensive network metrics and alerting systems for core devs.



The following Filecoin Improvement Proposals (FIPs) are being considered for inclusion in the nv22 Dragon network upgrade:
- [FIP0063: Switching to a New Drand Network](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0063.md)

- [FIP0074: Remove Cron-Based Automatic Deal Settlement](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0074.md)

- [FIP0076: Direct Data Onboarding](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0076.md) 
- [FIP0083: Add Built-In Actor Events in the Verified Registry, Miner & Market Actors](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0083.md)




## Upgrade Timeline

- **FIPs Last Call**: 15 Jan 2024
- **Code Freeze**: 2 Feb 2024
- **Calibnet Deployment**: 27 February 2024
- **Mainnet Upgrade**: 26 March 2024


https://github.com/filecoin-project/core-devs/blob/master/Core%20Dev%20Meetings/Meeting%200065.md




---
