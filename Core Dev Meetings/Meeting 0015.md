# Filecoin Core Devs Meeting #15 - 2021-04-08

- Meeting Date/Time: **Thursday 8 April 2021, [16:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/16-00)**
- Meeting Recording: https://youtu.be/7P2XrnggUd4
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL),  Venus (IPFSForce), Filecoin Foundation

Forest:

- Primary goal remains to get ready for audit on April 26th
- Focus on improving message pool and syncing state machine
    - Trying to speed up message execution
- Bunch of updates to the RPC layer, should match Lotus now
- Integrating storage and retrieval markets (go-fil-markets), work involves updating payment channel support and some new RPC endpoints
- Adding some instrumentation, perhaps Grafana

Venus:

- Ongoing work on distributed mining pool support
- Goal is to have components integrated into a Venus node on mainnet next week
- Next step will be to integrate some of the components into a Lotus node, and observe behaviour
- The distributed mining pool prototype will involve a combination of Venus and Lotus nodes
- Hope to be live on mainnet by May 1
- Venus 0.9.4 planned in the next week, which will support the network v11 upgrade
- Audit is ongoing, first report expected in 10 days

Fuhon:

- Focus on fixing the three remaining production-blocking issues
    - Memory leaks: One fixed, but there is a second leak somewhere (unknown where, but not in libp2p)
    - Segfault during VM execution: fix ready, to be confirmed
    - Unhelpful error arising from one of the underlying libraries, hard to reproduce
- Ongoing work on reimplementing actors, v2 storage miner is close to completion, v3 will be next

Lotus:

- Implementing the network v11 upgrade, includes FIP-0014
- Lotus v1.6.0 introduces the upgrade
- Internal improvements: Release planning, release tessting, emergency planning

Foundation & Community:

- 10M dollar donation to Internet Archive
- Ambassador program launched to help with community engagement and management

Community:

- Launched the Filecoin Community Ambassadors group
- Goal is to have members of the Filecoin Community support other community members, especially newer entrants
- Would be good to have ambassadors for newer implementations as they join the network

v4 actors scope:

- Timeline being fleshed out [here](https://github.com/filecoin-project/specs-actors/issues/1332)
- FIPs-0011, 0012, and 0013
- One bugfix: https://github.com/filecoin-project/specs-actors/issues/1332
- Q: What's the impl status of the FIPs in specs-actors?
    -A: 0011 and 0012 are merged in specs-actors master, 0013 is ongoing, should be ready-ish in a week or two

How do we plan upgrades?

- Core devs shape the roadmap and timeline
- Factors involved: what the community wants, network security, core dev availability
- Foundation can help with governance
- Appointing a "captain" for each release to steward the process
- Time-based proposal:
    - Release every 3 months
    - Core devs set scope based on what is feasible
    - What do we do if one implementation can't get something done?
        - Cut the feature
        - Slip the timeline
        - Allow that one implementation to slide off mainnet briefly
