# Core Dev Meeting #77 

**Meeting Date & Time:** Thursday 6, February 2025 16:00 UTC

**Meeting Recording:** See README

**Meeting Slides:** https://docs.google.com/presentation/d/1lTo9K5UT5tQMHhyfHAsKAN-PdmrIwjHFm_-97EQOG7I/edit#slide=id.g19157ff4f70_0_0


---

## [Reduce onboarding gas & align value accrual by removing batch balancer and replacing it with a per-sector fee](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0100.md)   
#### Irene (FilOz)

## Overview
- **Objective:** Remove constraints on batching and proof aggregation to **reduce per-sector gas costs** and improve network scalability.
- **Current Limitation:** Onboarding gas fees constrain the network's growth rate.
- **Key Changes Proposed:**
  1. **Remove Batch Balancer** to eliminate inefficiencies in gas cost calculation.
  2. **Introduce a New Per-Sector Fee** that is predictable and stable.
  3. **Lift Protocol Constraints** on batch aggregation limits.

## Implementation Details
### 1. Removal of Batch Balancer
- Eliminates batch fees in **pre-commit** and **proof-commit** methods.
- Ensures all **batching and proof aggregation** remain cost-effective.
- Storage providers can **batch or aggregate proofs without additional fees**.

### 2. New Per-Sector Fee
- **Replaces batch balancer fee** with a simpler per-sector fee.
- **Does not depend on base fees**, ensuring cost predictability.
- **Calculated as a constant fraction of circulating supply** (capped at 50% of block rewards).
- **Paid in daily installments**, reducing upfront onboarding costs.

### 3. Protocol Constraint Removal
- **Lifts gas limitations** on batch aggregation.
- Allows **higher sector onboarding rates** without artificial restrictions.

## Next Steps & Community Feedback
- Review the full **FIP proposal and discussion** linked in the title.
- Feedback and questions encouraged in the **FIP discussion thread**.
- Appendix available detailing **fee structure rationale**.

## Call to Action
- **Core Devs and Storage Providers:** Review and provide feedback on the proposal.
- **Developers:** Assess impact on onboarding strategies and economic incentives.




## F3 Activation and Incentive Proposal 
#### Steve (FilOz)
---
## [F3 Activation and Delegated Authority for Parameter Settings](https://github.com/filecoin-project/FIPs/pull/1112)
- **Current Status:**
  - Final stages of preparing F3 for Mainnet activation.
  - Requires latest code deployment to all nodes and finalization of network parameters.

- **Challenge:**
  - Default process requires **two network upgrades**: one for code deployment and another for parameter activation after passive testing.
  - To streamline, the goal is to consolidate this into **one upgrade (NV25).**

- **Proposed Solution (FRC0099):**
  - **Delegates authority** to set F3 activation parameters to the **Lotus, Forest, and Venus teams**.
  - Uses a **one-time, multi-signature smart contract** to set parameters **without an additional network upgrade**.
  - **Safeguards include:**
    - **Multi-stakeholder control** (Lotus, Forest, Venus must all agree).
    - **Delayed enactment** to allow for community review.
    - **Irreversible mechanism** once F3 is activated.

- **Next Steps:**
  - FRC0099 is open for review and feedback.
  - Community encouraged to review and verify **public keys** for contract ownership.

## [F3 Incentivization Proposal](https://github.com/filecoin-project/FIPs/discussions/1106) (FIP Discussion #110)
- **Objective:** Ensure high participation in F3 by **aligning incentives** with mining rewards.
- **Proposal:** Modify reward distribution so that **up to 10% of block rewards** are tied to **F3 participation** as verified by finality certificates.
- **Key Considerations:**
  - **Total miner rewards remain unchanged.**
  - Adjustments to prevent free-riding and ensure inclusivity.
- **Next Steps:**
  - Convert discussion into a **formal FIP** later this month.
  - Targeting **NV25** (April 2025) for implementation.

## Call to Action
- **Developers & Community Members:**
  - Review **FRC-99 PR** for delegated parameter setting and provide feedback.
  - Join discussions on **FIP #110** regarding F3 participation incentives.
