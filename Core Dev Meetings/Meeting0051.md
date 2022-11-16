# Core Dev 51 Meeting Notes

**Meeting Date & Time:** Time: Oct 11, 2022 00:00 AM UTC

**Meeting Recording:** 

**Meeting Slides:** [https://docs.google.com/presentation/d/1Y7AGA-JWxT0F0Spn-BEfVv_JbZQuRz7UqeXRjb9tDWY/edit#slide=id.g151e8882e4b_0_0](https://docs.google.com/presentation/d/1Ep_5ctW2k6BbpSyjpG9OdhS6JXb-53_zdUV0D4JqnXw/edit#slide=id.g175c1179fa4_0_0)

**Attendance:** Protocol Labs, Filecoin Foundation, Implementation teams, and other representatives.


### **[Engineering Discussion: InterPlanetary Consensus (IPC) formerly HC](https://github.com/filecoin-project/FIPs/discussions/419)**

- Led by Alfonso - ConsensusLab (Slack & Github - @adlrocha) 

- To read more about this FIP, please read this [discussion post](https://github.com/filecoin-project/FIPs/discussions/419)
- To engage in other discussions from ConsensusLab check this [repo](https://github.com/protocol/ConsensusLab/discussions)
- The objective of this FIP is to increase the range of use cases that the Filecion network can support, and to overcome future scalability limitations in terms of throughput and finality of the Filecoin blockchain, this FIP introduces Hierarchical Consensus (HC), a framework to scale Filecoin horizontally.
-  HC enables Filecoin users to spawn new subnets from the Filecoin network. Subnets instantiate new independent state and are able to run their own consensus algorithmn.
    
- This FIP introduces a new Consensus interface that decouples the specific consensus implementation used for the different networks, and allows the Filecoin stack to interact and use any consensus implementation that follows the interface. This interface is shared by all HC-compatible subnets and consensus algorithms.
- Milestone document for IPC will be made available soon. 
> 

 
    
    
### **[Engineering Discussion: Improving EC security with Consistent Broadcast](https://github.com/filecoin-project/FIPs/discussions/419)**

- Led by Alfonso - ConsensusLab
-  [Discussion post](https://github.com/filecoin-project/FIPs/discussions/501)
- The overview of this discussion is to modify client behaviour (in particular the miners) to verify that the sender is not equivocating before accepting a block. 
- In this proposed change, the recipient waits a predefined time (e.g. 6 seconds) between receiving a block and accepting it. If, during this time, the recipient detects equivocation, it does not accept the block. 
- Next step would be to test this with Storage Providers to guage interest and uptake from their perspective. 


### **General Discussion and QnA:**


- Important to develop a publicly available FIP roadmap and milestones for better engagement with community members on FIPs and overall Filecoin trajectory.  
- Governance Team at Filecoin Foundation currently working on a FIPs/Governance Roadmap to improve engagement and planning.  


