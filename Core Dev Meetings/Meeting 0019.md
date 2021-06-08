# Filecoin Core Devs Meeting #19 - 2021-06-03

- Meeting Date/Time: **Thursday June 3 2021, [16:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/16-00)**
- Meeting Recording: https://youtu.be/BROBqe2SOxA
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL),  Venus (IPFSForce), Filecoin Foundation

Lotus:
- Team working on our initial RC for v13 Network upgrade which includes actors V5 Upgrade
- RC was shared with miners so they can start their integration process
- Lotus 1.9.0 has been out for some time now, we have really positive feedback from all sides
- Test vectors are in the final stage, we expect to deliver them early next week.

Forest:
- Team focused on our audit, fixed some smaller issues on libp2p
- We are working on Grafana dashboard setup - we are trying to get metrics for RAM and performance, everything looks good for now
- RPC layer improvements - which enables us to rapidly build our CLI
- Network v13 implementation will start from next week

Fuhon:
- Many of our team members were on vacation, so not that many updates
- Bootstrapped libp2p node which is running for more than 8 days, memory consumption seems to be in balance
- Fuhon nodes are also launched, we want to investigate memory consumption and try to find the root cause issues we have there

Venus:
- Team is taking a closer look into HyperDrive updates which are planned
- Several features and optimization are added to Venus and Venus wallet
- Refactor of the codebase is done, with documentation updates
- In the next sprint we will focus on a full node coordinator which can do a real-time selection from a number of upstream nodes, based on their chain heads

Filecoin Foundation:
- Team is taking a lead role in coordinating bug bounty rewards for developers
- We will figure out how we distribute actual rewards
- Our need is to have an assigned person from each implementation team to help us with bug triage and to suggest who should be rewarded for a bug bounty.
- Fuhon audit is something we plan to do next

v5 Actors and v13 Network upgrade:
- [FIP13](https://github.com/filecoin-project/FIPs/blob/03307c64a53a1ac2a795c6a46bc54b0fe73bded8/FIPS/fip-0013.md) changes we made: - We added a mechanism that applies gas charge through the aggregation, which uses batch balancer + discounts.
- Goal is to create a gas charge that applies to aggregated proofs, creatING a gas lane for aggregated proofs that balances the incentive considerations. 
- This should greatly increase onboarding capacity, but also balance incentives.
- Benefits also include: Achieve miner fairness, shared gas costs, making fees spiking attacks harder.

Interopnet: 
- Interopnet is going live, it will be starting from v5 actors directly and it can be used for testing purposes.

Pack arbitrary data in CC sectors:

- [FIP PR](https://github.com/filecoin-project/FIPs/pull/91) submitted by the community
- Remove the restriction that CC sectors must seal all zeroes 
- Next steps being discussed in the FIP

Emergency penalty alleviation:

- [FIP PR](https://github.com/filecoin-project/FIPs/pull/106) submitted by the community
- First proposed change is for miners to be able to declare emergency, which alleviates penalties 
- Intended use case is for sudden, unexpected change in ability to prove storage, such as a natural disaster
- Unfortunately, compromises Filecoin's storage guarantees about proving storage
- The existing `DeclareFaults` mechanism serves a similar purpose
- Security considerations are unclear
- A Natural Disaster Oracle might be very helpful here