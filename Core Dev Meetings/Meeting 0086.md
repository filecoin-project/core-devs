# 🧠 Core Devs Call #86 — Community Notes

**📅 Date:** Tuesday, December 8, 2025  
**🕡 Time:** 02:30–03:00 PM UTC (Other timezones mentioned below) 
**🔗 Zoom Link:** [Join Meeting Here](https://fil-org.zoom.us/j/85825697565?pwd=IXexChKIbadz0KFynSrwgdGHHIIwte.1&jst=2#success)  
**👩‍💼 Moderator:** [Tanisha Katara](https://www.tanishakatara.com)  
**WIP Presentation Link:** [Core Devs 86 Presentation](https://docs.google.com/presentation/d/1npLu6ufltSmEl8lZLCxHpiSBMOfnmN6pmYFIpXdDjn8/edit?slide=id.g19157ff4f70_0_0#slide=id.g19157ff4f70_0_0)  

Core Devs 86 — Executive Summary

Focus Areas

FIP-0111 · Gas Security · NV28 Planning · Governance (FIP-100) · Constellation

1. FIP-0111 — Delegations (EIP-7702)

What it does

Enables account abstraction–like behavior on FEVM
Unlocks smart wallets, gasless transactions, improved UX
Aligns with Ethereum ecosystem standards

Reality check

Large, non-trivial implementation
Requires coordination across FEVM maintainers
Not guaranteed for near-term delivery
2. Critical Dependency — Gas Security Fix

Problem

Accounts can be drained mid-execution → failed gas payment

Solution

Pre-reserve gas at execution start (multi-stage gas execution)

Outcome

Hard dependency for FIP-0111
Security audit required before progression
3. Delivery Reality (Important Distinction)
FIP approval ≠ implementation
Delivery depends on:
Engineering bandwidth
Security review
Testing + coordination

👉 Expect lag between acceptance and mainnet

4. NV28 + F3 (Pragmatic Approach)

Current state

NV28 planning active
F3 down in calibration

Decisions

Short-term: unblock quickly (rename / simple fix)
Long-term: implement resettable activation (via FRC + upgrade)

Principle

Don’t block upgrades on heavier features
Ship what unblocks first, improve later
5. Governance — FIP-100
New charter in progress (PR open)
Defines:
Roles and responsibilities
Process + templates
Governance docs being restructured
Data tracking integration with Starboard underway
6. Constellation Program (Governance Evolution)
New initiative to formalize governance maturity

Focus

Operational clarity
Defined responsibilities for Core Devs

Next Step

Targeted 1:1 interviews with participants
Decisions (Net)
Proceed with FIP-0111 review with dependency + audit
Separate governance approval from delivery expectations
Use incremental NV28 strategy (unblock first)
Stabilize F3 immediately, optimize later
Immediate Actions
Review FIP-0111 + gas execution dependency
Initiate security audit
Align on engineering capacity (FilOz + others)
Draft FRC for F3 improvements
Review FIP-100 charter PR
Conduct governance interviews (Constellation)
