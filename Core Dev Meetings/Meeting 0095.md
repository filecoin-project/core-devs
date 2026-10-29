# Filecoin Core Devs 95 — Meeting Minutes

Meeting: Core Devs 95\
Facilitator: Christian Taylor\
Date: October 28th, 2026\
Duration: Approximately 17 minutes

## 1. Agenda

The meeting covered:

- NV29 Solstice completion and transition to NV30 planning.
- Deferred proposals and implementation scope for NV30.
- FIP-0119: Increase Maximum Sector Lifetime to 10 Years.
- FIP-0117: Repeated SnapDeals with Piece-Level Integrity.
- Removal of the Built-in Payment Channel Actor.
- FRC-0120: Filecoin Encryption Envelope.
- ClearState Simplification.
- NV30 implementation bandwidth, scheduling, and next steps.

The primary focus was reviewing the outstanding FIP backlog, identifying potential candidates for NV30, and establishing the process for confirming implementation scope and engineering capacity.

No formal decisions were made regarding the final NV30 scope or upgrade schedule.

## 2. NV29 Solstice Completion

NV29 successfully completed, including the implementation of FIP-0118 (Solstice).

With Solstice deployed, governance and implementation planning are transitioning toward NV30.

The meeting identified several previously deferred proposals alongside newer proposals that may be candidates for inclusion in the next network upgrade.

## 3. Deferred Proposals for NV30

Four previously deferred items remain under consideration for NV30.

### FIP-0107

FIP-0107 was discussed as an accepted proposal with remaining implementation work.

- Estimated size: Medium (2–4 engineering weeks).
- Lotus implementation work was reported as accepted.
- Remaining Venus implementation requirements and engineering bandwidth need to be confirmed.
- Depending on implementer capacity, the proposal may proceed with NV30 or require another deferral.

### Fork Signaling Repurposing

The fork signaling proposal remains under consideration.

- The change was described as opt-in.
- The primary outstanding question is whether to formalize the behavior through an FRC or ship it as a client-level change outside NV30.
- Implementation scope and the appropriate delivery path remain to be determined.

### Sealer ID

The Sealer ID proposal has been deferred since NV28.

- The proposal involves a minor actor change but carries implementation risk.
- Engineering teams have not yet provided a confirmed T-shirt size.
- A preliminary Medium estimate was suggested but remains unvalidated.

The outstanding options are to re-scope, defer again, or withdraw the proposal.

Michael Madoff asked what additional information was required to size the work. Christian confirmed that engineering teams need to review the remaining implementation requirements and provide an estimate.

### F3 Calibration

F3 calibration remains under consideration, with scope dependent on the current technical status of F3.

- Estimated size: Large (more than 4 engineering weeks).
- Implementation requirements and readiness remain unresolved.
- Inclusion in NV30 will depend on further technical review and available engineering bandwidth.

### Decision

No final implementation decisions were made regarding the four deferred items.

Christian will bring the outstanding questions to the next Filecoin Implementers call to obtain engineering estimates, confirm ownership, and determine which proposals are feasible for NV30.

## 4. FIP-0119: Increase Maximum Sector Lifetime to 10 Years

### Proposal Overview

FIP-0119 proposes increasing the maximum lifetime for PoRep sectors from five years to ten years.

The primary objective is to allow storage providers to extend eligible sectors rather than resealing them after reaching the existing five-year maximum.

The proposal also addresses the prior FIP-0067 change and recognizes that changes to PoRep security margins could require replacement sealing in the future.

### Technical Considerations

The proposed change would:

- Increase the maximum sector lifetime from 5 to 10 years.
- Allow eligible sectors to be extended rather than resealed.
- Reduce operational overhead for storage providers.
- Require consideration of existing tooling that hardcodes the five-year limit.

### Storage Provider Flexibility

Michael Madoff asked whether storage providers would be affected if they chose not to extend sectors to ten years.

Christian noted that existing tooling enforces the five-year ceiling, but the handling of providers who do not wish to extend their sectors requires further clarification.

### NV30 Considerations

Michael also asked whether FIP-0119 was a firm candidate for NV30.

Christian noted that engineering discussions appeared broadly supportive of the proposal.

However:

- FIP-0119 should not necessarily serve as the sole driver for NV30.
- Its implementation scope is not expected to be Large, although no formal estimate was confirmed.
- Combining FIP-0119 with other proposals, particularly FIP-0117, could provide a more substantial upgrade scope.

The proposal is considered timely given Filecoin's sixth anniversary and the growing relevance of the five-year sector lifetime limit for early network participants.

### Decision

FIP-0119 remains a potential candidate for NV30.

