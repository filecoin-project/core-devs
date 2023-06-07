# Core Dev Meeting #58 

**Meeting Date & Time:** Thursday 1, June 2023 16:00 UTC

**Meeting Recording:** 

**Meeting Slides:** https://docs.google.com/presentation/d/1iZb6NBsKtz9261D25iUTTHu8RklUIzw0FEi7qBOBI30/edit#slide=id.g19157ff4f70_0_0


## Technical Discussion: Pledge Shortfalls - [HERE](https://github.com/filecoin-project/FIPs/discussions/691) & [HERE](https://github.com/filecoin-project/FIPs/discussions/666#discussioncomment-5931946) 

**Facilitated by Tom Mellan** (CryptoEconLab)

## Problem & background: 
Token shortage constrains network growth as such supply inflation damaging SP returns and network growth. There appears to be a shortfall of token to grow and onboard new storage deals. The shortage of tokens could remain a problem until the lending markets are more mature. 



**Proposal ideas and discussions:**
Ideas for possible solutions are contained in two resources and discussion posts [here](https://github.com/filecoin-project/FIPs/discussions/691) and [here](https://github.com/filecoin-project/FIPs/discussions/666#discussioncomment-5931946). Both proposals are underpinned by 2 principles that `tokens available to lease should be preferred` and `should minimize risk to the network`. 
1. The shortfall should be available whenever increasing capacity 
2. An SP will need to put up most (two thirds or more) of a sector's pledge. 
3. A sector earns the same full QAP regardless of any shortfall 
4. Some fraction of SPs' earned or vested rewards is taken to either lock as pledge or burnt as a fee. 

#### Success looks like: 

- Greater onboarding 
- Similar or greater locking 
- Increased burning of FIL through shortfall fees 

#### Failure looks like: 
- No uptake from SPs 
- Extensive uptake and no growth in onboarding

Next steps would be to understand community demand, refine existing understanding of existing problems and select a single proposal to implement. 
Overall, there needs to be more investigation and discussions particularly to get feedback from the SP community as to the viability of these solutions and their timliness. 
  


## Technical Discussion: [Direct Fil+](https://github.com/filecoin-project/builtin-actors/blob/master/actors/verifreg/src/state.rs#L219-L237)  & Data termination policy - [HERE](https://pl-strflt.notion.site/Data-termination-penalty-design-sketch-5297a2b4e73d476cafe5cb6054594981) & [HERE](https://pl-strflt.notion.site/Miner-protocol-change-dependencies-e5d26dc4576d44bea8f60de1f3158653)
**Facilitated by Alex North** (CryptoNetLab)

### Problem and background: 
Observable statistics indicate that making deals is expensive in terms of gas costs and a significant part of the costs go to data onboarding. 

The meeting discussion focused on the motivation to reduce gas costs associated with making deals on file storage. It was noted that the current process incurs significant expenses, particularly for Fil+ deals that don't involve additional client payments to the Storage  Provider (SPs).

---

"Direct Fil Plus" was presented as a way to simplify and lower costs for these types of deals. In this approach, a verified client with data cap can directly allocate a Fil+ deal with the verified registry, bypassing the need for the market actor to act as an intermediary. Similarly, the miner actor can directly claim Fil+ QAP (Quality-Adjusted Power) when onboarding a sector, eliminating the need to retrieve the verified allocation ID from the market actor.

The proposal aimed to reduce the accounting workload by about half. Although the verified registry doesn't handle client payments, since the payment amount is zero in these cases, the direct approach was deemed more straightforward and aligned with the desired outcome.

However, before implementing the direct Fil+ approach, it was noted that a prerequisite task is to address the deal collateral issue. Deal collateral serves as a penalty for terminating deals prematurely and is currently enforced by the market actor. The proposal suggested transferring this enforcement responsibility to the miner actor and adjusting the penalty parameter from "rawbyte power" to "QAP" to equalize penalties for Fil+ and non Fil+ deals.

### General discussions and questions: 

A question was posed about the need for new APIs or tools to ensure visibility on verified data storage in the Fil+ registry. Alex states that the current tooling relies on the built-in market actor state but suggests that the verified registry would be the right place to look for that data. Alex mentions that some changes to the tools would be necessary but clarifies that if the relevant methods are not already exported, there wouldn't be any barriers to exporting them for smart contract access.


* A Core Dev expressed concern about having two different worlds for verified and non-verified deals, which adds complexity. She emphasizes the importance of building a robust foundation for data storage to maintain reliability and avoid reputational harm to the network. It was suggested that having a deal collateral or penalty associated with data storage would increase overall incentives for fulfilling storage commitments. s, and complexity associated with such changes.



* In addition Core Devs discussed reducing gas costs associated with activating Fil+ deals, with Alex North estimating a potential reduction of 40-50% on the network level, but clarifying that it depends on various factors and not the entire cost. 

There is the need for further evaluation and not making any commitments regarding the exact reduction in gas costs.



    
## Milestones for Protocol Change and general discussions
**Facilitated by the Steven Li** (Venus)

There is currently high-level ecosystem mission and mission for Filecoin. This is an ecosystem roadmap not exactly related to direct protocol changes and what it means for community members.

There is need for Filecoin community to have fundamental understanding and participation in protocol changes 

Based on the conversation among Core Devs, there is the need to set milestones for protocol changes and other matters related to Filecoin. Steven emphasizes the importance of having a clear roadmap for protocol changes and the need to address technical infrastructure and architecture to support this progress.

Some Core Devs agree that having clarity in the protocol roadmap is crucial but mentions the challenges of predicting the future accurately. Core Devs emphasized the need for strategy and directions rather than setting specific dates. 

Overall, the discussion revolved around the need for a roadmap, milestones, and technical considerations to guide the protocol changes and development of Filecoin. The Core Devs acknowledge the importance of planning while also recognizing the challenges and uncertainties involved in predicting the future accurately.



## Governance Updates 
- Community Governance Call- register [here](https://fil-org.zoom.us/meeting/register/tZMkf-2qpjIqEt3nkeKh_7f7_F6wPm76zbTw)
- Join the Fil-Gov channel [here](https://filecoinproject.slack.com/archives/C0535S9TUUF)
