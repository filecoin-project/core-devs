# Core Dev Meeting #61 

**Meeting Date & Time:** Friday 1, September 2023 00:00 UTC

**Meeting Recording:** 

**Meeting Slides:** https://docs.google.com/presentation/d/1FfSqiwW9x9FdYjKkW9Tedr93czDyFcUuSs8Rdj2-BR4/edit#slide=id.g237fb5860a0_0_21


## [Housekeeping and pre-scheduled network upgrades](https://github.com/filecoin-project/core-devs/discussions/145)  

**Facilitated by Kaitlin Beegle (Filecoin Foundation)**

**Premise**
Historically on the Filecoin network, upgrades have been adhoc and unscheduled. This has had various impact when it comes to network resource planning, allocation and efficiency of network upgrades. 

As a result, Core Devs are generally in agreement to pivot to pre-scheduled network upgrades given the increase in network partipants who are joining the network. 

**Proposed Cadence**



| Network Version | Period |
| --------------- | ------ |
| nv22            |  March 2024      |
| nv23            |  June 2024      |
| nv24            |  August 2024     |
| nv25            | November 2024   |

---





## [A Module for Faster Finality in Filecoin with Granite](https://docs.google.com/document/d/10IE6hfK16dbrH9lPWlPS7vGcFRRTAtYzjXEEeYhdkek/edit)
#### Alejandro (Protocol Labs)


### What's the Issue?
- Filecoin takes too long (7.5 hours) to confirm transactions.
- This delay affects users, service providers, and partners like exchanges.

### What's the Solution?
- Introduce a Finalization Module (FM) for quicker confirmation (< 30 seconds).
- Use Granite, a new consensus protocol, for this purpose.

#### How Will It Work?
- Change current settings to point to Granite-confirmed transactions.
- Update how the system chooses the 'correct' chain of transactions.
- Announce final decisions to network participants.

### Next Steps
- Discuss in Filecoin Improvement Proposals (FIPs).
- Publish a detailed plan by end of September.
- Implement and test the changes, aiming for an early 2024 release.









---

## **[FVM Randomness Changes](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0075.md)** 
#### Facilitated by Aayush (Lotus) 



## Summary: Improvements to FVM Randomness by Aayush Rajasekaran

### Current Problem
- FVM offers two primary API calls, `get_chain_randomness` and `get_beacon_randomness`, to fetch randomness from the Filecoin blockchain.
- The source of randomness is the blockchain itself, and clients (Lotus, Forest, Venus) retrieve it.
- No limitation on how far back in epochs the client can go to fetch randomness.
- Costs for fetching randomness are fixed regardless of the epoch, posing a security concern.

### Proposed Changes
- Remove personalization parameters from the API call. Randomness is to be fetched and returned without hashing.
- Move the responsibility of hashing to the actor or contract that needs it.
- Change cost from fixed to linear, based on how far back the client goes to fetch randomness.
  
### Motivation for Changes
- Reduced system complexity: Less logic in FVM means fewer points of failure.
- Increased modularity: Allows individual actors to handle customization.
- Cost efficiency: More accurate pricing based on how resource-intensive the operation is.
- Security: Reduces potential abuse by making costs variable.

### Implications
- Expected to have minimal disruption to existing users or smart contracts.
- The change is future-proof and aims to harden the system.

### Next Steps
- Feedback is welcome on these proposed changes.




---


## **[Motivation for a Scheduled Reduction in the Qaulity Multiplier of Fil+ Deals](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0075.md)** 
#### Facilitated by Arthur  



### Problem Statement
- The community is concerned about Filecoin's weakening consensus due to its current cryptoeconomic model.
- Falling price and RBP indicate the system's unsustainability.

