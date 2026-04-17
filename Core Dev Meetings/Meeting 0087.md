# 🧠 Core Devs Call #87 — Community Notes

**📅 Date:** Tuesday, January 20, 2026  
**🕒 Time:** 03:00–03:30 PM UTC  
**🔗 Zoom Link:** [Join Meeting Here](https://fil-org.zoom.us/j/88527325596?pwd=cKwB46wo2MXsIrscoFjvPt5bJ82NpC.1)  
**👩‍💼 Moderator:** [Tanisha Katara](https://www.tanishakatara.com)  

---

## 🌍 Timezones

| Region | Local Time | Date |
|---|---|---|
| 🕖 **PT (California, UTC−8)** | **07:00–07:30 AM** | Tue Jan 20 |
| 🕙 **ET (New York, UTC−5)** | **10:00–10:30 AM** | Tue Jan 20 |
| 🕓 **CET (Europe, UTC+1)** | **04:00–04:30 PM** | Tue Jan 20 |
| 🕖 **GST (Dubai, UTC+4)** | **07:00–07:30 PM** | Tue Jan 20 |
| 🕣 **IST (India, UTC+5:30)** | **08:30–09:00 PM** | Tue Jan 20 |
| 🕒 **UTC** | **03:00–03:30 PM** | Tue Jan 20 |

Core Devs 87 — Executive Summary

📝 Source:

Focus Areas

FIP Tracker · Sector Status PR · NV28 Planning · FIP-100 Governance

1. FIP Tracker — Transparency Layer

What it is

New UI for tracking FIP status outside GitHub
Auto-updates every 6 hours
Shows:
FIP lifecycle stages
Open PRs
Activity timeline by month

Why it matters

Addresses visibility gaps for the community
Reduces confusion around “stalled” FIPs
Introduces lightweight governance transparency

Feedback

Positive initial reception
Open for iteration
2. Sector Status PR — FEVM Capability Expansion

What it does

Enables FEVM contracts to query Filecoin sector status
Adds liveness check to miner actor

Primary Use Case

Critical for Filecoin on-chain cloud (ProRep integration)
Unlocks smart contract awareness of storage state

Implementation Reality

Lightweight (~1–2 weeks total incl. testing)
Minimal performance or UX concerns
Backed by existing draft implementation

Status

Ready to move to Last Call
3. NV28 — Pipeline Taking Shape

Current Direction

Active pipeline building with multiple inputs
Includes:
Sector status FIP (above)
Deferred FIPs from NV27 (e.g., FIP-0107)
F3-related fixes
New gas / network health investigations

New Risk Flag

Deal payment exporter messages consuming high gas
Potential fixes identified (not yet formalized as FIPs)

Approach

Capture everything early (even pre-FIP discussions)
Enable implementers to plan capacity ahead
4. F3 + Network Health (Emerging)
Additional issues flagged for:
Gas efficiency
Message selection optimization
Likely require FIPs if protocol-level changes

👉 Still in analysis / discussion phase

5. FIP-100 Committee — Governance Structure

What shipped

Charter now published
Defines:
Roles and responsibilities
Reporting structure
Process and cadence

Design Principle

Temporary oversight body
Goal = sunset into community-led monitoring

Operational Updates

Async reporting system live (Slack-based)
Public reporting to GitHub in progress
Data collection pipeline still being built
Decisions (Net)
Move sector status FIP toward Last Call
Include it in NV28 pipeline (no objections)
Track NV28 inputs early, even pre-FIP
Push governance transparency (tracker + FIP-100)
Immediate Actions
Advance sector status FIP → Last Call
Add all pipeline items to NV28 tracker
Investigate gas inefficiency issues (formalize if needed)
Review deferred NV27 FIPs (capacity check)
Gather feedback on FIP tracker UI
Continue FIP-100 reporting + data integration
