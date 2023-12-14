# Core Dev Meeting #64 

**Meeting Date & Time:** Thursday 7, December 2023 16:00 UTC

**Meeting Recording:** See README

**Meeting Slides:** https://docs.google.com/presentation/d/1tVjmKWJWSOGpPVRfIouZCcSlrl0ItvX-NnojZHRbQVk/edit#slide=id.g2924b257204_0_0


---

## [Faster Finality in Filecoin](https://github.com/filecoin-project/FIPs/discussions/809)
#### Marko (Protocol Labs)



## Premise

# Fast Finality in Filecoin (F3) - High-level Design and Interactions with Expected Consensus (EC)

## Problem
Filecoin's mainnet Expected Consensus (EC) offers only probabilistic finality, similar to Bitcoin, meaning an epoch is never entirely final. Conventionally, a tipset 900 epochs old (approximately 7.5 hours) is considered "final". This lengthy finality period hinders user experience and limits application development on Filecoin. The probabilistic nature of finality also poses risks for external effects or cross-chain transactions.

## Goal
The F3 project aims to introduce deterministic finality in Filecoin, reducing it to about 1 epoch on expectation.

## High-Level Solution
The implementation of F3 alongside EC in the Filecoin client is proposed. This solution primarily involves changes to the EC protocol and its composition with F3, as detailed in specific design documents. Key components of this solution include:

- **EC/F3 Interface**: Storage providers running F3 feed their current canonical chain and a previously F3-finalized chain (base chain) to F3. The base chain defines the power table and seeds randomness for F3, while the canonical chain is proposed for finalization.
- **F3 Implementation/Consensus**: F3 establishes consensus on finalized tipsets, producing a Proof of Finality (PoF) for each tipset. The PoF is signed by a 2/3rd QAP majority, ensuring that more than 1/3rd of honest QAP considers the tipset final.
- **Changes to EC**: Participants commit not to reorganize finalized tipsets. EC continues to operate normally, even if F3 halts, maintaining its 900-epoch lookback for the power table.
- **F3 Decision Exchange**: Information about finalized tipsets and their PoF is disseminated to participants, light clients, and smart contracts. This synchronization allows external parties to verify the finality of recent tipsets without needing to validate the EC chain.

## Properties of F3
- Ensures network-wide consensus on finality.
- Produces verifiable proofs of finalized tipsets.
- Maintains EC operation, favoring availability over consistency.

## F3 Adversarial Model
- Addresses issues related to probabilistic finality and strengthens the network against potential attacks.

## Next Steps 

Community members are invited to contribute to the Faster Finality discussion after several weeks of intensive refinement of the specification. In the following days, the community can expect a formal FIP. Early feedback is encouraged. 

Relevant documentation to review are below: 

