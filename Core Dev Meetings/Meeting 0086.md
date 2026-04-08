# 🧠 Core Devs Call #86 — Community Notes

**📅 Date:** Tuesday, December 8, 2025  
**🕡 Time:** 02:30–03:00 PM UTC (Other timezones mentioned below) 
**🔗 Zoom Link:** [Join Meeting Here](https://fil-org.zoom.us/j/85825697565?pwd=IXexChKIbadz0KFynSrwgdGHHIIwte.1&jst=2#success)  
**👩‍💼 Moderator:** [Tanisha Katara](https://www.tanishakatara.com)  
**WIP Presentation Link:** [Core Devs 86 Presentation](https://docs.google.com/presentation/d/1npLu6ufltSmEl8lZLCxHpiSBMOfnmN6pmYFIpXdDjn8/edit?slide=id.g19157ff4f70_0_0#slide=id.g19157ff4f70_0_0)  

---

## 🌍 Timezones

| Region | Local Time | Date |
|---|---|---|
| 🕡 **GST (Dubai)** | **06:30–07:00 PM** | Tue Dec 8 |
| 🕗 **CEST (Europe, UTC+1)** | **03:30–04:00 PM** | Tue Dec 8 |
| 🕕 **IST (India, UTC+5:30)** | **08:00–08:30 PM** | Tue Dec 8 |
| 🕓 **UTC** | **02:30–03:00 PM** | Tue Dec 8 |
| 🕛 **ET (New York, EST UTC−5)** | **09:30–10:00 AM** | Tue Dec 8 |
| 🕝 **PT (California, PST UTC−8)** | **06:30–07:00 AM** | Tue Dec 8 |

---

## 📌 Agenda Overview  

### 🎉 Welcome Back to Core Devs  
- Moderator: Tanisha Katara  

---

### 📢 Discussion: FIP-0111 & Tipset Gas Reservation  

- **FIP-0111 – Delegation for EOAs in FEVM**  
  PR: https://github.com/filecoin-project/FIPs/pull/1209  
  - Introduces EIP-7702–style delegation for EOAs.  
  - Adds new `ApplyAndCall` method to FEVM’s EVM actor.  
  - Enables EOAs to authorize delegate code via signed authorization lists.  
  - Clarifies delegation mapping semantics after feedback from reviewers.  
  - Improves account-abstraction capabilities and general FEVM UX.

- **Tipset Gas Reservation Proposal (Draft)**  
  PR: https://github.com/filecoin-project/FIPs/pull/1218  
  - Proposes reserving a portion of gas per tipset to ensure execution headroom.  
  - Designed to prevent overloaded tipsets as FEVM activity grows.  
  - Requires calibration (how much gas to reserve, enforcement strategy).

---

### 🚀 NV’28 Network Upgrade Planning  
Discussion thread: https://github.com/filecoin-project/core-devs/discussions/205  
Direct comment reference:  
https://github.com/filecoin-project/core-devs/discussions/205#discussioncomment-15093060  

Key points:  
- NV’28 planning is underway with new proposals being added to the upgrade pipeline.  
- The Tipset Gas Reservation FIP (PR-1218) is one of the proposals under consideration.  
- New **F3-related proposals** are being explored for integration into NV’28.  
- Community feedback highlights the need to avoid overloading a single upgrade with too many features due to:  
  - implementation complexity,  
  - increased regression risk,  
  - testing overhead across client teams.  

---

### 🏛 Governance Updates: FIP-100 Committee  
PR: https://github.com/filecoin-project/FIPs/pull/1219  

- Formalizes governance documentation related to the **FIP-100 Monitoring Committee**.  
- Restructures governance files for clarity and contributor onboarding.  
- Organizes committee responsibilities, processes, and public-facing materials.  
- Supports better transparency, easier navigation, and long-term maintainability of governance docs.  
- Part of a broader effort to clean up governance repositories and consolidate review processes ahead of NV’28.

---

### 🎟 FDS 7 Governance Recap & veFIL Discussion  

- Recap of governance topics discussed at **FDS 7**, including long-term governance direction. 
- Overview of governance insights shared during community sessions.  

---

📣 If you’d like to add specific agenda points or propose discussion topics, please mention them in this thread.  
Looking forward to seeing everyone at Core Devs #85! 🚀