No final inclusion decision or implementation estimate was confirmed.

Further clarification is needed regarding storage provider flexibility and tooling requirements.

## 5. FIP-0117: Repeated SnapDeals with Piece-Level Integrity

FIP-0117 remains in Draft and has been discussed during previous Core Devs meetings.

### Proposal Overview

The proposal would allow storage providers to perform repeated SnapDeals operations on sectors that have already been upgraded.

The proposed reSnap functionality would allow storage providers to replace some or all of the data in an already snapped committed-capacity sector.

### Current Status

Christian noted that questions from previous meetings had already been communicated to the proposal author.

No new substantive technical discussion or status changes were recorded during this meeting.

### NV30 Considerations

FIP-0117 was identified as a potentially complementary proposal to FIP-0119.

Together, the proposals could provide a more substantial upgrade by supporting both longer sector lifetimes and additional flexibility for updating sector data.

### Decision

FIP-0117 remains under review as a potential NV30 candidate.

Outstanding author feedback and implementation readiness must be addressed before confirming inclusion.

## 6. Removal of the Built-in Payment Channel Actor

### Proposal Overview

A new proposal from Rod was introduced to remove the legacy built-in Payment Channel Actor (PaychActor) from the Filecoin protocol.

The proposal emerged from work associated with Solstice.

The actor was originally designed to support retrieval micropayments. With payment functionality increasingly handled through FEVM-based mechanisms, including Filecoin Pay, its continued inclusion in the protocol is being reconsidered.

### Technical Considerations

The proposed change would remove the built-in actor entirely.

Michael Madoff asked whether any existing applications or users still depend on the actor.

Christian indicated that remaining usage was believed to be minimal but had not been confirmed.

Before proceeding, the proposal requires:

- Confirmation of any remaining dependencies or active usage.
- A formal FIP draft and pull request.
- Identification of implementation ownership.
- Review of engineering scope and potential compatibility implications.

### Decision

The proposal remains in Discussion.

Christian will follow up with Rod regarding existing usage and work toward a formal proposal.

Implementation ownership and potential NV30 inclusion will be discussed with implementers.

## 7. FRC-0120: Filecoin Encryption Envelope

FRC-0120 remains an active proposal associated with the Filecoin Encryption Envelope.

Christian noted that the proposal had previously been discussed and that implementation work could proceed following the completion of Solstice.

No additional substantive technical discussion was recorded.

### Decision

FRC-0120 remains under consideration and requires further implementation coordination.

No formal NV30 inclusion decision was made.

## 8. ClearState Simplification

ClearState Simplification remains in Discussion.

The proposal concerns cleanup of network state in connection with protocol upgrades.

### Outstanding Considerations

The primary unresolved question remains whether state cleanup should:

- Occur as a recurring process associated with network upgrades.
- Be performed on an ad hoc basis when required.

Christian noted that discussions had stalled since the previous review.

### Decision

ClearState Simplification remains in Discussion.

Further engagement is required to determine whether the proposal should advance or be included in a future network upgrade.

## 9. NV30 Network Upgrade Planning

### Implementation Scope

NV30 planning will depend on engineering bandwidth, the remaining technical work, and the readiness of individual proposals.

Christian noted that the backlog could include up to eight items if both the deferred proposals and newer proposals advance.

The meeting reiterated the existing T-shirt sizing framework.

| Size       | Estimated engineering effort  |
| ---------- | ----------------------------- |
| Small (S)  | Less than 2 engineering weeks |
| Medium (M) | 2–4 engineering weeks         |
| Large (L)  | More than 4 engineering weeks |

Sizing is intended to support implementation planning and determine which changes can reasonably be delivered together.

### Planning and Coordination

Michael asked how the community and engineering teams would determine the NV30 scope and where feedback should be submitted.

Christian identified three coordination channels:

1. Filecoin Implementers calls: Confirm engineering estimates, implementation ownership, and feasibility.
2. Filecoin Implementers Slack: Coordinate technical planning and outstanding implementation questions.
3. Core Devs GitHub discussions: Collect public feedback and maintain the network upgrade planning backlog.

Christian emphasized that the implementers will determine practical implementation windows once proposals have progressed through the governance process.

### Preliminary Timeline

Christian noted that the holiday period and available engineering bandwidth would affect scheduling.

An actor code freeze in February or March 2027 was discussed as an optimistic possibility, while a network upgrade in Q2 2027 was considered more realistic.

These dates are preliminary and depend on the scope selected and engineering readiness.

No formal NV30 upgrade schedule was approved.

### Next Steps

The next Filecoin Implementers call, expected Tuesday, November 3, will be used to:

