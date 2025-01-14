# Core Dev Meeting #76 

**Meeting Date & Time:** Thursday 5, December 2024 16:00 UTC

**Meeting Recording:** See README

**Meeting Slides:** https://docs.google.com/presentation/d/1jHTLSzcXbkqosK1e6wBYiJXyMIjl1Az9RQ97FbWhBUw/edit#slide=id.g19157ff4f70_0_0


---

## Add Support for EIP-1153 (Transient Storage) in the FEVM  
#### Mikers (Fil Builders)

## Overview
- **Proposal:** Add support for EIP-1153 to the Filecoin EVM (FEVM).
- **Feature:** Introduces transient storage—a transaction-scoped, ephemeral data type commonly used in Ethereum contracts for:
  - Reentrancy guards.
  - Transient state management.
- **Rationale:** 
  - Enhances FEVM compatibility with Ethereum.
  - Supports popular Ethereum projects like Uniswap V4 without requiring code rewrites.
  - Attracts Ethereum developers to Filecoin.

## Implementation Details
- **New Opcodes:**
  - `TRANSIENT_LOAD` and `TRANSIENT_STORE` for handling transient storage.
- **Scope:** 
  - Data is scoped to the originating account and nonce for lifecycle validation.
- **Compatibility:** Aligns FEVM with Ethereum’s March 2024 Cancun upgrade.

## Next Steps
- **FIP Status:** Governance discussion ongoing (PR #1084).
- **Implementation Timeline:** Work in progress, aiming for merge readiness by end of the week.
- **Target Upgrade:** NV26 (April 2025), depending on governance approval and implementer commitments.

## Additional Considerations
- **Future Compatibility:** Monitoring Ethereum's upgrade roadmap for features relevant to FEVM.
- **Governance Cycle:** Adequate time available to finalize implementation and gather feedback before the next upgrade.

## Call to Action
- Core devs and community members encouraged to:
  - Review and comment on PR #1084.
  - Engage in ongoing discussions for feedback and improvements.





## Fast Finality in Filecoin Testing Updates
#### Orjan Roren (FilOz)
---
## Passive Testing Progress
- Transitioned from **10% to 100% passive testing** of the network over two weeks.
- Key improvements:
  - Reduced bandwidth usage during the bootstrap phase.
  - Achieved faster completion of the bootstrap phase (~1.5 hours with 4 MiB/s down and 6 MiB/s up on average).
  - Steady-state bandwidth averages: 1.2-1.5 MiB/s (up and down).
  - Current distance from the chain head: 13-40 epochs.

## Next Steps for Testing
- Continue refining parameters to:
  - Further reduce bootstrap duration and bandwidth.
  - Minimize distance from the chain head.
- Publish detailed metrics and updates in the **Lotus repo discussions tab**.
- Public Grafana dashboards available for deeper insights.

## nv25 Current Schedule - Discussion 
#### Orjan Roren (FilOz)
---
**Upgrade Name:** NV25 "Teep" (inspired by a Muay Thai technique for precision and swiftness).
- **Key Dates:**
  - **Calibnet Upgrade Epoch:** December 16, 2024.
  - **Final Release Publication:** December 18, 2024.
  - **Mainnet Upgrade Target:** Mid-January 2025 (contingent on testing progress).
- Testing Goals:
  - Complete 100% passive testing without manual power assignments.
  - Ensure smooth network operation for at least 2-3 continuous days.

## Challenges and Timeline Rationale
- Avoiding scheduling conflicts with:
  - Christmas and New Year holidays in December.
  - Chinese New Year celebrations in late January.
- Final release aimed for pre-holiday readiness, with mainnet activation shortly after.

## Call to Action
- Core devs and contributors:
  - Review and contribute to F3 passive testing discussion in the Lotus repo.
  - Monitor progress and provide feedback on Grafana dashboards.

## Open Questions
- Exact timing for the mainnet upgrade depends on:
  - Successful passive testing results by December 18.
  - Continuous monitoring and data validation during subsequent days.





---
