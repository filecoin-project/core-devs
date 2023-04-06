# Core Dev Meeting #56 

**Meeting Date & Time:** Thursday 6, April 2023 16:00 PM UTC

**Meeting Recording:** 

**Meeting Slides:** https://docs.google.com/presentation/d/1q3mBxSCVAyQJHB8_X0zX6YwG7yHvCBj9ySUi_q0g6p8/edit#slide=id.g22358d4af81_0_11


## FIP0056 Hybrid Soft-Consensus Deliberation 

**Facilitated by the Filecoin Foundation**

As [publicly documented](https://filecoinproject.slack.com/archives/C01EU76LPCJ/p1677875322122949), Core Devs were today asked to contribute to a "hybrid soft consensus" process by reviewing and assessing the question of whether FIP0056 should be accepted or rejected.
- Core Devs were also asked to consider technical reviews, network best practices, as well as a summary of community feedback gathered to-date (see: [Core Devs FIP0056 Summary Document](https://docs.google.com/document/d/1szlNgp4JtzoAgBS_NVlY0QBH4XnZlA_NijbFOAqSQs0/edit#heading=h.mv6a3jgpjsty)).  
- Guidance materials were provided to Core Devs to help them navigate this process on behalf of the Filecoin community (see: [Core Devs Hybrid Soft Consensus Guidance Document](https://docs.google.com/document/d/1z1FPeac39PyU9Z3e4-NcGONQCO1YDMwIbQFApNPBepU/edit)). 

During the meeting, various Core Devs spoke for and against the FIP. 
- Key arguments in favor of accepting the FIP included: 
  -  From a technical perspective, there are no concerns about accepting the proposal. The FIP represents a simple protocol change that has been thoroughly reviewed by FIP Editors. 
     - Two core devs noted that there may be additional refinements necessary during implementation, and that a PR has already been opened should the FIP be accepted.  
  -  There are many stakeholders in the Filecoin ecosystem- many of whom would benefit from FIP0056- who have not weighed in on this process. Core Devs should be able to represent their interests. 
  -  Cryptoeconomic changes are likely to be difficult, but can also be necessary. Even if we believe a majority of the community opposes FIP0056, there may still be a valid reason for overruling that feedback and implementing the FIP. 
     - Certain stakeholder behaviors are financially incentivized, such that individual interests may not be in the best interest of the network. 
  -  We should not reject the FIP based on misinformation about the nature and/or specification of the proposal.  Many community members have stated provided negative feedback on the FIP based on a misunderstanding of the proposal.
  -  This FIP was motivated by fundamental threats to the Filecoin economic model, and it appears that the impact of NOT accepting FIP0056 is much more signficant than current community consensus. 
- Key arguments in favor of rejecting the FIP included: 
   -  Community sentiment may be difficult to quantify, but it does seem clear that a signficant number of community members (particularly from the SP community) are strongly opposed to this FIP. 
      - There could be security issues or other consequences to accepting a FIP that is strongly disliked. 
      - There could be residual damange to the reputation of the Filecoin governance process. 
      - Even if one were to believe that the FIP will benefit the network overall, we may not have robust enough governance processes to accept a FIP of this type. If that's the case, we should act in deference to the current system, even if we believe it is limited. 
   -  The FIP0056 policy only applies at sector extension, commitment, and replica update. There is no evidence that community members will choose to implement this policy and extend sectors if FIP0056 is accepted. 
   -  This FIP would affect the role and usage of Filecoin+ in a way that may not be sustainable. FIP0056 does not address open questions and challenges that community members have with this program, even though it further cements its importance. 
      -  FIP0056 may make sense to be implemented as L2 functionality, but not as a fundamental protocol change. 

In addition, several points of feedback were offered about the governance process in general. 
  - The community has been discussing SDM for more than 8 months, which is too long a period of time. 
  - Cryptoeconomic FIPs likely need their own governance pathway in order to be fairly assessed. 
      - Economic changes are always hard, and the soft consensus process sets an unreasonably high bar for implementation. 
  - Deeper collaboration between implementers and FIP authors is necessary. 
  - Core researchers should be more focused on collaborating with community members, rather than convincing them. 
  - Community members need more resources and more support in authoring and engaging with FIPs.  FIPs should be available to anyone, regardless of their resources or technical knowledge. 
  - It is not clear right now how to ascertain what is of 'value' to the network. 
   - We may agree on the mission of Filecoin, but this does not accurately or meaningfully align community members around key priorities. 

**Ultimately, Core Devs agreed that there was consensus to reject the FIP.** 
  - FIP status has been updated to 'Rejected', and is eligible for inclusion in neither nv19 nor any other network upgrade. 


## Technical Discussion: Windows PoSt Grindability Fix
**Facilitated by the Nemo**
- [FIP0061](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0061.md) proposes to change the WindowPoSt challenge generation so that the derivation of each sector's set challenges is independent of other sectors challenged during WindowPoSt. 
- The purpose of this FIP is to prevent avenues of grinding WindowPoSt challenges as long as the sector stays within one deadline. 
- For additional discussion, see [here](https://github.com/filecoin-project/FIPs/discussions/656).


    
## Network v19 (Lightning Upgrade) Updates
**Facilitated by the Jennifer Wang**

Key dates
- April 18: Calibnet 
- May 9: Mainnet v19 (lightning) 
- May 16: Mainnet v20 (thunder; ghost upgrade to support proof generation update in FIP0061)
 
In-scope FIPs for nv19
- [FIP0052](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0052.md) - Increase max sector commitment to 3.5 years [*Accepted*]
- [Amendment to FIP0057](https://github.com/filecoin-project/FIPs/pull/673) - Add BatchBalancer Parameter Recalibration [*Last Call*]
- [FIP0060](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0060.md) - Set Market Deal Maintenance Interval to 30 Days [*Last Call*]
- [FIP0061](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0061.md) - WindoPoSt Grindability Fix [*Last Call*]
- [FIP0062](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0062.md)- Fallback Method Handler for Multisig and Payment Channel Actors [*Last Call*]


## **General Discussion and Q&A:** 
- Community Governance Call coming up on 24 April 2023, registere [here].(https://fil-org.zoom.us/meeting/register/tZMkf-2qpjIqEt3nkeKh_7f7_F6wPm76zbTw)
 
