# Core Dev Meeting #73 

**Meeting Date & Time:** Thursday 1, August 2024 16:00 UTC

**Meeting Recording:** See README

**Meeting Slides:** https://docs.google.com/presentation/d/1Vvg_1AfB5llM7ALxXfwTYWNlF9A7TBMmuYdORcxnX7g/edit#slide=id.g19157ff4f70_0_0


---

## [Create builtin Miner Actor method for returning maximum aggregate termination](https://github.com/filecoin-project/FIPs/discussions/1036)
#### Jonathan (Glif)

### Key Points
1. **Current Challenges**:
    - The existing method of computing termination penalties is complex and, in some cases, impractical.
    - The complexity adds unnecessary state to the Filecoin network without substantial benefits.
    - Accurate and cost-effective penalty estimations are crucial for the security and functionality of lending protocols.

2. **Proposed Solutions**:
    - Simplify termination penalties by creating constant time methods for estimation.
    - Consider reducing state within the Filecoin network through simplification.
    - Implement a percentage-based penalty system tied to the pledged Filecoin, making it easier to determine penalties and understand risks.

3. **Benefits**:
    - Simplification could reduce state and computation costs.
    - Lenders and storage providers could more accurately assess risks and values.
    - Simplified methods support the broader adoption and security of DeFi protocols in the Filecoin ecosystem.

4. **Implementation Considerations**:
    - Determine the appropriate percentage for penalties.
    - Address how to transition to the new system without disrupting existing agreements.
    - Consider forward-looking application versus retroactive application to minimize network volatility.

### Discussion Points
- **Economic Impact**:
    - The change should be analyzed to understand its effect on the economics of the network.
    - Simplification could result in higher or lower termination fees, which must be evaluated carefully.

- **Core Questions**:
    - What should be the primary methodology for penalty estimation?
    - How to ensure the changes do not negatively impact existing sectors?
    - What percentage of pledged Filecoin should be used as a termination penalty?

- **Core Devs Feedback**:
    - Emphasis on not altering the magnitude of termination fees unnecessarily.
    - Simplification should maintain fairness across network participants, regardless of their onboarding time.

### Next Steps
- Further discussion and refinement of the proposal.
- Potential creation of detailed scatter plots and historical data visualizations to support the proposal.
- Continued collaboration and active development to finalize and implement the simplified termination penalty system.


---
# nv23 Waffle Upgrade Updates
#### Orjan (FilOz)


### Presentation Overview
An update was provided on the NV23 rollout scheduled for August 6th. All implementations have shipped stable releases, indicating the upgrade is on track.

### Key Points
1. **Upgrade Schedule**:
    - NV23 upgrade is scheduled for August 6th.
    - All implementations have released stable versions.

2. **Included FIPs and Deprecations**:
    - A refresher was provided on the FIPs included in the NV23 upgrade.
    - Deprecation notice: Proof commit sectors will be deprecated in this network upgrade.
    - Communications have been sent to storage providers (SPs) via Slack and other channels to ensure they complete onboarding of deal sectors using non-DD flow before updating.

3. **Community Outreach**:
    - Encouraged amplification of the deprecation notice message in other channels to ensure a smooth transition for SPs.

### Discussion Points
- **Concerns on Deprecation Notice**:
    - Highlighted the risk that minor software implementers may not be aware of the deprecation notice for proof commit sectors.
    - Suggested that better coordination among implementers is needed to support network users and align priorities.

- **Engagement and Coordination**:
    - The importance of engaging with core apps and implementers to mitigate risks and ensure a smooth transition.
    - Emphasized the need for implementers to be aware of the upcoming changes and prepare their software accordingly.

- **Specific Concerns**:
    - Some SP minor software teams might be unaware of the included FIPs and the necessary preparations.
    - The need for a coordinated effort to ensure network stability and scalability while accommodating the needs of various stakeholders, including builders and storage providers.

### Next Steps
- **Further Discussions**:
    - Plan to discuss the concerns offline and in the implementer sync meetings.
    - Aim to improve coordination among implementers to support network users and align priorities for upcoming upgrades.

- **Immediate Actions**:
    - Amplify the deprecation notice message in various channels.
    - Ensure SPs are informed and prepared for the NV23 upgrade.

### Key Points
- **Upgrade Schedule**:
    - NV23 upgrade scheduled for August 6.
    - All implementations have shipped stable releases; on track for upgrade.

- **Included FIPs and Deprecations**:
    - Overview of included FIPs.
    - Deprecation of `proof commit sectors` in this upgrade.
    - Outreach to SPs via Slack and release notes.

- **Action Items for SPs**:
    - Finish onboarding deal sectors using the non-DD flow before upgrading.
    - Amplify the message in other channels for a smooth transition.

### Discussion Points

- **Communication and Coordination**:
    - Thanks for coordination efforts.
    - Concerns about implementers' awareness of deprecations.
    - Need for better communication to mitigate risks.

- **Engagement and Process Improvement**:
    - Improve engagement and coordination among developers.
    - Align priorities to support network stability and user needs.
    - Address misalignment on what's important for network users.

---

## Fast Finality and Monitoring

### Key Points

- **Monitoring Performance**:
    - Setup includes dashboard to monitor message broadcast rates and network state.
    - Consider making the dashboard public.

- **Acceptance Criteria**:
    - Need predefined criteria to promote fast finality to NV24.
    - Suggestion to formalize quantitative metrics and thresholds.

### Discussion Points

- **Community Involvement**:
    - Collect community feedback on metrics and acceptance criteria.
    - Build confidence in the new finality mechanism.

- **API Enhancements**:
    - Develop new APIs to differentiate finalized states from pending blocks.
    - Aim to improve user experience for token holders and builders.

---
# [nv24 Upgrade Planning](https://github.com/filecoin-project/core-devs/discussions/150)  

### Key Points
- **Planning for NV24**:
    - NV24 is expected to be the last upgrade for 2024.
    - Targeting late October or early November for deployment.
    - Aim to avoid conflicts with winter holidays to ensure community and implementer availability.

- **FIP Prioritization**:
    - Current focus on F3 as the top priority for NV24.
    - Open call for additional FIPs to be considered, with implementers providing feedback on resource availability.

### Discussion Points

- **Timeline and Resources**:
    - Tight timeline, with a goal to finalize by September 4th.
    - Limited resources available for additional requests unless they are urgent and high value.

- **F3 and Other FIPs**:
    - F3 is the primary focus due to its complexity and importance.
    - Inclusion of the baseline pledge calculation fix is also proposed.
    - Need for the FIP to go through the governance process and become formal.

- **Coordination and Communication**:
    - Emphasis on the need for better coordination among implementers.
    - Ensuring all relevant parties are aware of upcoming changes and their impact.

### Core Devs Feedback
- **Input Request**:
    - Community members encouraged to provide input on additional FIPs and priorities.
    - Implementers to assess feasibility and resource allocation for new proposals.


- **Next Steps**:
    - Continue planning and coordination for NV24.
    - Focus on finalizing F3 and other high-priority FIPs.
    - Maintain clear communication with the community and implementers to ensure a smooth upgrade process.



## Proposed Upgrade Timeline

- **Calibnet Deployment**: 1 October, 2024
- **Mainnet Upgrade**: 30 October, 2024

## Proposed Upgrade Name

- *Velocity* 
- *Tuk Tuk*



