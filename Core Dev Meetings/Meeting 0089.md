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

📌 Agenda Overview
🎉 Welcome to Core Devs # 89
Moderator: Christian Taylor

📊 FIP Status & FIP Tracker — Coordination Point

- Overview of current FIP pipeline status and progression across stages
- Walkthrough of the FIP Tracker and how it is used today: https://tanisha-fil.github.io/fips-dashboard/fips-dashboard-static.html
- [FIP 112: Moving to LAST CALL](https://github.com/filecoin-project/FIPs/pull/1220)
- March 23rd ending period
- [FIP 113: Moving to Draft](https://github.com/filecoin-project/FIPs/pull/1228)
- [FIP 114 Moving to Draft](https://github.com/filecoin-project/FIPs/pull/1230)
- [FIP 115: Pending Review and Discussion](https://github.com/filecoin-project/FIPs/pull/1233)

📦 Discussion: FIP-0113- secp256r1 (P-256) P256VERIFY Precompile for FEVM

- PR: https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0113.md
- Introduces a P256VERIFY precompile to enable efficient verification of secp256r1 (P-256) signatures in the Filecoin EVM (FEVM).
- Intended to support modern authentication systems such as passkeys, WebAuthn, and hardware security modules.
- Defines a new reserved precompile address (0x0100) and specifies input format, success/failure behavior, and FEVM gas accounting.
- Open Discussion thread: https://github.com/filecoin-project/FIPs/pull/1228
- Open questions, requested feedback, and next steps for protocol or client teams

📦 Discussion: FIP-0114- Add Support for EIP-7939 (CLZ Opcode) in the FEVM

- PR: https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0114.md
- Proposes adding support for EIP-7939, introducing the CLZ (Count Leading Zeros) opcode to the Filecoin EVM (FEVM).
- The opcode improves efficiency for low-level bit operations commonly used in cryptography, compression, and numeric algorithms.
- Expected to improve performance and reduce gas costs for contracts that rely on bitwise calculations without requiring complex workarounds.
- Open Discussion thread: https://github.com/filecoin-project/FIPs/pull/1230
- Open questions, follow-ups, and next steps for protocol or client teams

📦 Discussion: FIP-0115- Premium Percentile Ratio
PR: https://github.com/filecoin-project/FIPs/pull/1233
Overview of the proposed fee mechanism and motivation behind the Premium Percentile Ratio
Discussion of expected protocol impact, fee behavior, and any implementation considerations
Potential FIP 0115
Open Discussion thread: https://github.com/filecoin-project/FIPs/discussions/1236
Open questions, requested feedback, and next steps for protocol or client teams

🚀 NV’28 Network Upgrade Planning

- Discussion Thread: [nv28 Network Upgrade Planning #205](https://github.com/filecoin-project/core-devs/discussions/205)
- Discussion on upgrade scope, sequencing, and risk management
- Community input on prioritization and avoiding feature overload in a single upgrade

🏛 Governance Updates: FIP-100 Committee

- PR: [FIP-0100 committee doc & governance docs reorg FIPs#1219](https://github.com/filecoin-project/FIPs/pull/1219)
- Latest updates from the FIP-100 Monitoring Committee
- Governance documentation and process refinements
- Alignment on upcoming milestones and next steps

📣 Want to propose or present an agenda item?
Please comment directly in this GitHub thread with your suggested topics or requests for future calls.
Looking forward to seeing everyone at Core Devs # 89! 🚀
