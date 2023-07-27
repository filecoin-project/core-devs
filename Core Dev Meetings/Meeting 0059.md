# Core Dev Meeting #59 

**Meeting Date & Time:** Thursday 6, July 2023 00:00 UTC

**Meeting Recording:** 

**Meeting Slides:** https://docs.google.com/presentation/d/1YV7V_b9DS3RVBYR5ksD4AzqVPUUL7dOHGHBAXrKN3Dw/edit#slide=id.g19157ff4f70_0_0


## The idea and definition of 'retrievability' 

**Facilitated by Will Scott (Protocol Labs)**

Overview
The presentation centered around the topic of retrievability in Filecoin, underscoring the necessity for a more nuanced understanding of data access and the associated costs.

**Key Takeaways**
The Fundamental Role of Retrievability
Retrievability is core to Filecoin's operations, being central to its original use cases. The ability to both store and retrieve data constitutes the essence of data's usefulness within the system.

**Cost Considerations in Data Retrieval**
A significant point raised was the often overlooked aspect of retrieval costs. Data retrieval shouldn't be reduced to a binary state of success or failure. Instead, there is a need to account for variable costs associated with retrieving different data types, including factors such as bandwidth and operations.

**Introduction of Retrieval Tiers**
Retrieval tiers were proposed as a method to bring nuance into discussions on data retrieval. The notion is to include these tiers in the deal-making process to explicitly define the expected level of data retrievability. This approach can help clarify the costs that Storage Providers (SPs) are likely to incur and the service level they're expected to deliver, thus avoiding potential unlimited and unbounded costs.

**The Way Forward: Incentives and Future Work**
Looking ahead, two major steps were identified for improving retrievability in Filecoin:

Infusion of Retrieval Tiers: Efforts will be made to incorporate the concept of retrieval tiers into broader discussions in the coming months.
Compensation for SPs: The idea of compensating SPs for retrieval costs via Level 2 solutions was proposed.
The introduction of incentives, particularly those that ensure the maintenance of retrievability expectations, was seen as potentially beneficial to the network as a whole. The approach here is to engage in high-level experimentation and gain confidence before directly implementing protocol changes for incentives.




## [FRC: Piece Gateway](https://github.com/filecoin-project/FIPs/discussions/711)
#### Facilitated by Will Scott (Protocol Labs)




Making the content of the deals available on IPNS for indexing, allowing the network to understand the contents of the deals for retrieval requests.
Providing a mechanism for partial retrievals and data within the retrieval. A gateway specification is in place for this purpose.
The third component, a widely-used but yet unspecified retrieval method, was further elaborated.
Many deals are currently being made over HTTP, often involving large pieces of data (32 or 64 GB).

The data can be retrieved in its entirety through an HTTP gateway. The proposed specification involves the use of a '/piece' endpoint, an HTTP request that returns the complete object of the piece data.

The objective of specifying these semantics is to have a clear definition and ensure interoperability between different implementations of markets, facilitating replication of data.

Ongoing discussion regarding supporting retrieval of both, the sent piece and the sealed instance of the piece, to enable use cases for offloading unsealing as a service. It will also verify the availability of the sealed copy of data, when necessary.

**Actions**
Continue discussion and further refine the proposed specifications.
Stakeholders are encouraged to provide feedback on the ongoing discussion regarding retrieval support.More information about this FRC can be seen [here](https://github.com/filecoin-project/FIPs/blob/master/FRCs/piece-gateway.md)





---

## **[Filecoin Masterplan Discussion](https://github.com/filecoin-project/FIPs/pull/745)** 
**Facilitated by Fatman** 




The current Filecoin governance is struggling to reach a consensus for significant protocol changes.
Difficulties in defining the process for consensus-reaching and understanding which groups should weigh in on decisions.
Slow protocol iteration is causing a stall in innovations on user-defined DeFi and storage solutions.


By defining clear layers and roles within the protocol architecture, the Filecoin network can evolve effectively.
Noted that this layered approach has been feasible since the FVM launch in March 2023.


Emphasized that while details in the proposal are abundant, the key point is the transformation of the Filecoin Protocol from a tightly coupled product to a decoupled platform.

Ended by discussing how this proposal could solve the issues presented earlier, such as enabling faster soft consensus in governance and stimulating genuine competition among storage markets.

**NOTE**
Filecoin Foundation the governance steward of Filecoin are aware of exisiting challengesand constraints with the FIPs process and care currently designing updates to this process. 

# 
## [Network v21 (Watermelon Upgrade) Discussions](https://github.com/filecoin-project/core-devs/discussions/140)
**Facilitated by Lucky Nwachukwu & Kaitlin Beegle (Filecoin Foundation)**

The central premise involved discussions concerning the feasibility, advantages, and challenges associated with implementing the nv21 upgrade ahead of the scheduled timeline. There was a clear divide in opinion, with some favoring an expedited implementation while others expressed caution regarding potential issues that may arise.

Proponents for the accelerated nv21 upgrade pointed out the potential performance enhancements that can be realized earlier, including improved functionality, stability, and compatibility. 

However, a significant segment of the meeting focused on the constraints and challenges tied to a premature rollout. Primary concerns included: 1) insufficient testing time that could lead to undiscovered bugs and system instability, 2) inadequate training and preparation for users and the support team, and 3) potential cost overruns associated with expedited delivery. These issues could potentially negate any advantages gained from an earlier deployment.

After careful deliberation, a consensus was reached to conduct a detailed risk-benefit analysis and a revised project schedule to ascertain the real-world implications of a sooner NV21 upgrade. The objective is to strike a balance between harnessing technological improvements early without compromising stability, user experience, and cost-efficiency.

The way forward includes a thorough review of the proposed changes by relevant stakeholders and an agreed-upon time frame for feedback. Following this, a decision about the NV21 upgrade timeline will be taken based on the collective wisdom and strategic vision of the team. The decision will consider both the opportunities for innovation and growth, as well as the practical constraints and challenges at hand.
