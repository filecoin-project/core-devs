# Filecoin Core Devs Monthly Meeting Notes
Recording: https://danny.spesh.com/video/coredevs-2025-08-07/GMT20250807-150442_Recording_1790x920.mp4

**August 7, 2025**

## Welcome Michael Madoff - New Head of Governance

Michael joined from the Cardano ecosystem, where he spent 3.5 years rolling out their governance system. His background includes strategy consulting at Boston Consulting Group and political science research.

**Priorities for Filecoin governance**
- **Operational excellence** — make processes more transparent and efficient  
- **Economic alignment** — keep the economic model secure and properly incentivized  
- **Community-centered governance** — give all stakeholders a real voice

## FIP Cleanup Progress

We’ve made serious headway on the FIP backlog — from **23** draft FIPs down to **4**. Most were straightforward status updates; for several, we reached out to authors on whether to keep pushing forward.

A few were rejected based on author feedback. Everything is documented on GitHub (source of truth for FIP statuses).

**`FIP-0064` needs discussion** — it proposes tweaks to the base fee mechanism. The author will present at the next meeting to address implementation complexity and potential attack vectors.

## NV27 Network Upgrade Planning

**Context:**  
This table summarizes the revised **Network Upgrade (NV27) FIPs queue** discussed during **Core Devs Meeting 82**.  
It reflects the latest status, timeline considerations, and prioritization of proposals based on Core Devs 82 discussions.  

**Tentative Timeline:**  
The NV27 upgrade planning starts with a **target code freeze date of August 31, 2025**.  

---

| FIP/FRC | Link | Status & Progress | Timeline | Summary | Notes |
|---------|------|-------------------|----------|---------|-------|
| 🟢 **FIP-0105**: Add BLS12-381 precompiles to FEVM | [FIP-0105](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0105.md) | PR open; performance concern on 2MB WASM increase resolved [here](https://github.com/filecoin-project/builtin-actors/pull/1669) | No concerns for NV27 | Adds ~2MB to EVM actor compiled WASM; improves cryptographic capabilities | [Slack discussion](https://filecoinproject.slack.com/archives/C015KQQLQQ1/p1755128066766349) |
| 🟢 **FIP-0103**: Remove `ExtendSectorExpiration` method | [FIP-0103](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0103.md) | PR opened, reviewed, merged | No concerns for NV27 | Removes deprecated method, replaced by `ExtendSectorExpiration2` already in use | Straightforward removal |
| 🟢 **FIP-0106**: Remove `ProveReplicaUpdates` method | [FIP-0106](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0106.md) | PR opened, reviewed, merged | No concerns for NV27 | Second of three removal FIPs in NV27; straightforward | Already accepted |
| 🟢 **FIP-0077**: Add deposit requirement for new miner creation | [FIP-0077](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0077.md) | All feedback resolved; ready to move from last call to accepted | No concerns; minor changes possible by month-end | Adds 5 FIL deposit for creating new miners; spam prevention | Deposit reduced from original proposal |
| 🟢 **FIP-0101**: Remove `ProveCommitAggregate` method | [FIP-0101](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0101.md) | Third and final removal FIP in NV27; already accepted | No concerns for NV27 | Removes deprecated parameters | Straightforward removal |
| 🟢 **FRC-0108**: F3-compatible snapshots | [FRC-0108](https://github.com/filecoin-project/FIPs/blob/master/FRCs/frc-0108.md) | Ready for NV27; Forest team ready by end of August; testnet phase planned | No concerns | Standardizes format for F3 data loading; backward compatible; not a protocol change but requires network upgrade | Ensures all nodes support new snapshot format |
| 🟡 **FIP-0109**: Smart contract notifications for Direct Data Onboarding (DDO) | [PR #1180](https://github.com/filecoin-project/FIPs/pull/1180) | Potential for NV27 if reviewed in time; flagged to FIP editors | Low risk; minimal integration | Enables DDO-related smart contract notifications; unlocks marketplaces, DAOs, data apps | Waiting for 2 FIP editor reviews |
| 🔴 **FIP-0107**: Implicit messages in block receipts | [FIP-0107](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0107.md) | Deferred to next upgrade | Misses August deadline | Would allow implicit messages in receipts; deferred due to lack of bandwidth in Lotus & Forest | Update to be posted in GitHub discussions |
| 🔴 **Sealer ID** | [PR #993](https://github.com/filecoin-project/FIPs/pull/993) | Deferred; implementation specs still WIP | High-risk; deferred | Assigns unique ID to sealers; significant miner-actor change | Needs extensive testing; timeline too short |

**Legend:**  
- 🟢 Ready for NV27 (no timeline concerns)  
- 🟡 Needs review / at risk but possible for NV27  
- 🔴 Deferred to next upgrade  

## FIP100 Monitoring Committee Update

The committee is active with a dedicated Slack channel. They’re building a dashboard to track FIP100 effects (sector onboarding, economics, fee burn).

Goal: monitor for a few months, then hand over to the community for ongoing tracking. **Charter ETA: end of week.**

## Next Steps

- [ ] `FIP-0064` author presentation at next Core Devs  
- [ ] Two-week community feedback window on NV27 plan  
- [ ] Publish FIP100 committee charter  
- [ ] Continue pushing `FIP-0109` through editor review  

*The upgrade timeline is tight but achievable with the current scope. We’re prioritizing correctness over cramming in features.*
