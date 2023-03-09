

# Core Dev 55 Meeting Notes

**Meeting Date & Time:** Time: Friday 3, March 2023 00:00 UTC

**Meeting Recording:** 

**Meeting Slides:** [https://docs.google.com/presentation/d/1_YlyhARWig2QnmsqDe82Opd3tUF2qGAtEDxAU3a65TU/edit#slide=id.p8](https://docs.google.com/presentation/d/1LgetWRNTKhOjQUSSKxBP51V0-lkDggEcRsQdOz6aOfk/edit#slide=id.p8)

**Attendance:** Protocol Labs, Filecoin Foundation, Implementation teams, and other representatives.

### **[Optimistic Snapdeal](https://github.com/filecoin-project/FIPs/discussions/645)**

- Facilitated by Luca & Irene  - CryptoNetLab  
- Slack: Luca & Irene giacomelli

- To find out more about this proposal, please read this [post](https://github.com/filecoin-project/FIPs/discussions/645)

**RATIONALE**: 
- To propose a new version of the SnapDeal protcol which aims to intorduce a tradeoff between SnapDeal cost and SLA offered by the protocol. 
- Snapdeals came into effectt 2022 as it allows deals to be injected into existing CC Sectors
- However, cost is significant on the Storage Provider side. 
- This proposal is to provide a low-cost alternative to Storage Providers.
### **[Presentation- Market cron risks and mitigations](https://github.com/filecoin-project/FIPs/discussions/645)**

- Facilitated by Alex North  - CryptoNetLab  
- Slack- anorth 

- To find out more about this discussion, please read this [post](https://github.com/filecoin-project/FIPs/discussions/645)
- Filecin has a function called cron, which executes actor code at the end of every tipset evaluation. 
- This feature could be viewed as either a positive one or as a design shortcut. The original plan was for this feature to be used as a pragmatic tool to get important functionality to the Filecoin network. 
- The network is approaching a point where better ways should be identified to implement this functionality as the crons are doing 3x more work to validates tips. 
- At the moment, tips are taking 4x longer than expected because cron is reposnsible for 75% of it. This affects block validation times. 
- A short term fix is to increase the maintenance interval from one day to thirty days to approximately divide the problem by 30. 
- Code for this has already been written and it is ecommended to be part of nv19 after a corresponding FIP has been written.
- The second recommendation is another FIP which removes automatic deal maintenance from the built-in marke actor entirely.
### **[Technical discussion- FIP0047 Improvements](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0047.md)**

- Facilitated by Alex North - CryptoNetLab 
- Salck - anorth   

- FIP can be be found [here](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0047.md). Discussion thread can be found [here](https://github.com/filecoin-project/FIPs/discussions/415)
- This FIP has already been accepted and waiting to be activated as part of nv19. 
       - This FIP establishes a mechanism to be used in    case of a vulnerability in PoRep code  
       - Communicate with network participants if this happens
       - As well as communicate mitigation strategies
       - Overall this was motivated by desire to increase maximum sector expiration
       - The goal remains to have an orderly forced resealing of all sectors in the network over some time period. 

A new FIP detailing a new scheme which would replace FIP0047 will be drafted and potentially go through the governance process for nv19 upgrade.  


****
Governance updates for SDM
-
- Facilitated by Kaitlin and Vik 
- Slack - Kaitlin_FF & Vik 
- Authors of the FIP propose a version to be introduced to Last Call. The key difference and update to this FIP is that the Sector Duration Multiplier will have a maximum of 2x multiplier on the power for the maximum sector commitment of 5 years.
- A number of factors that influnced this decision and the summary can be found [here](https://hackmd.io/_vk6vDwIQW2-h9Gs8a6CvQ?view)
- CEL introducing a lower slope than previous version of the FIP



---
- Filecoin Foundation has put in place a FIP0056 Working Group and there is a unanimous hybrid last call process for SDM. 
- A full process document will be made available and made public. 
- Within the 2 weeks Last Call period, opinions on pros and cons around the FIP and will be made available to the Core Devs to inform their decision on this FIP. 


    
### Nv18 updates and alignment

Led by Jennifer Wang (Lotus Team)(Slack & Github - Jennijuju)

- Network nv18 Hygge upgrade - FEVM launch due to launch on March 14th 3:14 pm UTC. 
- Upgrade has been performed on Hyperspace with 36,000 smart contracts deployed so far. 

### Nv19 preliminary updates and scope 

Led by Kaitlin Beegle (Filecoin Foundation)(Slack - Kaitlin_FF)

Timelines and scope are preliminary and still in the early stage. 

**Proposed FIPs to be included in nv19**

- [FIP0047: PoRep Security Policy](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0047.md) (`Accepted` with pending spec updates)
- [FIP0052: Increase Max Sector Duration to 3.5 years](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0052.md) (`Accepted`) 
- [FIP0056: Sector Duration Multiplier](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0056.md) (`Draft`)
- [FIP0059: Synthetic PoRep](https://github.com/filecoin-project/FIPs/pull/627) (`Draft`) 
- [FIP00XX: Built-In Market CRON Risk Mitigation](https://github.com/filecoin-project/FIPs/discussions/638) (`Draft`)




