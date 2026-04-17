🧠 Core Devs Call # 89 — Community Notes
📅 Date: Tuesday, March 17, 2026
🕒 Time: 02:30–03:00 PM UTC
🔗 Zoom Link: [Here](https://www.google.com/url?q=https://fil-org.zoom.us/j/81574483455?jst%3D2&sa=D&source=calendar&ust=1773598837061696&usg=AOvVaw0Oa90Gjo9mLYcHIOUOkI7B)
👩‍💼 Moderator: Christian Taylor

Deck: https://docs.google.com/presentation/d/1Da8zdoqSXxleenidcm6vHgm-ZS764A1NGipWx2GEc5w/edit?slide=id.g3c583afd27e_0_3#slide=id.g3c583afd27e_0_3

🌍 Timezones

<html>
<body>
<!--StartFragment--><b style="font-weight:normal;" id="docs-internal-guid-5107d8d1-7fff-918e-2ee6-c94d7ae1737e"><div dir="ltr" style="margin-left:0pt;" align="left">
Region | Local Time | Date

🕡 PT (California, UTC−8) | 06:30–07:00 AM | Tue Mar 17

🕙 ET (New York, UTC−5) | 09:30–10:00 AM | Tue Mar 17

🕞 CET (Europe, UTC+1) | 03:30–04:00 PM | Tue Mar 17

🕡 GST (Dubai, UTC+4) | 06:30–07:00 PM | Tue Mar 17

🕗 IST (India, UTC+5:30) | 08:00–08:30 PM | Tue Mar 17

🕞 UTC | 02:30–03:00 PM | Tue Mar 17

</div><br /></b><!--EndFragment-->
</body>
</html>

# Core Devs 89 — Executive Summary

📝 Source: :contentReference[oaicite:0]{index=0}

---

## Focus Areas
**FIP Lifecycle · NV28 Finalization · Base Fee Mechanism (FIP-115) · F3 Recovery · FIP-100 Dashboard**

---

## 1. FIP Lifecycle — Current Status

### In Progress
- **FIP-112** → In **Last Call** (ending soon → expected Accepted)
- **FIP-113 / FIP-114** → Moving to **Last Call**
- **FIP-115** → Moving to **Draft** (post technical validation)

### Direction
- Prioritize FIPs already scoped for NV28  
- Ensure lifecycle progression aligns with upgrade timeline  

---

## 2. FIP-113 / FIP-114 — EVM Alignment Upgrades

### What they do
- Add EVM precompile + CLZ support (EIP-aligned changes)
- Improve:
  - Developer experience  
  - Runtime efficiency  
  - Cross-chain compatibility  

### Use Case
- Reduce complexity for:
  - Authentication (passkeys / secure enclaves)  
  - Zero-knowledge systems  
- Lower cost vs current Solidity implementations  

### Sentiment
- Low complexity, low risk  
- Strong alignment with Ethereum ecosystem  
- **No objections — should proceed**

---

## 3. FIP-115 — Base Fee Mechanism (Critical Change)

### Problem
- Base fee not increasing → weak fee burn  
- Caused by:
  - Transaction overlap (TQ system)  
  - Ineffective utilization-based model  

### Proposed Fix
- Shift to **premium-based (percentile) mechanism**  
- Allows base fee to respond to real congestion signals  

### Status
- Lotus + Forest implementations complete  
- Editor approvals received  
- Moving toward **Draft → Last Call**

### Risks / Considerations
- Paradigm shift (moderate risk)  
- Edge case: identical gas premiums → fallback to utilization  
- Parameter sensitivity (percentiles, ratios)  

### Direction
- Request **independent technical validation** (e.g., Venus)  
- Proceed if validation confirms correctness  

---

## 4. NV28 — Final Scope Alignment

### Confirmed Pipeline
- FIP-112  
- FIP-113 / 114  
- FIP-115 (pending validation)  

### Likely Exclusions
- **FIP-107 / Sealer ID** → deferred (bandwidth constraints)  
- **FIP-86** → low priority  
- F3 enhancements → not upgrade drivers  

### Principle
- Only include:
  - Fully owned implementations  
  - Realistic delivery candidates  

---

## 5. NV28 Timeline (Refined)

- **Last Call Completion Target:** ~April 14  
- **Code Freeze (Actors):** ~April 17  
- **Upgrade Window:** Late May  

👉 Dependent on FIP-115 readiness  

---

## 6. F3 — Recovery & Strategy

### Current State
- Network stalled due to **lack of quorum**  

### Key Decisions
- **Do NOT implement exponential backoff cap**
  - Introduces additional risk  
  - Does not solve current issue  

### Recovery Path
- Requires **new FIP** if restart needed  
- Possible approaches:
  - New certificate chain  
  - Pre-approved checkpoint (social consensus)  

### Core Problem
- Restart alone insufficient  
- Must address **participation decay / quorum sustainability**  

---

## 7. FIP-100 Dashboard — Governance Monitoring

### Status
- Dashboard reviewed by committee  
- Feedback incorporated  

### Current Gaps
- Missing / inaccurate data points  
- Dependency on Starboard for fixes  

### Next Steps
- Resolve data tracking at source  
- Finalize before broader community release  

---

## Decisions (Net)

- Advance **FIP-112 → Accepted** (pending no objections)  
- Move **FIP-113 / 114 → Last Call**  
- Push **FIP-115 → Draft → Last Call (with validation)**  
- Lock **NV28 scope to realistic, owned items**  
- Drop exponential backoff proposal (F3)  
- Target **late May upgrade window**  

---

## Immediate Actions

- Finalize FIP-112 (Last Call completion)  
- Advance FIP-113 / 114 lifecycle  
- Secure independent validation for FIP-115  
- Confirm NV28 scope with implementers  
- Update public upgrade timeline  
- Resolve FIP-100 dashboard data gaps  

---
