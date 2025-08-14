# Filecoin Core Devs Monthly Meeting Notes
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

Targeting **code freeze by end of August**. We decided to ship bite-sized upgrades rather than wait on Sealer ID.

**Included in NV27**
- `FIP-0105` — BLS pre-compiles *(note: ~2 MB size increase concern)*  
- Three removal FIPs — `FIP-0103`, `FIP-0106`, `FIP-0101` *(cleanup of old methods)*  
- `FIP-0077` — miner creation deposit set to **5 FIL** to prevent spam  
- `FIP-0108` — F3 snapshots *(Forest team reports readiness)*

**Deferred**
- **Sealer ID FIP** — still in draft; impacts Curio’s snark market plans  
- `FIP-0107` — implicit messages *(implementation bandwidth)*

**Potential add**
- `FIP-0109` — smart contract notifications *(~1 day of work; pending editor review)*

## FIP100 Monitoring Committee Update

The committee is active with a dedicated Slack channel. They’re building a dashboard to track FIP100 effects (sector onboarding, economics, fee burn).

Goal: monitor for a few months, then hand over to the community for ongoing tracking. **Charter ETA: end of week.**

## Next Steps

- [ ] `FIP-0064` author presentation at next Core Devs  
- [ ] Two-week community feedback window on NV27 plan  
- [ ] Publish FIP100 committee charter  
- [ ] Continue pushing `FIP-0109` through editor review  

*The upgrade timeline is tight but achievable with the current scope. We’re prioritizing correctness over cramming in features.*
