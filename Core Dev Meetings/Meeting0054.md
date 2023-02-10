# Core Dev 54 Meeting Notes

**Meeting Date & Time:** Time: Thursday 2, February 2023 16:00 PM UTC

**Meeting Recording:** 

**Meeting Slides:** [https://docs.google.com/presentation/d/1_YlyhARWig2QnmsqDe82Opd3tUF2qGAtEDxAU3a65TU/edit#slide=id.p8](https://docs.google.com/presentation/d/1lK50A0xBqj-M12MlEilyWGfBId7SMXMz-r-sy7tpOXg/edit#slide=id.g1c7c4e15806_3_11)

**Attendance:** Protocol Labs, Filecoin Foundation, Implementation teams, and other representatives.

### **[FRC- Filecoin Storage Deals Proposal Protocol Updates](https://github.com/TorfinnOlsen/FIPs/blob/patch-1/FRCs/frc-0056.md)**

- Facilitated by Torfinn Olsen  - CryptoEconLab  

- To find out more about this proposal, please read this [post](https://github.com/TorfinnOlsen/FIPs/blob/patch-1/FRCs/frc-0056.md)
- Adding a flag that enables storage providers to not announce to the indexer if they choose and - add a flag to enable storage providers to not store sealed data. 
- Adds a layer of configurability for Storage Providers allowing them for example to have a say in whether or not deals arenounced the indexr should they choose. 
- Default behaviours wont be changing   

### **[Presentation- No Buffer PoRep: Removing 10 layers storage between PreCommit and ProveCommit](https://github.com/filecoin-project/FIPs/discussions/603)**

- Facilitated by Irene & Lucaniz  - CryptoNetLab  

- To find out more about this discussion, please read this [post](https://github.com/filecoin-project/FIPs/discussions/603)
- The various options can be seen in this [Notion page](https://www.notion.so/Storage-Optimizations-Projects-Overview-and-Dependencies-f0a2e9cc56734d9591d0420490ea1e56)
- Soliciting feedback to save cost for Storage Providers during the sealing pipeline. 
   -  Synthetic Porep: SP computes SDR graph. 
   -  Non interactive PoRep: Reduce storage costs by removing waiting time
   -  Security level stays same 
- A Poll has been disseminated across Storage Providers to share feedback as to their preference. This poll can be found [here](https://survey.hsforms.com/1D-k4WZlCQcC6J0Als0xvSwct2xy)

### **[Technical discussion- SDM decision matrix and governance alignment by CryptoEcon Lab](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0056.md)**

- Facilitated by Vik & Kaitlin   

- FIP currently in `draft` stage. FIP draft can be be found [here](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0056.md)
- FIP Authors have developed a decision matrix outlining the parameter spaces the FIP has been based upon. Some of these parameters are premised on; 
       - Allowing sector commitment up to 5 years 
       - Health of the Filecoin economy 
       - Storage Provider ROI
       - Sector duration multiplier upon commit replica as well as extension 
- The decision matrix referenced can be found [here](https://docs.google.com/document/d/1vy9lZceD1DCPadRLjGSPKIWO1S175ERhu4dksBFGI7A/edit)
****
Governance input and considerations for SDM
-
- Facilitated by Kaitlin 
- Experiment the possibility of completing a `Last Call` period for this FIP, by making the parameters very clear as to the procedures for completing this Last Call period
- Put together a joint statement from Core Devs and Filecoin Foundation outlining a position on accepting or rejecting this FIP.
- A statement from Core Devs will potentially avoid any understanding of Core Devs making a final governance decision making for this FIP. 
- Decision making for Cryptoeconomic FIPs not yet fully fledged
-  Regardless of the constraints, this approach should have a legitimate way to declare this FIP as `Accepted`. 

### **General Discussion and QnA on SDM:** 
- The biggest challenge SPs have with the SDM is collateral as they have limited amount of credit. 
- It is important to refine the language with which this FIP is communicated with the SP community. 
- The SPs would prefer quicker and concrete decision making to allow strategic planning and positioning on their end. 

    
### **Nv18 updates and alignment

Led by Jennifer Wang (Lotus Team)(Slack & Github - Jennijuju)

- All FIPs to be included in the upgrade are all in `Last Call
- FEVM Engineering team are doing final refinement 
- There is new Developer Testnet called Hyperspace and code is currently being deployed there
- Mainnet launch scheduled for early March
- Plans to onbaord new "Network Coordinators" to provide support in network upgrade coordination and synchronization across teams. `
