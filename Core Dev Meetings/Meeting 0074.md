# Core Dev Meeting #74 

**Meeting Date & Time:** Thursday 6, September 2024 00:00 UTC

**Meeting Recording:** See README

**Meeting Slides:** https://docs.google.com/presentation/d/1QNZZLUENM1xOy-cX7x6izYlsv9dPEgThP8F_hs19GfU/edit#slide=id.g2f6b63896af_0_0



---

## FIP0001v2 Updates  
#### Kaitlin Beegle (Filecoin Foundation)

### Context
Kaitlin Beegle provided a high-level overview of the current status of the Filecoin governance reforms, specifically focusing on FIP-1 v2, which proposes significant changes to the governance process to better serve the Filecoin community. The reforms include tools for improved transparency, oversight, and a more efficient technical process.

### Overview of FIP-1 v2
- **FIP-1 v2 Proposal**: A policy aimed at introducing changes to governance, particularly around complex and controversial proposals related to governance and cryptoeconomics.
- **Key Changes**: 
  - Introduction of hard consensus for complex proposals.
  - New tools and community structures for better governance oversight.
  - Increased transparency and efficacy in governance processes.

### Progress So Far
- **Proposal Timeline**: The FIP-1 v2 PR was opened in October 2023. Since then, significant technical and community management work has been completed, including all back-end audits.
- **Next Steps**:
  - Finalizing the PR with requested changes and linking documentation and code repositories.
  - A final in-depth presentation to core devs and the community during the "last call" process.

### Testing and Public Rollout
- **Public Testing**: The team is preparing to initiate a 90-day public testing period for on-chain voting tooling on the Mainnet. This will involve releasing core documentation to Filecoin Docs starting on September 13.
- **Finalization Timeline**: Final text changes to FIP-1 are dependent on the outcome of testing, community feedback, and core dev input.

### Communication and Feedback Challenges
- **Information Accessibility**: Feedback received from the community indicates a lack of clarity on governance reform efforts and expectations. There is a need for better communication and access to information about the process.
- **Feedback Request**: Kaitlin requested input on how to better communicate governance information and how people prefer to be engaged in the process, acknowledging that Slack and Zoom may no longer be as effective as before.

### Resource Limitations
- **Governance Team**: The governance team is resource-constrained, with Kaitlin being the only person primarily working on governance reforms, although FIP-1 v2 is just one part of her responsibilities.
- **Review Process**: No governance changes will be finalized without in-depth review from core devs, though all necessary development work must be completed before formal review can begin.

### Next Steps
- **Public Communication**: A summary of on-chain voting processes and other pathways will be shared in the near future to reintroduce key concepts.
- **Community Engagement**: Kaitlin urged participants to attend the monthly governance calls or book personal office hours for more in-depth discussions or clarifications.

### Questions and Feedback
- **Summary Request**: Lauren Spiegel suggested creating a summary or table of key governance reform components, particularly what will be subject to on-chain voting, for easier reference.
- **Communication Preferences**: Discussion around the most effective communication platforms for the community is ongoing, with Slack currently being deemed sufficient by some participants.







## Fast Finality in Filecoin Testing Updates
#### Stebalien (FilOz)
---
### Context
The discussion opened with updates on the progress of F3 testing. The team has been testing with around 400 nodes. Initial testing faced significant challenges due to bugs in the version shipped with the network upgrade, which halted progress. However, fixes have been made, particularly in areas related to network convergence.

### Updates
- **Network Convergence**: The F3 network initially had issues reaching consensus. There were four distinct bugs identified and fixed. Improvements have been made in message propagation, helping nodes see all network votes faster and improving consensus times.
- **Performance Optimizations**: 
  - CPU utilization has been reduced significantly.
  - Efforts are ongoing to improve crash safety, especially in scenarios where nodes reboot or crash, ensuring no conflicting decisions are made.
  - Bandwidth utilization is currently at around 1MB/s, but expected to scale with network size. With up to 3,000 nodes, the estimate is potentially 10MB/s or higher. Work continues on reducing this.

- **Double Voting Issue**: An issue was identified where nodes in high-availability (HA) setups would accidentally double vote due to misconfigured setups. Fixes are underway to prevent this from happening.

### Next Steps
- **Network Upgrade Proposal**: A slight delay is proposed for the NV24 timeline due to the current readiness of F3 and other features in the upgrade.
- **CPU and Bandwidth Optimizations**: Additional changes, including aggressive bandwidth optimizations, are under consideration. These changes could reduce bandwidth usage by 60-70%, but are complex and require further discussion in upcoming implementer calls.

## Forest Integration

- **Go F3 Integration**: The Forest team has integrated Go F3 as a sidecar and is ready for the next round of testing.
- **Interface Changes**: No significant top-level interface changes are expected, though potential aggressive bandwidth optimizations could require adjustments in future updates.

## Signature Aggregation Changes

- **Scheme Update**: The signature aggregation scheme is being updated to reduce CPU usage. This change might affect Forest if it's directly importing Go F3. The underlying cryptographic scheme remains the same, but the aggregation method is being optimized using bitfields. 
  - **Forest Impact**: Forest's implementation may need adjustment, particularly for teams implementing the scheme in Rust. The next round of testing will use the Go library.


## MCOPY Opcode in the FEVM
#### Mikers (Fil Builders)
---
### Background
- **Opcode Definition**: The MCopy opcode is defined in EIP-5656, and its usage has been compiled into Solidity starting from version 8.25. This opcode is primarily used in `ABI.encode` and `ABI.decode` library functions, making it an essential operation for Solidity development.
  
### Current Progress
- **FIP Proposal**: Michael has been working on a Filecoin Improvement Proposal (FIP) to add support for this opcode within the Filecoin EVM (FEVM).
- **Pull Request (PR)**: A draft PR has been submitted and is now open for review within the Built-in Actors repository, where FEVM logic is defined. The PR aims to implement the MCopy opcode within FEVM.
- **Testing**: Additional testing work is planned to ensure the opcode functions correctly within the network. Progress so far has been smooth, with no major issues encountered.

### Next Steps
- Further testing is planned to validate the implementation of the MCopy opcode.
- Continued collaboration and review are needed to finalize the PR and integrate it into the network.
# 
## [Network v24 Upgrade Discussions & updated upgrade timelines](https://github.com/filecoin-project/core-devs/discussions/150#discussioncomment-10518310)
**Orjan Roren (FilOz)**

### Proposed Revision to Upgrade Timelines

- **Calibration Upgrade Date**: Suggested moving to October 23rd.
- **Mainnet Upgrade Date**: Suggested moving to November 20th.

---



The following Filecoin Improvement Proposals (FIPs) are being considered for inclusion in the nv24 network upgrade:

- [FIP0081: Introduce lower bound for sector initial pledge](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0081.md)

- [FIP0086: Fast Finality in Filecoin (F3)](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0086.md)

- [FIP0094: Add Support for EIP-5656 (MCOPY)](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0094.md) 
- [FIP0095: Add EVM precompile to fetch beacon digest](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0095.md)









---
