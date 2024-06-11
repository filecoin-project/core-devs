# Core Dev Meeting #71 

**Meeting Date & Time:** Thursday 6, May 2024 16:00 UTC

**Meeting Recording:** See README

**Meeting Slides:** https://docs.google.com/presentation/d/1QVWXQP5l1d80GNRy_mKh7wMJVccORGPW-0HWxMq8E0U/edit#slide=id.g19157ff4f70_0_0


---

## [Non-Interactive PoRep](https://github.com/filecoin-project/FIPs/pull/1018)
#### Orjan (FilOz)

## Overview
During the implementation of FIP0090:Non-Interactive PoRep amendments were discovered that needed to be made: 
- Update 'sealChallengeEarliest' to 180 days (from 30 days)
- Removal of batch option and only allow for aggregation of NI-PoRep sectors
    - Aggregation makes sense already when onboarding 2 sectors at the same time.
    - Set minimum of sectors that can be aggregated to 1 (from 2) 
- FIP0092: Caller Specified Proving Deadline for NI-PoRep 
    - Gives SPs some of the flexibility that was tried to be delivered with FIP0070: Allow SPs to move partitions between deadlines 
    - Needs to be shipped in the same network upgrade as FIP0090: NI PoRep for it to be feasible to implement. 


## Presented Goal and Objectives
1. 
   - Incorporate FIP0092 (currently in draft) + FIP0090 amendments and make them into one FIP presented as FIP0092
   - FIP0092 to supersede FIP0090 
   - Have FIP0092 enter Last Call 

---
# [Updating Filecoins Value Accrual Mechanisms](https://github.com/filecoin-project/FIPs/discussions/557)
#### AX (CEL)


## Premise
The presentation was focused on revisiting previous discussions about implementing explicit proof fees due to new conditions affecting the ecosystem. The need to align protocol revenue with the services provided was highlighted, with a specific emphasis on improving revenue collection mechanisms.

## Challenge
1. **Broken Revenue Mechanism**: The current revenue collection in the Filecoin protocol is indirect, relying on gas usage rather than directly charging for the service provided (storage proofs). This creates a disconnect between demand for services and revenue generation.
2. **Comparison to Ethereum**: Unlike Ethereum, which ties its revenue to block space demand through the 1559 mechanism, Filecoin’s method doesn’t effectively capitalize on increased service demand.
3. **Economic Discrepancies**: Optimization of proof gas usage and the shift in block sizes over time have disrupted revenue streams, leading to a significant drop in protocol revenue.
4. **Deal Payments**: A significant portion of deal payments are not happening in FIL, undermining the utility token's role in the network.

## Solution
1. **Proof Fees Introduction**: Proposing onboarding fees or proof fees, especially for new types of proofs, such as those for hot storage. These fees would be easier to implement with new proofs rather than retroactively applying them to existing proofs.
2. **Incentivizing FIL Payments**: Exploring ways to incentivize deal payments in FIL, potentially through multipliers that reward higher block rewards for locking up FIL in deals.
3. **Aligning Incentives**: Ensuring that the introduction of new fees and incentive structures aligns the interests of users, developers, and token holders with the network’s longevity.

## Next Steps
1. **Proposal Discussion**: Further discussions are needed to refine the proposal for proof fees, especially focusing on new proofs.
2. **Community Engagement**: Engaging with the community to address concerns and garner support for the proposed changes, recognizing the political sensitivity of introducing new fees.
3. **Detailed Planning**: Planning for the implementation of incentives for FIL payments and the introduction of proof fees to ensure they are beneficial and align with the network’s goals.
4. **Ongoing Evaluation**: Continuously evaluating the impact of these changes on the network’s revenue and adjusting strategies as necessary to ensure sustainable growth and value accrual to the Filecoin network.


# [Proof of Data Possession (PDP)](https://github.com/filecoin-project/FIPs/discussions/1009)
#### Luca (FilOz)
# Core Devs Call Notes

## Premise
Luca Nizzardo presented on the Proof of Data Possession (PDP) project, a new type of proof being developed by the Filecoin team to introduce a method of proving access to unsealed data without the current complexities and limitations of existing proofs.

## Challenge
1. **Current Proof Limitations**: Existing proofs in Filecoin only verify the storage of encoded data, which does not ensure efficient data retrieval.
2. **Sealing Process**: The sealing process in the current proof system adds computational overhead and complexity.
3. **Low Entry Barrier**: There is a need for a simpler entry method for storage providers to participate in the network.

## Solution
1. **Introducing PDP**: A new proof that allows storage providers to prove they have access to unsealed data, facilitating more efficient data retrieval and reducing the computational burden.
2. **Parallel Operation**: PDP will operate alongside the current proof system, offering storage providers the flexibility to choose between the two methods.
3. **Diversification of Storage Primitives**: This new proof will introduce more mining opportunities and potentially diversify the ways storage providers can contribute to the network.

## Next Steps
1. **MVP Development**: The Minimum Viable Product (MVP) of PDP is aimed for release by the end of Q2 or July. This will include basic functionalities such as checking inclusion proofs for SHA-256 commitments.
2. **Incentive Design**: The initial MVP will not include native incentives. Future versions will focus on designing appropriate incentives for PDP, ensuring alignment with network goals and fair competition with existing proof methods.
3. **Community Engagement**: Encouraging community involvement through discussions, feedback, and contributions to the PDP project to refine and improve the protocol.

---
# [nv23 Upgrade Planning](https://github.com/filecoin-project/core-devs/discussions/149)  
The following Filecoin Improvement Proposals (FIPs) are being considered for inclusion in the nv22 Dragon network upgrade:
- [FIP0065: Ignore Built-In Market Locked Balance in Circulating Supply](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0065.md)

- [FIP0079:Add BLS Aggregate Signatures to FVM](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0079.md)

- [FIP0082: Support for Aggregated Replica Update Proofs](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0082.md) 
- [FIP0084: Remove Storage Miner Actor Method ProveCommitSectors](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0084.md)
- [FIP0085: Convert f090 Mining Reserve Actor to Keyless Account Actor](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0085.md)
- [FIP0086: Fast Finality in Filecoin (F3)](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0086.md)
- [FIP0092: Non-Interactive PoRep](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0092.md)




## Upgrade Timeline

- **Calibnet Deployment**: July 11, 2024
- **Mainnet Upgrade**: August 6, 2024