- **Next Steps for NV25:**
  - Continue passive testing.
  - Finalize F3 activation parameters post-upgrade.
## nv25 Current Schedule - Discussion 
#### Orjan Roren (FilOz)
---
- **Two possible scenarios for NV25:**
  1. **F3-only upgrade** (if onboarding fees FIP does not reach Last Call in time).
  2. **F3 + Onboarding Fees upgrade** (if onboarding fees FIP is finalized in time).

- **Additional Testing for F3:**  
  - Further scaling tests on **Butterfly network** to ensure F3 stability before NV25 activation on Mainnet.

## Timeline Scenarios
| Scenario | Last Call Deadline | Mainnet Upgrade Target |
|----------|--------------------|------------------------|
| **F3-only (NV25)** | N/A | March 18, 2025 |
| **F3 + Onboarding Fees (NV25)** | February 14, 2025 | March 27, 2025 |

- **February 14, 2025** is the **cutoff date**:
  - If onboarding fees **FIP enters Last Call by this date**, it will be included in NV25.
  - If not, **NV25 will proceed with F3 only**.

## Risks and Considerations
- **Actor Code Freeze:**  
  - Some uncertainty remains around the code freeze date.
  - Implementation teams are reviewing the onboarding fees FIP to refine estimates.
  
## Next Steps
- Continue **F3 testing on Butterfly network**.
- Monitor **onboarding fees FIP progress** toward Last Call.
- Implementation teams to finalize **code freeze timeline**.

# Core Devs Call Notes: Restructuring Core Devs for Efficiency

## Objective
- Improve **Core Devs structure** to enhance its usefulness, clarity, and efficiency.
- Differentiate Core Devs from the **Implementers Working Group** to avoid overlap.
- Ensure the meetings are **focused, productive, and valuable** to participants.

## [Clarifying the Roles: Core Devs vs. Implementers Working Group](https://github.com/filecoin-project/core-devs/discussions/189)
| **Core Devs** | **Implementers Working Group** |
|--------------|--------------------------------|
| **Technical think tank** for discussions and brainstorming on network upgrades, FIPs, and architecture. | **Tactical working group** focused on implementation details and execution of network upgrades. |
| Includes **stakeholders beyond implementers**, such as researchers, economists, and ecosystem contributors. | Primarily consists of **client teams** (Lotus, Forest, Venus, etc.) and direct implementers. |
| Discusses **long-term upgrade trajectories**, technical challenges, and synthesizes feedback. | Ensures coordination between different client teams to **execute upgrades and maintain network health**. |
| Engages in **FIP review, security discussions**, and consensus on protocol improvements. | Focuses on **low-level implementation** and compatibility across different clients. |

## Key Discussion Points & Recommendations
- **Define and Document Core Devs' Scope:**
  - Establish clear objectives to **differentiate** Core Devs from the Implementers Working Group.
  - Publicly document Core Devs' purpose, key questions it addresses, and expected contributions.

- **Improve Meeting Format for FIP Discussions:**
  - Provide **reading material ahead of time** to allow for **better preparation**.
  - Suggested format:
    1. **Pre-meeting reading time** for key FIPs.
    2. **Presentation of the FIP** (concise overview).
    3. **Open Q&A and discussion.**
  - Helps attendees absorb complex proposals before live discussion.

- **Increase Asynchronous Engagement:**
  - Encourage discussions **on GitHub, forums, or async channels**.
  - Reduce meeting frequency if necessary, focusing on high-impact discussions.

- **Ensure Efficient Use of Participants' Time:**
  - Reduce mandatory attendance by **ensuring only relevant stakeholders attend per topic**.
  - Maintain a **D.R.I. (Directly Responsible Individual) structure** for each key area to bring expert perspectives.

## Next Steps
- **Continue gathering feedback** on the structure and purpose of Core Devs.
- **Implement a structured meeting format** for FIP discussions.
- **Clarify public documentation** on the distinctions between Core Devs and the Implementers Working Group.

## Call to Action
- Core Devs members are encouraged to **contribute to the ongoing GitHub discussion** on restructuring.
- Participants should share **suggestions for improving meeting efficiency and engagement**.
- Async participation remains open for those unable to attend live discussions.




---
