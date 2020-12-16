# Filecoin Core Devs Meeting #7 - 2020-12-03

- Meeting Date/Time: **Thursday 03 December 2020, [16:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/16-00)**
- Meeting Recording: https://www.youtube.com/watch?v=4naFxk_mcLc
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL),  Venus (IPFSForce)

Implementations:

Forest

- Syncing to breeze upgrade (epoch 41280)
- Working on handling multiple actors versions to get to the actors v2 upgrade
- Improvements to sync process
- Goal is to have miner integration and block production in the next week or so

Venus

- Setup a harness to test all the upgrades, which are now successfully passed by Venus
- Ran a private network with Lotus and Venus inter-operating
- Working on the miner methods in the JSON-RPC API
- Working on the message pool's selection logic
- Setting up a Venus node on calibration-net
- Hoping to add a Venus miner to the main network

Fuhon

- Trying to add a node to mainnet
- Bugfixes regarding actor integration
- Concerns about having to implement v3 actors soon

Lotus

- Network successfully upgraded to version 8, with actors 2.3.2
- Focus on improving Lotus (writing tests, improving mining logic, increasing storage deal success rate)

Upcoming state upgrade:

- Planned for early 2021
- Primary change will be introducing v3 actors, designed to be faster and cost less gas than v2

Actors v3:

- Much smaller than v1 -> v2
- Goal is to improve performance and lower gas costs
- HAMT changes (FIP issue https://github.com/filecoin-project/FIPs/issues/38, PR https://github.com/filecoin-project/FIPs/pull/39)
    + HAMT currently does redundant reads and writes from the IPLD blockstore
    + Implementation to remove these redundant ops can be seen here: https://github.com/filecoin-project/go-hamt-ipld/pull/74
    + Remove 3 bytes from serialization of HAMT pointers
    + Tuning the width of the HAMT and AMT trees (need to forecast what the sizes of these trees will be in some months)

Questions:

Question: What's the status of the proposal to have "optimistic WindowPoSts" that can get challenged?
- There's excitement about the proposal, but is currently being fleshed out

Question: What's the status of FIP-0006?

- Made it to last call, but has since not moved
- Research has a significantly better proposal they would like to make, but if the situation is urgent, we can go ahead with 6
- Decision: Pause FIP-0006 for now, wait for a better FIP that replaces FIP-0006

Question: Will the AMT caching improvements be included in the FIP for HAMT improvements?
- Yes, they should be, and will be.

Question: Basefee is high, there are FIPs to lower it. Will that happen?

- Basefee is hard to control, gas costs are more controllable
- Essential messages (WindowPoSt, PublishStorageDeals) will have their costs lowered, optimistic WindowPoSt will be very helpful
- It's okay if PreCommitSector and ProveCommitSector are expensive at times, but there are ideas about how we can lower these costs

Question: Can we add names to the files in the FIPs repo, so that we don't need to know the numbers?

- Suggestion: We could have a website analogous to Ethereum's EIP website?
- Decision: Maintain a table in the README

Question: How do we plan on getting community input into the FIP process?

- A lot of community input currently comes on Slack, people let us know which FIPs are important to them
- Discussion issues get feedback from the community too
- Working on a polling feature for larger FIPs so that we can see if, say, miners really like a FIP, but clients don't
- Responsibility of the FIP holder / FIP creator to get as much input, and review any controversy before approval