- Confirm missing T-shirt sizes.
- Review deferred proposals.
- Identify engineering ownership and outstanding dependencies.
- Evaluate new proposals for potential inclusion.
- Begin narrowing the NV30 scope and implementation timeline.

The community was encouraged to provide feedback through the public Core Devs network upgrade planning discussion.

## 10. Decisions and Outcomes

1. NV29 Solstice, including FIP-0118, has been completed successfully.
2. NV30 planning will prioritize reviewing the deferred backlog and assessing newer proposals.
3. FIP-0107 requires confirmation of Venus implementation requirements and engineering capacity.
4. Fork Signaling Repurposing requires a decision on formalizing an FRC versus implementing a client-level change.
5. Sealer ID requires a confirmed engineering estimate and a decision on re-scoping, deferral, or withdrawal.
6. F3 Calibration remains dependent on technical readiness and is estimated as a Large effort.
7. FIP-0119 remains a potential NV30 candidate, with outstanding questions regarding tooling and storage provider flexibility.
8. FIP-0117 remains in Draft, with previous questions awaiting further author engagement.
9. FIP-0117 and FIP-0119 were identified as complementary proposals that could contribute to a substantial NV30 upgrade.
10. Removal of the Built-in Payment Channel Actor remains in Discussion and requires validation of existing usage and a formal FIP draft.
11. FRC-0120 remains under consideration for further implementation work.
12. ClearState Simplification remains in Discussion, with recurring versus ad hoc cleanup unresolved.
13. Final NV30 scope will be determined through the governance process and engineering feasibility review.
14. No formal NV30 code freeze or mainnet activation date was established.
15. The next Filecoin Implementers call will serve as the primary forum for confirming estimates, ownership, and preliminary scheduling.

## 11. Action Items

| Action                                                                                            | Owner                           | Status      |
| ------------------------------------------------------------------------------------------------- | ------------------------------- | ----------- |
| Confirm Venus implementation requirements and remaining scope for FIP-0107                        | Christian / Implementers        | Pending     |
| Determine whether Fork Signaling Repurposing requires an FRC or can ship as a client-level change | Implementers / Proposal authors | Pending     |
| Obtain an engineering T-shirt size for Sealer ID                                                  | Christian / Implementers        | Pending     |
| Determine whether Sealer ID should be re-scoped, deferred, or withdrawn                           | Implementers                    | Pending     |
| Review F3 Calibration readiness and implementation dependencies                                   | F3 / Implementers               | Pending     |
| Clarify FIP-0119 behavior for SPs that do not wish to extend sector lifetimes                     | Proposal authors / Implementers | Pending     |
| Confirm implementation requirements and scope for FIP-0119                                        | Implementers                    | Pending     |
| Follow up on outstanding questions regarding FIP-0117                                             | Christian / Proposal authors    | In progress |
| Confirm whether the Built-in Payment Channel Actor has remaining active users                     | Christian / Rod                 | Pending     |
| Advance the Payment Channel Actor removal discussion toward a formal FIP draft and PR             | Christian / Proposal author     | Pending     |
| Identify implementation ownership for Payment Channel Actor removal                               | Implementers                    | Pending     |
| Review implementation readiness for FRC-0120                                                      | Implementers / Proposal authors | Pending     |
| Revisit ClearState Simplification and determine whether cleanup should be recurring or ad hoc     | Core Devs / Proposal authors    | Pending     |
| Obtain or validate T-shirt sizes for outstanding NV30 candidates                                  | Christian / Implementers        | Pending     |
| Review engineering bandwidth and establish preliminary NV30 scope                                 | Filecoin Implementers           | Pending     |
| Develop an NV30 implementation timeline and preliminary code freeze target                        | Filecoin Implementers           | Pending     |
| Share meeting materials and direct community members to the public planning discussion            | Christian                       | Pending     |
| Collect and respond to community comments in the Core Devs upgrade planning discussion            | Christian                       | Ongoing     |

## 12. Next Meeting and Community Participation

The next Filecoin Implementers call is expected on November 3, 2026, following its biweekly cadence.

Core Devs meetings will continue on their monthly cadence.

Community members and implementers are encouraged to contribute to the public planning discussion:

[NV30 Network Upgrade Planning — GitHub](https://github.com/filecoin-project/core-devs/discussions/221?utm_source=chatgpt.com)

The priority before the next Core Devs meeting is to establish a clearer NV30 scope, confirm implementation estimates, and identify the proposals that engineering teams can realistically deliver.

Prepared from the October 28, 2026 meeting transcript, following the Core Devs 94 minutes format. Pending items reflect discussion follow-ups, not formally assigned commitments unless stated during the meeting.
