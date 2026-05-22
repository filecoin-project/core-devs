🧠 **Core Devs Call #91 — Community Agenda**
📅 **Date:** Friday, May 22, 2026
🕒 **Time:** 07:30–08:00 AM PST
👩‍💼 **Moderator:** Christian Taylor

---

🌍 **Timezones**

| Region | Local Time | Date |
|--------|-----------|------|
| 🕡 PT (California, UTC−8) | 07:30–08:00 AM | Fri May 22 |
| 🕙 ET (New York, UTC−5) | 10:30–11:00 AM | Fri May 22 |
| 🕞 CET (Europe, UTC+1) | 03:30–04:00 PM | Fri May 22 |
| 🕡 GST (Dubai, UTC+4) | 06:30–07:00 PM | Fri May 22 |
| 🕗 IST (India, UTC+5:30) | 08:00–08:30 PM | Fri May 22 |
| 🕞 UTC | 02:30–03:00 PM | Fri May 22 |

---

## Core Devs 91 — Executive Summary

**Focus Areas**
Network Upgrade (targeting May 27) · FIP-112/113/114/115 · Encryption Envelope Discussion (Kuba) · FIP-100 Dashboard · Upgrade Retrospective

---

### 1. FIP Lifecycle — Current Status

**Completed**
- FIP-112 / 113 / 114 / 115 → All in **Accepted** status, pending final migration to Final

**In Progress**
- One-pager summaries being published (FIP-112 live, FIP-113 published yesterday)
- Summaries are English/Mandarin hybrid format
- YouTube channel being updated from Call #76 through #91

**Ask**
- Core Devs requested to review the FIP one-pagers and confirm summaries accurately reflect Core Dev sentiment

---

### 2. Network Upgrade — Status

**Key Date**
- Mainnet upgrade scheduled for **May 27**

**Client Readiness**
- CalibNet upgrade completed; 16,000 transaction processing issue resolved
- Final Lotus release confirmed last week
- Venus and Forest confirmed
- ChainSafe upgrade pending confirmation

**Upcoming**
- Blog post on the way ahead of mainnet upgrade

---

### 3. New Discussion — Content Encryption Envelope (Kuba Sztandera)

**Background**
- Stems from prior work on access controls for the Filecoin/IPFS ecosystem
- Goal: standardize a base-layer content encryption format so tooling can interoperate

**Proposal Summary**
- Based on **RFC 9052 (COSE)** — a CBOR-based signing/encryption envelope format
- Uses **detached payloads** so large content isn't wrapped inside CBOR
- Mandates support for at minimum:
  - **AES-256-GCM** (standard encryption)
  - **AES-256-GCM Stream Construction** (seekable encryption via chunking)
- Chunk size defaults to **256 KB** but is configurable in the COSE header
- Key management is intentionally flexible — supports key wrapping, ECDH, HSMs (AWS and others), and custom application-specific schemes

**Key Design Points**
- Seekable decryption is achieved through chunked authenticated encryption, not the cipher itself
- Content encryption keys are preserved independently of key management scheme — data is recoverable as long as CEKs are retained
- Chunk size is set by the encrypting entity and specified in the header (no negotiation needed)

**Current State**
- Early draft with a working prototype implementation
- Slight drift between prototype and current spec; will be reconciled

**Call to Action**
- Seeking implementers and testers to validate the spec
- Christian Taylor to put out a comms ask for volunteers
- Open question: minimum key-wrapping algorithm set (Kuba's view: not strictly required at this layer)

---

### 4. FIP-100 Dashboard — Status

**Current State**
- Dashboard is **live**
- No concerns raised at this time

**Gaps**
- 3 metrics still being defined:
  - Approved committee aggregate size
  - Average per-sector onboarding
  - (1 additional TBD)

**Ask**
- Community encouraged to review the dashboard and provide feedback

---

### 5. Upgrade Retrospective — Proposal

**Proposal**
- Hold a lessons-learned retrospective after the May 27 upgrade completes
- Areas to cover: coordination, communication, rollout, documentation

**Open Item Raised (William Morriss)**
- **Log operation pricing** appears underpriced relative to other opcodes
- ~10,000x cheaper than comparable operations like multiplication (vs. Ethereum baseline)
- During testing, this allowed block explorers to be brought down unintentionally
- Lotus has already made changes to make log querying easier in the short term
- Longer-term repricing may be complex due to instrumentation within the ref-FVM
- **Action:** William to add a bullet in chat; Christian to add to **CoreDevs92 agenda**

---

### 6. Community Forum — Reminder (Michael Madoff)

- **Filecoin Incentive Reform Community Forum** is happening **tomorrow (May 23)**
- Covers Fil+ Evolution / Phil Plus Reform proposals
- Registration link shared in chat
- Core Devs encouraged to attend and bring technical perspective

---

### Decisions

- Confirm all FIPs (112–115) in Accepted status pending final migration
- Proceed with May 27 mainnet upgrade pending ChainSafe confirmation
- Encryption envelope discussion to continue; comms push for implementers/testers
- Log operation repricing flagged for CoreDevs92 agenda
- Retrospective to be scheduled post-upgrade

---

### Immediate Actions

| Action | Owner |
|--------|-------|
| Confirm ChainSafe upgrade readiness | ChainSafe team |
| Publish mainnet upgrade blog post | Christian Taylor |
| Solicit volunteers to test encryption envelope | Christian Taylor (comms) |
| Add log pricing to CoreDevs92 agenda | William Morriss / Christian Taylor |
| Complete FIP-100 dashboard metrics (3 remaining) | TBD |
| Update YouTube channel through Call #91 | Christian Taylor |
| Review FIP one-pagers for accuracy | All Core Devs |
