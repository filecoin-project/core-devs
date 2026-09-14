# Filecoin Core Devs 94 — Meeting Minutes

**Meeting:** Core Devs 94
**Facilitator:** Christian Taylor
**Date:** August 26th, 2026
**Duration:** Approximately 37 minutes

## 1. Agenda

The meeting covered:

* FIP-0118: Solstice
* FIP-0117: Repeated SnapDeals with Piece-Level Integrity
* FRC-0116: JSON-RPC HTTP Conventions
* Filecoin Encryption Envelope
* ClearState Simplification
* Stake-Weighted F3 Finality
* NV29 network upgrade timeline

FIP-0118 remained in Last Call, while Stake-Weighted F3 Finality was introduced as an early-stage proposal in Ideation.

---

## 2. FIP-0118: Solstice

FIP-0118 remained in Last Call and continued to be the primary proposal scoped for NV29.

The meeting agenda called for continued review of:

* Remaining technical and governance considerations.
* Transition and testing requirements.
* NV29 implementation readiness.
* Outstanding comments before acceptance.

No additional substantive Solstice discussion was captured in the supplied meeting transcript.

---

## 3. FIP-0117: Repeated SnapDeals with Piece-Level Integrity

FIP-0117 remained in Draft.

No substantive discussion or status change for FIP-0117 was captured in the supplied meeting transcript.

---

## 4. FRC-0116: JSON-RPC HTTP Conventions

FRC-0116 remained in Draft.

No substantive discussion or status change for the proposal was captured in the supplied meeting transcript.

---

## 5. Additional Proposals in Discussion

Two additional proposals remained in the discussion stage:

* Filecoin Encryption Envelope
* ClearState Simplification

No substantive discussion or status changes for these proposals were captured in the supplied meeting transcript.

---

## 6. Stake-Weighted F3 Finality

### Proposal Overview

Hannah Howard presented an early-stage concept for using staked FIL as an additional economic-security basis for F3 finality.

The proposal is not intended simply as a mechanism for increasing F3 participation. Hannah noted that lightweight software or a smaller incentive program could accomplish that more directly.

The broader goals include:

* Adding an economic-security layer to F3.
* Requiring stake in addition to existing storage-consensus resources for certain attack scenarios.
* Creating productive demand for FIL.
* Providing a potential yield opportunity for FIL holders.

The mechanism would not completely eliminate storage-based attacks, but several attack scenarios would require control of both stake and storage-consensus resources.

### Technical Participation

Andy Jackson noted that lightweight F3 participation software already exists.

The software reportedly requires:

* Less than 200 MB of RAM.
* Less than 1 GB of disk space.

This could significantly reduce the infrastructure requirements for participants compared with operating a full Lotus or Forest node.

Hannah noted that broader F3 participation would benefit from lightweight infrastructure, particularly if the proposed staking mechanism increases the number of operators.

### Delegation and Validator Participation

Jennifer Wang noted that most proof-of-stake networks do not result in every token holder directly operating validator infrastructure.

Instead, participation often consolidates around:

* Professional validator operators.
* Staking pools.
* Delegation services.

Hannah agreed that delegated participation would likely be expected under the proposed model.

Smaller FIL holders could potentially delegate their stake to an operator that aggregates participation, runs the required infrastructure, and retains a percentage of the reward.

Additional software would be required to support this model.

### Locking Period

Jennifer raised concerns regarding how long FIL would need to remain locked.

If participants can enter the system, collect rewards, and leave quickly, the mechanism may not provide the intended economic-security benefits.

Hannah confirmed that:

* A minimum locking period will be required.
* The period should extend beyond expected consensus finality.
* The exact duration has not yet been parameterized.

The proposal is primarily designed to maintain a target aggregate amount of FIL locked over time rather than requiring every individual participant to remain locked for an extended period.

If participants leave the pool, available rewards would increase and create an incentive for additional FIL to enter.

### Participation Target and Cold Start

Jennifer raised concerns regarding the proposed approximately 80 million FIL participation target.

Questions included:

