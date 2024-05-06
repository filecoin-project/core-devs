# Core Dev Meeting #70 

**Meeting Date & Time:** Friday 3, May 2024 00:00 UTC

**Meeting Recording:** See README

**Meeting Slides:** https://docs.google.com/presentation/d/1Dh8W42pY3nJQS7fcujaVM9XP0RbA76RJhqPTudFs7K4/edit#slide=id.g2700f096a03_0_204


---

## [Practical Fast Retrieval on Filecoin](https://github.com/filecoin-project/FIPs/discussions/988)
#### ZX (CEL)

## Overview
One of the largest challenges for the Filecoin Network to deliver value:
Expensive to retrieve data stored on Filecoin
The meeting explored challenges in improving data retrieval speeds on Filecoin. With increasing competition and demand for high-performing decentralized storage, practical solutions were prioritized.


## Key Options Presented
1. **Proof of Data Possession (PDP):**
   - Provides an option for storing clear copies of data.
   - Reduces hardware requirements and eliminates unsealing costs.
   - Feedback provided on the call: Some participants expressed concerns over potential weak ties to the main Filecoin protocol and a lack of incentive alignment.

2. **Layer 2 Solutions:**
   - Proposed Layer 2 protocols as a method to improve data retrieval.
   - Existing L2 protocols work well for hot storage but often avoid relying on Filecoin due to its slower retrieval speeds.
   - Feedback provided on the call: Several participants felt more research is needed to ensure economic viability while meeting speed requirements.

3. **Incentive Restructuring:**
   - Encourages rapid data retrieval by realigning incentives.
   - Aims to attract new participants, maintain a positive-sum ecosystem, and increase demand for FIL tokens.
   - Feedback provided on the call: Participants emphasized the need for careful adjustments to prevent disruptions and incentivize sustained network growth.

4. **Naive SDR Reduction:**
   - Simplifies SDR layers to expedite retrieval but doesn't fully address retrieval speed.
## Insights & Requirements
- Time to market is critical; the solution needs implementation within the next two upgrades.
- Incentives should maintain positive-sum outcomes while reducing hardware costs and increasing FIL demand.
- Feedback: Participants stressed prioritizing rapid delivery without undermining existing business models.

## Outstanding Questions
- How will PDP affect retrieval speeds and L2 dependency on Filecoin?
- What block rewards or incentives can effectively drive PDP adoption without disrupting the current network balance?

## Next Steps
1. Validate the impact of PDP and Layer 2 optimizations.
2. Refine incentive models to support network growth and minimize ecosystem disruptions.
3. Engage stakeholders in proposal development to align priorities and establish effective incentives.
---
# [Fast Finality in Filecoin (F3)Updates](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0086.md)
#### Jorge Soares (FilOz)

## Premise
The discussion led by Jorge Soares explored ways to improve block finality on the Filecoin network. Faster finality is crucial to enhancing transaction speeds and boosting user confidence.

## Key Discussion Points
1. **Passive Testing of F3:**
   - Testing for the F3 upgrade has begun, starting with nv. 23 upgrade.
   - Passive testing is utilized to identify issues while minimizing disruptions to operations.

2. **Collaborative Input:**
   - Participants were encouraged to provide feedback and help address gaps during testing.
   - A collaborative document outlining the testing roadmap was shared to facilitate contribution.

3. **Ongoing Discussions:**
   - Several discussions remain active around F3 inclusion in nv23 network upgrade.
   - Early alignment of expectations and addressing technical challenges is critical.

## Feedback & Next Steps
- Community input will refine the testing and implementation of F3.
- The implemetation and testing will be deployed across the next two upgrades. 
- Governance timeline to be reviewed based on the improtance of this FIP. 


