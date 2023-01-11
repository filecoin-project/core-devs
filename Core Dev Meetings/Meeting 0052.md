# Core Dev 52 Meeting Notes

**Meeting Date & Time:** Time: Dec 1, 2022 16:00 PM UTC

**Meeting Recording:** 

**Meeting Slides:** [https://docs.google.com/presentation/d/1O4dFR-pgQdGw4suqGNiupl9PPN0PB2bHaQGbyq_Z-uw/edit#slide=id.g1a06cc845bd_0_9](https://docs.google.com/presentation/d/1Ep_5ctW2k6BbpSyjpG9OdhS6JXb-53_zdUV0D4JqnXw/edit#slide=id.g175c1179fa4_0_0)

**Attendance:** Protocol Labs, Filecoin Foundation, Implementation teams, and other representatives.


### **[Governance Discussion: nv18 scope](https://github.com/filecoin-project/tpm/discussions/115#discussioncomment-4089686)**

- Led by Jennifer Wang - Lotus (Slack & Github - @jennijuju) 

- To find out more about the nv18 scope, please read this [post](https://github.com/filecoin-project/tpm/discussions/115#discussioncomment-4089686)
- Discussion focused on the scope and timelines of the nv18 upgrade ahead of the holiday season. 
- The upgrade will be focused on launching into the Filecoin network, hence all FIPs going to the upgrade are realted to FEVM. 
-  FIP0047 is the only non-FEVM FIP being proposed into nv18 upgrade.
    
#### Proposed timelines for nv18 

- Dec 8: Hyperspace DeveloperTestnet
- Dec 9: Scope lock down- new FIPs after this, will go through the governance process
- Jan 6: Builtin actor code freeze 
- Jan 16: FEVM audits complete 
- Jan 26th: Calibration upgrade 
- Mid Feb: Mainnet upgrade 


Governance timelines: 
- Dec 13: All nv18 FIPs should have open drafts 
- Dec 22: All nv18 FIPsshall move to Last Call 
- Jan 5: All nv18 FIPs shall be accepted 



---

Questions: 
- **What is the difference between Dec 9 (scope lock-down) and Dec 22 (All FIPs in Last Call)**: Dec 9 is a window to propose FIPs to go into the upgrade, the expectation is  that by Dec 22, the proposed FIPs should have gone throught he governance process and in Last Call. Any FIP proposed after Dec 9 should not be considered to go into the network upgrade. 
- Descriptions and timelines for the nv18 should be re-considered avoiding ambiguity as well as considering Chinese New Year holidays and testing requirements. 
 
 

---

 - There is a tight FIP review and acceptance timelines for Core Devs and FIP Editors. 
 - There are two newly introduced testnets- [`Wallaby and Hyperspace `](https://github.com/filecoin-project/FIPs/discussions/544)
 - CryptoEcon Lab are looking into the gas impact user-deployed contracts will bring into the network. A report will be delivered by Dec 18. 

 
> 

 
    
    
### **[Governance Discussion: FIP implementation and acceptance sequencing](https://github.com/filecoin-project/FIPs/discussions/535)**

- Led by Alex North - ConsensusLab (Slack & Github  @anorth)
-  [Related discussion post](https://github.com/filecoin-project/FIPs/discussions/535)
-  Became apparent in FIP0045 the importance of understanding implementation requirements prior to writing a FIP. 
- FIP0045 gave rise to this discussion as the FIP had impacts on gas costs of publishing deals. This gas implication was not known until after FIP acceptance. 
- Having prior knowledge on this, would have meant modification of the FIP or optimization.
- Overall governance timelines might increase if more implementation work is done before a FIP is accepted
- A possible solution might be the stage between `accepted` and `finalized` for testing and design of FIPs. In additon to having post-implementation monitoring and mitigation plans. 
- Discussions to continue offline 



### **[Governance Discussion: Core Dev Updates](https://www.notion.so/filecoin/Core-Devs-Structure-Purpose-Updates-for-2022Q4-58da9e014afb4a2bafabc5fd5a893e3f)**

- Led by Kaitlin Beegle - Filecoin Foundation (Slack & Github - @Kaitlin_FF)  
-  [Related discussion post](https://www.notion.so/filecoin/Core-Devs-Structure-Purpose-Updates-for-2022Q4-58da9e014afb4a2bafabc5fd5a893e3f)
- There are new documentation updates for Core Devs processes.  
- It is important to have clear understanding fo the objectives of the Core Dev group to meet the demands of anticpated higher governance demands.
- Core Devs are not the same as Observers. 
- Core Devs should be self-governing with attendance and participation requirements. A public attendance list will be maintined in the Core Devs repo. 

**FIP Procedural Update**
- For Cryptoeconomic FIPs, instead of going through a soft consensus process, Core Devs are asked to either accept or reject the FIP. 
- Community feedbck is still a relevant driver of the process. 
- Similar procedure for Emergency FIPs which are time-bound and network critical.
- A decision should be reached quickly 

### **Network Growth - Challenges & Solutions**

Led by: 
- Stefan Vervaet - Protocol Labs (Github - @Stefaan-V) 
- Porter Stowell - Filecoin Foundation (Slack & Github - Porter Stowell )
-  [Related discussion post](https://github.com/filecoin-project/community/discussions/572)
- As an outcome of FIP0036, a discussion post has been posted summarizing challenges facing the Filecoin Network aimed at driving community participation, protocol changes and tooling needed to address challenging environment for Filecoin 
- The goal of this discussion is to share information on usability and long-term participation from Storage Provider's arising from weekly Storage Provider's Working Group Meetings.     


### **General Discussion and QnA:**


- Conversations are still open regarding Core Dev engagement, structure and participation
   