* Whether the target can realistically be reached.
* What happens if participation never reaches the target.
* What happens if participation later falls below the required threshold.
* What level of yield would be required to attract sufficient FIL.
* Whether participation would become concentrated among a small number of operators.

Andy suggested potentially stair-stepping participation toward the target to help address the cold-start problem.

Hannah clarified that participants would begin receiving rewards for valid F3 certificates before the target threshold is reached.

The proposed sequence would be:

* Participants begin submitting F3 certificates.
* Valid participation begins earning rewards.
* The aggregate staking pool grows.
* Stake-backed F3 finality activates once the required security threshold is reached.

This creates an incentive to bootstrap the pool before the stake is relied upon for finality.

### Economic Considerations

Jennifer recommended additional modeling based on previous discussions with large FIL holders and storage providers.

Previous feedback indicated that participants would want clear information regarding:

* Expected yield.
* Minimum lock duration.
* Liquidity.
* Participation requirements.
* Likelihood of the target pool being reached.

Jennifer noted that even a six-month locking period had previously been considered lengthy by some potential participants.

### Funding and Review

Hannah noted that the proposal has been divided into two components:

* Mechanism design.
* Funding design.

A reading guide is available to help participants identify the most relevant sections of the proposal.

Hannah indicated a preference for using the mining reserve as the funding source but noted that the funding model remains open for discussion.

### Decision

Stake-Weighted F3 Finality remains in Ideation.

No formal decision was made to advance the proposal into Draft or include it in a specific network upgrade.

Additional modeling and parameterization are required around locking periods, participation targets, cold-start behavior, yield, delegation, and funding.

---

## 7. NV29 Network Upgrade

FIP-0118 remains the primary proposal scoped for NV29.

### Working Timeline

* **Actor code freeze:** August 28
* **Lotus RC for Calibration Network:** Week of September 4
* **Calibration Network upgrade:** Week of September 11
* **Final Lotus release:** Week of September 18
* **Mainnet upgrade:** Week of October 8

Stake-Weighted F3 Finality is not currently scoped for NV29.

---

## 8. Decisions and Outcomes

1. FIP-0118 remains in Last Call and scoped for NV29.
2. FIP-0117 and FRC-0116 remain in Draft.
3. Filecoin Encryption Envelope and ClearState Simplification remain in discussion.
4. Stake-Weighted F3 Finality remains in Ideation.
5. No decision was made to advance Stake-Weighted F3 Finality into Draft or assign it to a network upgrade.
6. A minimum FIL locking period will be required but remains to be parameterized.
7. Participants could begin receiving F3 rewards before the target security threshold is reached.
8. Additional modeling is required around the approximately 80 million FIL target, cold-start behavior, yield, and participation.
9. Delegated staking and staking pools are expected to be potential participation models.
10. A stair-step approach to the participation target was raised for further consideration.
11. The mining reserve was identified as Hannah's preferred funding approach, but no formal funding decision was made.

---

## 9. Action Items

| Action                                                                                 | Owner                        | Status            |
| -------------------------------------------------------------------------------------- | ---------------------------- | ----------------- |
| Share the Stake-Weighted F3 proposal materials with meeting participants               | Christian                    | Pending           |
| Share the meeting recording and supporting resources                                   | Christian                    | Pending           |
| Define and parameterize the minimum FIL locking period                                 | Proposal authors             | Pending           |
| Model feasibility of the approximately 80 million FIL participation target             | Proposal authors             | Pending           |
| Define behavior if participation remains below or later falls below the target         | Proposal authors             | Pending           |
| Model expected yield and participation requirements                                    | Proposal authors             | Pending           |
| Evaluate a stair-step approach to reaching the participation target                    | Proposal authors             | For consideration |
| Further define delegated staking and staking-pool requirements                         | Proposal authors             | Pending           |
| Incorporate previous FIL-holder and storage-provider feedback into the economic design | Proposal authors             | Pending           |
| Review the mechanism-design and funding-design materials                               | Core Devs / reviewers        | In progress       |
| Continue discussion regarding use of the mining reserve as the proposed funding source | Proposal authors / Core Devs | In discussion     |

