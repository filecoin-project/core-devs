🧠 Core Devs Call # 88 — Community Notes
📅 Date: Tuesday, February 24, 2026
🕒 Time: 03:00–03:30 PM UTC
🔗 Zoom Link: [meeting Link](https://www.google.com/url?q=https://fil-org.zoom.us/j/87138435188?jst%3D2&sa=D&source=calendar&ust=1771885142188203&usg=AOvVaw3LSRUCyJ5Gkutyg-Nhm2Sd)
👩‍💼 Moderator: Christian Taylor


Region | Local Time | Date
-- | -- | --
🕖 PT (California, UTC−8) | 07:00–07:30 AM | Tue Feb 24
🕙 ET (New York, UTC−5) | 10:00–10:30 AM | Tue Feb 24
🕓 CET (Europe, UTC+1) | 04:00–04:30 PM | Tue Feb 24
🕖 GST (Dubai, UTC+4) | 07:00–07:30 PM | Tue Feb 24
🕣 IST (India, UTC+5:30) | 08:30–09:00 PM | Tue Feb 24
🕒 UTC | 03:00–03:30 PM | Tue Feb 24

# Core Devs 88 — Executive Summary

📝 Source: :contentReference[oaicite:0]{index=0}

---

## Focus Areas
**FIP Progression · NV28 Scoping · Base Fee Mechanism · FIP-100 Dashboard**

---

## 1. FIP Progress — Current State

### In Motion
- **FIP-112 (Sector Status)** → Moving to **Last Call**
- **FIP-113 / FIP-114** → Moving to **Draft**
- **FIP-115** → Under active discussion

### Direction
- Continued alignment with Ethereum standards (EIP-based changes)
- Use FIP Tracker as primary coordination layer going forward

---

## 2. FIP-112 — Sector Status (Near-Term Inclusion)

### Status
- Strong candidate for next upgrade (NV28)
- Implementation owned and progressing

### Delivery Expectation
- ~1 week implementation + testing
- Feasible for upcoming upgrade window

---

## 3. FIP-115 — Base Fee Mechanism (Key Discussion)

### Problem
- Base fee remains near minimum  
- Current utilization-based model fails due to:
  - Transaction overlap
  - Mempool behavior inconsistencies  

### Proposed Shift
- Move from **utilization-based** → **gas premium–based** pricing

### Intended Outcome
- Better congestion detection  
- More accurate fee adjustment  
- Increased fee burn → reduced inflation  

### Concerns Raised
- Premium ≠ guaranteed proxy for utilization  
- Heavy reliance on automated transactions (~90%)  
- Requires improved gas estimation tooling  
- Minimum base fee change seen as unnecessary  

### Direction
- Continue technical review  
- Likely include in NV28 **if validated**  

---

## 4. NV28 — Scope and Reality Check

### Pipeline (Current)
- FIP-112 (high confidence)  
- FIP-113 / 114 (feasible if pushed)  
- FIP-115 (pending validation)  
- FIP-107 + Sealer ID (likely deferred again)  
- F3-related items (low priority)  
- Additional minor / experimental items  

### Constraints
- **Primary blocker: implementation bandwidth**  
- Several items lack active ownership  

### Key Decisions
- FIP-107 / Sealer ID → likely deferred (again)  
- F3 calibration improvements → not a priority  
- Fork signaling → useful but not upgrade-driving  

### Principle
- Only include items that:
  - Have implementation owners  
  - Can realistically meet timeline  

---

## 5. NV28 Timeline (Working Assumption)

- **Last Call Requirement:** ~2 weeks minimum  
- **Code Freeze Target:** End of March  
- **Upgrade Window:** Likely April  

👉 Timeline dependent on implementer capacity  

---

## 6. Emerging Direction — Alternative Paths

- Sealer ID may be bypassed via **SNARK market approach**
- Some improvements possible **without FIP changes**
- Emphasis on faster iteration outside protocol where possible  

---

## 7. FIP-100 Dashboard — Governance Transparency

### What’s New
- Monitoring dashboard introduced (in review)
- Tracks governance metrics and activity

### Purpose
- Deliver on transparency commitments  
- Provide visibility into FIP-100 oversight  

### Current Gaps
- Some data not yet fully tracked  
- Dependencies on external data sources (e.g., Starboard)  

---

## Decisions (Net)

- Move **FIP-112 → Last Call immediately**  
- Push **FIP-113 / 114 toward inclusion**  
- Continue deep review on **FIP-115 (base fee change)**  
- Defer **FIP-107 / Sealer ID (pending capacity)**  
- Treat NV28 as **capacity-constrained upgrade**  

---

## Immediate Actions

- Advance FIP-112 through Last Call  
- Move FIP-113 / 114 through lifecycle quickly  
- Continue technical validation on FIP-115  
- Reconfirm NV28 scope at implementer call  
- Update NV28 pipeline with realistic ownership  
- Review and iterate on FIP-100 dashboard  

---