- [F3 High-level design](https://docs.google.com/document/d/1FzTNGG0N00RP80X0ARSmdUQLwe2iCS-EwxMrhAhqCbw/edit) 
- [GossiPBFT implementation of F3](https://docs.google.com/document/d/17FBkZzrVWZg2zmq3JJcSZdn7MfbAPC9Lv2FgG42omxo/edit#heading=h.pbllar7yf2rl) 
- [F3 Finality Decision Exchange subprotocol](https://docs.google.com/document/d/10i9tFremOSrZou9oO5A5wvu1uOy1lvFKbv8IsvoglR0/edit#heading=h.g8nngox3auow) 



---
# Drand Testing and Future Planning 
#### Will Scott (Protocol Labs)

## Background
Before the Mainnet launch, a series of drand disaster recovery exercises were conducted, including:

- **Halt of the Drand Chain**: The drand chain was intentionally halted for various durations to test alerting systems and recovery mechanisms.
- **Purpose**: These exercises were crucial in ensuring the network's resilience and preparedness for potential disruptions.

## Current Situation
- It has been three years since those initial tests.
- There is a growing need to re-run these exercises to rebuild and enhance operational readiness within the Filecoin network.

## Proposed Plan
- **Date**: The exercise is proposed for January 8th.
- **Execution**: 
  - Transition Butterflynet to use the drand 'incentinet' beacon.
  - Halt incentinet for 30 minutes, then restart it.
  - Subsequently, halt incentinet for 2 hours, then restart it.
  - After the tests, Butterflynet will return to using the production drand randomness.
- **Objective**: These tests aim to simulate drand failures and observe the network's response, particularly in terms of alerting and recovery.

## Next Steps
- **Communication**: A dedicated Slack channel is expected to be set up in the next week or two for coordination and communication related to these tests.
- **Preparation**: Participants and network operators will be encouraged to prepare for these exercises to ensure comprehensive testing and feedback.

---

# [Retrieval Incentives](https://github.com/filecoin-project/FIPs/pull/862) 
#### Will Scott (Protocol Labs)



### Defining Retrieval Expectations
- **Objective**: Will Scott emphasized the need for defining clear tiers for retrieval expectations as a step towards better incentivizing retrievals.
- **Approach**: The proposal includes collapsing the broad spectrum of retrievals into a smaller, more defined subset of categories. This categorization includes determining whether content is offline, frequently retrieved (hot), or archival.
- **FIP Format**: The concept has been structured into a Filecoin Improvement Proposal (FIP) format for clearer implementation and standardization.

### Proposal for Consensus Change
- **Data Activation Tagging**: In the DDO environment, data activation will be tagged with categories indicating whether the data is expected to be offline, archival, or publicly available.
- **Client Visibility**: This change allows clients to see the active data from a provider and assess the provider's bandwidth commitments. It aids in understanding whether the provider has the necessary bandwidth capacity to store the client's data set.

### Discussion and Open Questions
- **Standardization**: There was a focus on how to standardize these categories across different implementations. The standardization is crucial for building markets and ensuring uniform expectations across various layers of the Filecoin stack.
- **Governance and FRCs**: Will Scott pointed out that FRCs often get merged with little discussion or standardization. He suggested the need for a dedicated forum where implementers can discuss these standards, especially those beyond the consensus layer.
- **Market Layer Solutions**: The discussion also touched upon whether such standardization should be enforced at the market level or if it should be more pervasive, affecting all market implementations.

### Key Takeaways
- **Balancing Flexibility and Uniformity**: The proposal aims to strike a balance between allowing diversity in market implementations and maintaining a level of standardization essential for user clarity and market efficiency.
- **Enhancing Retrieval Incentives**: By clearly defining retrieval expectations and embedding them into the protocol, the proposal seeks to incentivize more reliable and broadly available retrieval services within the Filecoin network.

---

# [Aggregator Deal Standard](https://github.com/filecoin-project/FIPs/discussions/866)  
#### Aadi S. (Protocol Labs)

# Summary of Aadi S's Presentation on Aggregator Deal Standard

## Introduction
Aadi S discussed the development of an aggregator deal standard in Filecoin, designed to streamline data aggregation on FVM (Filecoin Virtual Machine) and IPFS (InterPlanetary File System).

## Key Points

### User-Land FRC Implementation
- **No Impact on Core Protocol**: This specific implementation does not affect the core protocol work in Filecoin.
- **User-Land Focus**: The aggregator deal standard is entirely a user-land Filecoin Retrieval Claim (FRC), allowing for flexibility and innovation in data aggregation processes.

### Collaboration and Development
- **Collaborative Effort**: The standard is being developed in collaboration with various teams, including Lighthouse and others, to prototype and deploy aggregation flows leveraging this FRC.
- **Objective**: The goal is to enable trustless aggregation methods, especially for entities that have historically relied on trusted aggregation flows.

### Mechanism and Process
- **Submit and Complete Callback Loop**: The system allows a user or client to call a 'submit' function on a smart contract, which then triggers data aggregation and bundles it. The aggregation's 'complete' callback contains the inclusion proof, facilitating the bundling of small data bits into a larger storage deal.

### Broader Implications
- **Interactions with On-chain Entities**: The aggregator deal standard serves as a primitive for interaction with on-chain entities like data DAOs and DApps, looking to use FVM for storing information on Filecoin.
- **Use Cases**: The standard supports use cases around the persistence and maintenance of small data on Filecoin, expanding the network's utility and application.



# 
## Network v21 (Watermelon Upgrade) Discussions 
**Jennifer Wang, (Protocol Labs)**

# Summary of Jennifer's Update on the Watermelon Upgrade

## Introduction
Jennifer provided an update on the impending Watermelon upgrade for Filecoin, highlighting key features and recommendations for network operators.



### Implementation Updates
- **Lotus, Forest, and Venus**: These implementations have published their final releases supporting the upgrade.
- **Upgrade Features**: The upgrade includes several new features, notably synthetic PoRep, aimed at benefiting storage providers and service providers.
- **Sector Commitment and Deal Duration**: The upgrade extends the maximum sector commitment and deal duration from 1.5 years to 3 years, enabling longer data storage on Filecoin.
- **FIP0045**: In conjunction with changes introduced by FIP0045, data clients can store data for up to 3.5 to 5 years, using various perpetual storage solutions on FVM.

### Operational Implications

#### Gas Usage Increase
- **Observations**: Some partners have reported an increase in gas usage in multi-state operations, likely a result of changes introduced in FIP 51.
- **Action**: Jennifer encourages reaching out in the Filecoin Dev channel for queries or concerns.

#### State Migration
- **Expectation**: A heavier-than-normal state migration is anticipated as part of the upgrade.
- **Benchmarking**: Lotus and Forest have benchmarked migration times, estimating a 5 to 20-minute duration for regular nodes.
- **Archival Nodes**: Operators of full archival nodes with extensive historical data should expect a more substantial migration process.






#### Proposed FIPs for Inclusion in nv21
The following Filecoin Improvement Proposals (FIPs) will be included in the nv21 Watermelon network upgrade:
- [FIP0052: Increase Max Sector Commitment to 3.5 years](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0052.md)

- [FIP0059: Synthetic PoRep](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0059.md)

- [FIP0071: Deterministic State Access (IPLD Reachability)](https://github.com/filecoin-project/FIPs/discussions/735)
- [FIP0072: Improved Event Syscall API](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0072.md)
- [FIP0073: Remove beneficiary from the self_destruct syscall](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0073.md) 
- [FIP0075: Improvements to the FVM Randomness syscalls](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0075.md)




