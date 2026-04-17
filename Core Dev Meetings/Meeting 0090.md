🧠 Core Devs Call # 90 — Community Agenda
📅 Date: Tuesday, April 14, 2026
🕒 Time: 02:30–03:00 PM
🔗 Zoom Link: https://fil-org.zoom.us/j/89421376654?pwd=T19g1cvVSF4FBBag39bOqpek0BaNUf.1&jst=2
👩‍💼 Moderator: Christian Taylor

Deck: (https://docs.google.com/presentation/d/1LHWBV-dYNa1MpiqRnHK3D0zhy0J8Pf4shuKZVYCuFkc/edit?usp=sharing)

🌍 Timezones

Region | Local Time | Date
🕡 PT (California, UTC−8) | 06:30–07:00 AM | Tue Apr 14

🕙 ET (New York, UTC−5) | 09:30–10:00 AM | Tue Apr 14

🕞 CET (Europe, UTC+1) | 03:30–04:00 PM | Tue Apr 14

🕡 GST (Dubai, UTC+4) | 06:30–07:00 PM | Tue Apr 14

🕗 IST (India, UTC+5:30) | 08:00–08:30 PM | Tue Apr 14

🕞 UTC | 02:30–03:00 PM | Tue Apr 14

# Core Devs 90 — Executive Summary

📝 Source: :contentReference[oaicite:0]{index=0}

---

## Focus Areas
**NV28 Code Freeze · FIP-115 Decision · New Incentive Model (Fill+ Replacement) · FIP-100 Dashboard**

---

## 1. FIP Lifecycle — Current Status

### Completed
- **FIP-112 / 113 / 114** → **Accepted**

### Pending
- **FIP-115** → Awaiting final technical validation  
- **FIP-86 / 107 updates** → Included (minor / non-blocking)

### Direction
- Final decision on FIP-115 determines full NV28 scope  
- Shift from pipeline building → execution phase  

---

## 2. FIP-115 — Final Gate (Critical)

### Status
- Implemented and tested across authoring teams  
- Open technical concerns under review  

### Blocking Item
- Final validation from technical reviewers (e.g., Kuba, Magic)  

### Decision Timeline
- **Go / No-Go for NV28 by end of week**

### Impact
- Determines whether base fee fix ships in this upgrade  

---

## 3. NV28 — Final Timeline (Locked In)

### Key Dates
- **Code Freeze (Actors):** April 17  
- **Lotus RC (Calibnet):** Week of April 20  
- **Calibnet Upgrade:** Week of April 27  
- **Mainnet Upgrade:** End of May  

### Notes
- Includes stabilization window between testnet → mainnet  
- Timeline assumes FIP-115 readiness  

---

## 4. New Proposal — Deprecate Fill+ (Incentive Redesign)

### Problem
- Current **Fill+ / DataCap model no longer effective**  
- Incentives driving behavior misaligned with real demand  

### Proposed Shift
- Deprecate DataCap entirely  
- Make L1 fully permissionless for onboarding  

### New Model
- Allocate:
  - **10% of block rewards → service incentives**  
  - Normalize sector power across network  

### Goal
- Transition from **capacity growth → service economy**  

---

## 5. Service Reward Allocation — Design Space

### Option 1: Committee-Based
- Simple, fast to implement  
- Highly permissioned  
- Risk: centralization  

### Option 2: Metrics-Based
- Automated, scalable  
- Uses on-chain performance metrics  
- Risk: gaming / manipulation  

### Option 3: Token Governance
- Stake-based decision system  
- Fully permissionless  
- Risk: governance complexity  

### Direction
- No decision yet  
- **Call for community input to narrow design space**

---

## 6. Example Use Case — Service Economy

- On-chain services (e.g., Filecoin Pay, storage coordination)  
- Service operators:
  - Match clients ↔ storage providers  
  - Enforce SLAs  
  - Validate payments  

👉 Incentives shift toward **useful services**, not just storage supply  

---

## 7. Additional Proposal — Encryption Envelope (Preview)

- Standardized encryption format for Filecoin data  
- Based on RFC-style envelope design  
- Discussion deferred to next call  

---

## 8. FIP-100 Dashboard — Status

### Current State
- Live but incomplete  
- “No issues” currently reported  

### Gaps
- Missing / untracked metrics  
- Needs further iteration  

### Ask
- Community feedback on:
  - Missing data points  
  - Accuracy of current tracking  

---

## Decisions (Net)

- Confirm **FIP-112–114 as finalized scope**  
- Hold **FIP-115 decision pending technical validation**  
- Lock **NV28 timeline (April → May rollout)**  
- Begin serious discussion on **post-Fill+ incentive model**  
- Push governance transparency via dashboard iteration  

---

## Immediate Actions

- Finalize technical review for FIP-115  
- Confirm NV28 final scope by deadline  
- Begin community input on incentive redesign  
- Review encryption envelope proposal (next session)  
- Improve FIP-100 dashboard data completeness  
- Submit upgrade naming proposals + vote  

---
