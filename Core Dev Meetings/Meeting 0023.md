# Filecoin Core Devs Meeting #23 - 2021-07-29

- Meeting Date/Time: **Thursday July 29, 2021, [16:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/16-00)**
- Meeting Recording: https://youtu.be/Ni2DrljIhic
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL), Venus (IPFSForce), Filecoin Foundation and Community representatives

### Updates for this week

Lotus:

- We shipped 1.11.0 - we have a lot of new features and bug fixes there, make sure you check it out
- We started 1.11.1 - which has splitstore as a feature + new miner runtime architecture
- We are participating in HackFS, during the week, so these development sprints are related to Lotus team supporting efforts on the product side.

Forest:

- We made good progress on the security audit, we are doing this together with Filecoin foundation
- Rust community engagement is really paying off, people started contributing to our codebase
- There are additional requests for new features on Filecoin applications build in Rust
- We are documenting Forest API coverage next to FIlecoin and which RPC connections we are supporting.
- We are still to get back to the Mainnet since we are still a bit behind on the network upgrade
- Most of the people are on vacation, this week

Fuhon:

- Market clients and API is working, we can do all deals - Milestone achieved
- We have some issues with the LibP2P, we are missing messages and investigating why
- The team introduced improvements for our own miner, we have batching now and testing that feature
- We found 1 issue that is in the investigation phase, we will share our findings on that when we have something
- We are preparing for a security audit, so we can share it with relevant reviewers

Venus:

- The major thing is happening with the incubation project we are working on with Filecoin foundation - we have 15 miners who joined us. It took a lot of our time and support to get to that point and onboard them.
- We are talking to users from Europe, Asia, and the USA to get them to successfully connect and start mining, we want to increase the number of users
- We are working on an attack prevention enhancement, so we gain more security on our performance.

Filecoin Foundation:

- Kaitlin joined the team, introducing to the team, and looking at how we will handle TPM work from now on
- The bug bounty program is now up to date.

Interopnet:

- Being reset shortly to fix the Lotus pricelist bug

Synthetic PoRep

- We presented Synthetic PoRep  - Read more: [https://github.com/filecoin-project/FIPs/issues/126](https://github.com/filecoin-project/FIPs/issues/126)
- We plan to reduce the amount of challenges that the miner needs, which is an amazing reduction and something which will be really beneficial for miners. 
- It will also be a chapter for miners since it reduces marginal costs to onboard.
- We probably plan to do our next network upgrade after Synthetic PoRep implementation.
