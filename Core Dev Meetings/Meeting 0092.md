🧠 **Core Devs Call #92 — Community Agenda**
📅 **Date:** June 30, 2026
🕒 **Time:** 04:00–04:30 PM UTC
👩‍💼 **Moderator:** Christian Taylor

## Core Devs 92 — Executive Summary

**Focus Areas**
Miner state cleanup · Solstice FIP · NV28 upgrade retrospective · FIP-100 Dashboard · Core Devs refactoring

---

## 1. Governance / FIP Lifecycle Updates

### Completed

FIP one-pagers are now caught up.

Moving forward, one-pagers will become a regular part of the FIP discussion process as new proposals enter discussion.

### Upcoming

The next expected one-pager will likely be for the **Solstice FIP**.

Links to the FIP one-pagers are available in the **FilGov Slack channel**.

---

## 2. Clear State / Miner Cleanup Discussion

### Background

Andy was expected to present, but was not on the call.

Christian summarized the proposal in his absence.

### Proposal Summary

The proposal is a targeted network upgrade cleanup that would remove sector state trees from old miners with zero power.

Old miners would be defined as miner IDs created more than 6 months ago, using a simple less-than ID check.

The cleanup could potentially be repeated as part of every future network upgrade.

### Discussion Points

This is not currently a regular network upgrade step.

William noted that cleanup work can delay the first few blocks after a network upgrade if the migration takes too long, though usually migration work completes within the expected 30-second window.

There may be a possibility of doing some cleanup asynchronously, provided it does not create inconsistency or allow problematic state changes during the process.

Steve noted this would likely require FIP treatment because it is a protocol-level change and would require all implementations to align.

### Next Step

Christian will take the discussion notes into the next implementers discussion with Orion.

---

## 3. Solstice FIP — Incentive System Reform

### Presenter

Irene

### Proposal Summary

The Solstice FIP proposes replacing the current Filecoin Plus incentive system with a split block reward framework across multiple incentive streams.

The FIP initially proposes two streams:

1. **Consensus incentives**
   The existing reward stream for mining blocks and securing consensus.

2. **Service incentives**
   A new incentive stream intended to replace the Filecoin Plus DataCap mechanism and support the services economy.

### Reward Split Design

The consensus reward share, W0, would decrease over time from 95% to 50% across nine quarters.

The service reward share, W1, would increase over time, potentially by 5 percentage points per quarter.

However, each quarterly increase would only occur if Filecoin Pay volume clears a defined threshold.

### Gate Mechanism

The gate mechanism would be written in a smart contract.

It would evaluate whether sufficient service payment volume exists before shifting more block reward weight toward service incentives.

No storage provider action would be required. The split would be automatic, and the reward actor would know who to pay each epoch.

### Governance Design

The split governance would be handled through a smart contract governed by a multisig.

The system would enforce that the total reward weights remain less than or equal to 1, since no new tokens can be minted.

A 7-day timelock would apply to governance changes, giving the ecosystem time to challenge or respond to malicious or incorrect changes before they take effect.

### Service Reward Governance

A separate smart contract would maintain a registry of “orchestrators.”

Orchestrators would be teams or entities responsible for collateralizing service rewards, sparking demand, generating deals, and helping bootstrap the services economy.

The system would likely begin with one orchestrator, then allow additional orchestrators through governance approval, with a longer-term goal of moving toward a more permissionless design.

### Current Status

The PR is not yet open but is expected soon.

Irene delayed opening the PR in order to include preferred solutions for several open technical questions, so reviewers can respond to concrete options rather than unresolved placeholders.

### Open Technical Questions

Stress testing the 7-day timelock mechanism.

Determining the best way to measure and report Filecoin Pay volume for the gate mechanism.

Deciding whether to use a price oracle or limit eligible volume to USD-pegged stablecoins.

Finalizing the DataCap deprecation path.

Clarifying what happens to extension and SnapDeals.

Validating concrete parameters for volume targets with go-to-market and product stakeholders.

### Clarification

Christian asked whether an open PR related to repeated SnapDeals and price-level integrity was related to the Solstice FIP discussion.

Irene clarified that it is a separate topic and not expected to be in scope for the next network upgrade.

### Action

Christian will ping willing implementers once the Solstice FIP PR goes live so they can begin review and testing.

---

## 4. NV28 Upgrade Retrospective

### General Assessment

The group agreed that the NV28 upgrade went well overall.

William described it as a great upgrade.

### What Went Well

The planning process and FIP lifecycle generally ran smoothly.