### Proposed Solutions
1. **Multiplier Changes**: Alter the multiplier for winning block rewards in the core protocol. This change is seen as low-risk given Filecoin's resilience.
2. **Expanded Mission**: Filecoin should cater to a broader range of data, not just "real" data as perceived by a few.
3. **Strategy Calibration**: Ending the multiplier privilege isn't the end of the Fil+ vision but a recalibration. Filecoin will focus on a broader storage offering.
4. **Fast Implementation**: Two options for this - stop the subsidy via multiplier (PR#788) or make it available to all (PR#803). Both are technically trivial to implement.

### Consensus Building
- Critical to achieve hard consensus from Token Holders and Storage Providers (SPs) as their capital is at risk. 
- Other roles can participate in voting via holding Filecoin or providing hardware resources.

### Implications on Data Onboarding
- **Short-term**: A decline in the Fil+ data onboarding rate is expected.
- **Long-term**: Restoring integrity and free competition will benefit data onboarding under Fil+ criteria.

### Expanded Scope with Filecoin Ecosystem
- Use of FVM, subnets, and L2s will continue for applications like FIL+, Computation, Retrieval, DataDAO, Pools, etc.
- Aims to unleash infinite possibilities based on the storage capacity and interoperable layer structure.

### Conclusion
- The community is looking for a pivot in Filecoin's strategy and economic model.
- The changes aim to make Filecoin more inclusive, sustainable, and competitive in the storage market.


## **[Motivation for a Scheduled Reduction in the Qaulity Multiplier of Fil+ Deals](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0075.md)** 
**Benefits of Option 3 in CEL's Report**
#### Facilitated by TheWayvy's  



# Filecoin Governance Discussion Summary

## Context

The primary focus of the discussion led by Damian Siniakowicz was the optimization of Filecoin's power multipliers and collateral requirements. The talk aimed at proposing a more decentralized, fair, and inclusive method for minting data caps and reducing the influence of human gatekeepers in Filecoin's ecosystem. Further comments from other participants aimed to clarify or counter these proposals.

### Key Questions

> **Question 1**: What are the benefits of the third option (CEL's report) over other collateral requirements and power multipliers?

> **Answer 1**: The third option provides continuity in collateral requirements and power multipliers for all sectors, making it fair for both existing and new miners.

---

> **Question 2**: How do current human-gated power multipliers affect small and new miners?

> **Answer 2**: Human-gated multipliers create an uneven playing field. Miners with good relationships with notaries have easier access to power multipliers, disadvantaging small and new miners.

---

> **Question 3**: What kind of data is blocked or discouraged from being stored if Filecoin Plus is removed?

> **Answer 3**: According to Arthur, data that doesn't meet Filecoin Plus criteria are effectively discriminated against, particularly if clients are unwilling to take higher risks.

---

## Solutions

1. **Automating Data Cap Minting**: This would reduce human gatekeeping and make the process more transparent and predictable.
2. **Quantifiable Metrics for Power Allocation**: Introduce mathematical mechanisms for a more objective and fair power multiplier allocation.
3. **Broadening Governance Input**: Molly Mackinlay suggests that governance should include more than just token holders and storage providers for a more balanced approach.

---

## Next Steps

1. **Analysis & Validation**: Additional analysis, possibly from crypto econ labs, to validate the proposed changes.
2. **Community Feedback**: Open the discussion for wider community feedback, especially from miners and token holders.
3. **Protocol Update**: If there's consensus, proceed with the protocol updates to implement the discussed solutions.

---



# 
## [Network v21 (Watermelon Upgrade) Discussions](https://github.com/filecoin-project/core-devs/discussions/140)
**Facilitated by Jennifer Wang Lotus, Protocol Labs)**



#### Proposed FIPs for Inclusion in nv21
The following Filecoin Improvement Proposals (FIPs) are being considered for inclusion in the nv21 Watermelon network upgrade:
- [FIP0052: Increase Max Sector Commitment to 3.5 years](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0052.md)

- [FIP0059: Synthetic PoRep](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0059.md)

- [FIP0070: Allow SPs to move partitions between deadlines](https://github.com/filecoin-project/FIPs/pull/740/commits/bd6c62d46009f586a661d3e1c797f84bb8cfb59a) 
- [FIP0071: Deterministic State Access (IPLD Reachability)](https://github.com/filecoin-project/FIPs/discussions/735)
- [FIP0073: Remove beneficiary from the self_destruct syscall](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0073.md) 
- [FIP0075: Improvements to the FVM Randomness syscalls](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0075.md)
- [FIPXXX: Direct Data Onboarding](https://github.com/filecoin-project/FIPs/pull/804/files) (PR Open)


#### Timelines
The following key dates have been established for the upgrade process:
- **Last Call for All FIPs:** Sept 15
- **Code Freeze:** Sept 28
- **Calibnet Upgrade:** Oct 10
- **Mainnet Upgrade:** Nov 7

#### Conclusion
The nv21 Watermelon network upgrade is in active planning, with specific FIPs under consideration. Key dates have been set to guide the process. Collaboration and feedback on the selected FIPs are encouraged to ensure a smooth transition.

## Governance Updates 
- Community Governance Call is is September 25- register [here](https://fil-org.zoom.us/meeting/register/tZMkf-2qpjIqEt3nkeKh_7f7_F6wPm76zbTw)
- Join the Fil-Gov channel [here](https://filecoinproject.slack.com/archives/C0535S9TUUF)
- Dates have been announced for #FilDevSummit23 with two regional hubs in Singapor and Iceland, read more [HERE](https://t.co/yZsV4UIq01)


 










---
