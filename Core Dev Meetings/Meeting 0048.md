# Filecoin Core Devs Meeting #48 - 2022-08-04

**Meeting Date/Time: Thursday, August 4th 2022, 16:00 UTC & Friday, August 5th 2022, 00:00 UTC

**Meeting Recording: See README

**Meeting Slides: https://docs.google.com/presentation/d/1VE0z6RfuOKt74SCjqTezFDd1ICSrXmUrH5gDZP1iGb4/edit?usp=sharing

**Attendance: Forest (Chainsafe), Lotus (Protocol Labs), Filecoin Foundation, CryptoNetLab, and Community representatives

##**New Meeting Format**

### **Welcome**

- This is the first instantiation of the new Core Devs meeting format.
    - This format emphasizes fewer work updates, and more focused conversations around engineering topics.
    - Fewer meetings with focused discussion topics is designed to deliver greater value to meeting attendees.
- ‘Core Devs’ are a community institution, and participation and consistent attendance is important for Core Devs to 1) lead the network, and 2) accept a more defined role in the network governance process.

### **Expectations, questions, and future planning**

- Core devs are asked to:
    - Propose discussion topics
    - Attend meetings
    - Join #fil-core-devs on slack
    - Participate in decision-making
        - Approval of FRCs
        - Confirmations of network upgrades.
        - Be a contributing factor to governance decisions.

### **Engineering Discussion: Standard Message Authentication Method for Actors**

- Led by Aayush Rajasekaran
- [Pull Request 424](https://github.com/filecoin-project/FIPs/pull/424)
- Proposal will allow actors to authenticate a piece of data, even when a piece of data originates within user-defined actors.
    - This a simpler solution to the same problem identified in [FIP0035](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0035.md); as such, all authors have agreed that the Standard Message Authentication Method FIP will supersede FIP0035.
    - The Standard Authentication Method would allow actors to authorize signatures, rather than just confirming signatures.
- FIP authors hope that this proposal will be included in nv17; technically, implementation requires only a few lines of code.
- The FIP author  is interested in feedback on this proposal.
    - There may be some overlap between this discussion and the broader conversation around account abstractions, which allows for any actors to serve as top level message centers.

### **Engineering Discussion: Signature Domain Separation**

- Led by Geoff Stuart
- [Pull Request 423](https://github.com/filecoin-project/FIPs/pull/4230)
- Given the structure of signed data on the network, the FVM may introduce a way for data sent via self-defined actors to be de-serialized into an invalid block header.
    - As a result, users could inadvertently get slashed.
- Signature domain separation ensures that all unique data receives a unique tag for the type of data signature.
    - The tag would be affixed to your original message and sent across the chain as a way to verify the integrity of the message.
- Implementation this would be a two step process.
    - Some messages, signed before the upgrade, would still be allowed and valid.
    - We would also need time to get the wallet teams onboard with the new signature team.
    
    ### **Questions**
    
    - What do we want the length of the tag to be? 1 Byte or longer?
    - What should we do about payment channel vouchers? They are designed to live off-chain for an extended period of time. We may have to invalidate older vouchers, which we may not want to do.
    - Can we make this with BLS aggregation?

### **Network v17 Upgrade**

### **Confirmed Fips**

- [FIP0029 - Beneficiary Address for Storage Providers](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0029.md)
- [FIP0034 - Fix PreCommit Deposit Independent of Sector Content](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0034.md)
- [FIP0041 - Forward Compatibility for Pre-Commit](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0041.md)
- FIPXXXX - Decoupling Fil+ from Marketplace
- FIPXXXX - Signature Domain Separation
- FIPXXXX - New API for Builtin Actors Accessible to User-Programmed Actors
    - (Alex N) proposed to defer or move to potential for this FIP. This FIP depends on negotiations with the FVM team over timeline.
    - (Raul) commented that this will be a large endeavor. If we are not ready, and we ship FVM programmability and devs cannot program things they want to program, it will not go well. We need to have a user driven discussion and understand what the use cases are and make sure that APIs that we ship first cover 80% of use cases that devs are ready to build. FF may be able to help steward this conversation. Kaitlin recommended we start this conversation publicly.

### **Potential FIPS**

- [FIP0036 - Introducing a Sector Duration Multiple for Longer Term Storage Commitment](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0036.md)
    - (Alex N) This invalidates the previous security policy on rotating sectors every 1 1/2 years. We need to have a security discussion prior to FIP0036 going into confirmed.

### **Timeline**

- Butterflynet upgrade: End of Aug
- Calibnet upgrade: Mid-Sept
- Mainnet Upgrade: End of Sept
    - (Jennijuju) This timeline is too short as it means the code freeze would be the third week of August. Raul commented that his team may need until the end of October.

### **Next Steps:**

- (Kaitlin) Clarify confirmed FIPS list
    - This may help confirm a harder timeline. Check the NV17 thread.
- (Kaitlin) Provide update for new and ongoing Governance items