Testing on CalibrationNet was useful and helped catch issues before mainnet.

Interoperability testing in Butterfly was valuable, especially for FIPs like FIP-115 where implementation-layer compatibility matters.

Antithesis testing was also called out as a useful tool around network upgrades.

Breaking CalibNet during testing was viewed as far preferable to discovering issues on mainnet.

### Issues Caught During Testing

Testing surfaced RPC and log indexing issues that caused crashes and brought down block explorers or RPC providers.

Those issues were addressed before mainnet, preventing larger impact during the upgrade.

### Improvement Areas

GitHub state should better reflect the actual FIP lifecycle state when stages begin.

PRs should be submitted and reviewed earlier to avoid GitHub and meeting communications drifting out of sync.

Pre-upgrade communication should improve.

Some RPC providers missed the upgrade date announcements.

A more explicit checklist should be added for parties who require direct manual confirmation before an upgrade.

Important exchanges, RPC providers, and infrastructure providers may need direct pings with acknowledgement required.

### Suggested Process Improvement

Steve recommended updating the network upgrade checklist with a specific enumerated list of parties that need to be manually contacted.

This should include parties important enough that Core Devs need an explicit acknowledgement that they are aware of the upgrade.

Christian agreed to incorporate this into the NV29 checklist template.

---

## 5. Butterfly / Proof Parameter Fetching

### Issue

Proof parameter fetching in Butterfly can slow down testing and upgrade workflows.

### Suggested Improvements

Steve suggested baking proof parameters directly into the images used for Butterfly, similar to what Curio appears to do in CI.

Hubert noted that Forest already uses either baked-in parameters or Cloudflare R2-hosted artifacts to avoid relying on slow or flaky IPFS gateways.

Hubert offered Forest’s Cloudflare R2 artifact setup as a faster option, with IPFS gateway fallback if R2 is unavailable.

### Key Point

The public IPFS gateway should not be treated as production infrastructure for urgent network upgrade workflows.

### Action

Hubert will add comments to the relevant Lotus issue so Orion and others can review the Forest approach.

---

## 6. FIP-100 Dashboard

### Current State

No new issues were raised.

The FIP-100 dashboard is live.

### Upcoming

The committee will be pinged again in July for quarterly updates.

---

## 7. Core Devs Refactoring

### Background

Christian introduced upcoming work to clarify the role and structure of Core Devs.

This work comes from an assessment process aimed at resolving ambiguity around what Core Devs is and how the group should operate.

### Scope

The goal is not to change the scope of Core Devs.

The goal is to make sure the repository reflects what Core Devs is actually doing.

### Areas to Review

Member list

Attendance expectations

Conflict handling

Repository documentation

Role clarity

### Next Step

Christian will share a memo drafted with Jenny.

The topic is expected to be discussed on the next call, pending higher-priority items.

---

## Decisions

Proceed with further discussion of miner state cleanup in the implementers context.

Treat miner state cleanup as likely requiring FIP-level coordination because it changes protocol behavior and requires implementation alignment.

Solstice FIP PR should include preferred options for key open technical questions before formal review.

Continue with implementer testing once the Solstice FIP PR is opened.

Update the network upgrade checklist for NV29 to include manual outreach and acknowledgement from critical infrastructure parties.

Explore faster and more reliable proof parameter distribution for Butterfly and Lotus workflows.

Continue FIP-100 dashboard follow-up with the committee in July.

Move forward with Core Devs refactoring discussion on a future call.

---

## Immediate Actions

| Action                                                                 | Owner                                            |
| ---------------------------------------------------------------------- | ------------------------------------------------ |
| Take miner cleanup notes to the next implementers discussion           | Christian Taylor                                 |
| Open Solstice FIP PR with preferred technical options                  | Irene                                            |
| Ping implementers for Solstice FIP testing once PR is live             | Christian Taylor                                 |
| Add RPC/log indexing issue to NV28 retrospective notes                 | Christian Taylor                                 |
| Update NV29 network upgrade checklist with manual acknowledgement list | Christian Taylor                                 |
| Identify critical parties requiring direct upgrade confirmation        | Christian Taylor / relevant upgrade coordinators |
| Add Forest proof parameter fetching notes to the Lotus issue           | Hubert Bugaj                                     |
| Review use of baked-in proof parameters or Cloudflare R2 artifacts     | Lotus / Butterfly maintainers                    |
| Ping FIP-100 committee for quarterly updates in July                   | Christian Taylor                                 |
| Share Core Devs refactoring memo                                       | Christian Taylor / Jenny                         |
