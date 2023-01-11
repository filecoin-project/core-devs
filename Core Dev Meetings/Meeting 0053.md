# Core Dev 53 Meeting Notes

**Meeting Date & Time:** Time: Friday 6, January 2023 00:00 PM UTC

**Meeting Recording:** 

**Meeting Slides:** [https://docs.google.com/presentation/d/1O4dFR-pgQdGw4suqGNiupl9PPN0PB2bHaQGbyq_Z-uw/edit#slide=id.g1a06cc845bd_0_9](https://docs.google.com/presentation/d/1lK50A0xBqj-M12MlEilyWGfBId7SMXMz-r-sy7tpOXg/edit#slide=id.g1c7c4e15806_3_11)

**Attendance:** Protocol Labs, Filecoin Foundation, Implementation teams, and other representatives.

### **[Technical Discussion: Sector Duration Multiplier (SDM)](https://github.com/filecoin-project/FIPs/discussions/554)**

- Led by Vik  - CyptoEconLab  (Slack & Github - @vik) 

- To find out more about this proposal, please read this [post](https://github.com/filecoin-project/FIPs/discussions/554)
- A new FIP draft was recently posted by the CEL team
- It is crucial for Core Devs to align on the importance of this FIP being implemented in nv18 or reaching a consensus on preferred timing for landing this FIP. 
- Core Devs should agreee on which version of the SDM Policy will interest and benefit the network. 
- The CryptoEconLab advocates for and recommends that this policy applies to all sectors rather than newly onboarded sectors.    


    
### **Nv18 updates and alignment

Led by Jennifer Wang (Lotus Team)(Slack & Github - Jennijuju)

Scope consideration for this upgrade has been locked, and upgrade covers;
- 6 FEVM FIPs 
- FIP-0047 PoRep Security (Accepted) 
- FIP-0052 Increase max sector duration commitment (Draft) 
- SDM (pending draft)

From an Engineering perspective, there has been a slight delay on FIP writing, because gas benchmarking is taking longer then expected therefore needing more time finalize. 
Another constraint is that the Chinese New Year will delay calibration upgrade as team would be out of office. 

**More Info on Scope and timelines for nv18**
- [FEVM updates](https://github.com/orgs/filecoin-project/projects/54)
- [Lotus updates](https://github.com/orgs/filecoin-project/projects/67) 

### Updated Projected Timeline
- Jan 16: Hyperspace kickoff
- Jan 20-Feb 19: SpaceWarp hackathons
- Feb 6: Calibration upgrade  
- March 1: FEVM *Mainnet upgrade* 

`All timelines are subject to change`

**What's New?**
- There are multiple tradeoffs and scenarios on what the focus of nv18 upgrade should be. From an engineering perspective, FEVM should be the recommended focus given the constraints of resources, migration complexities of sectors and risks involved. 
- There could be unforeseen challenges on the implementation of SDM as Lotus teams have not done engineering work and analysis on SDM yet.
- It is recommended to have nv19 upgrade shortly after nv18 to include SDM and potentially FIP0047 after 6 weeks.
- General consensus is to ship FEVM in nv18    

---

### **General Discussion and QnA:** 
- Identify owners for the various issues regarding SDM and FIP0047 and the network upgrade and clearly map out streams of work across the implementation teams. 
- DRIs should be identified to scope out work needed to ship SDM in nv19 and communicate with community members as such.
- SDM can be in 'Last Call' status when the FIP and its specs are ready 
- Core Devs are encouraged to share feedback and suggestions regarding this process.  
 
 






