# Filecoin Core Devs Meeting #17 - 2021-05-06

- Meeting Date/Time: **Thursday May 6 2021, [16:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/16-00)**
- Meeting Recording: https://youtu.be/Ipd4x0cAEHw
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL),  Venus (IPFSForce), Filecoin Foundation

Venus:

- New 0.9.5 release supports network v12
- Distributed mining pool code is now live on mainnet
- Launching a mining pool (at least 5 miners) on mainnet in the next two weeks!
- Ready to transfer some repos into the [filecoin-project Github project](https://github.com/filecoin-project)
- Security audit initial report has arrived, actioning on feedback now
- Working on market component so that Venus nodes can be used for dealmaking

Forest:

- Implemented v4 actors, noticed significant performance improvements to block validation
- Audit is ongoing, no feedback yet
- Chain sync refactor wrapped up, plugged a large memory leak
- Forest nodes are stabled at 4-6 GB of RAM
- Ongoing work on payment channel support, CLI, RPC client library
- Putting in metrics for Forest and broader Rust Filecoin/IPFS ecosystem

Fuhon:

- Ongoing work on making memory management stable
- Current lifetime is about 7-8 days before a node goes over 16 GB of RAM
- Testing of retrieval markets API is complete, interoperability with Lotus being examined
- Two places identified as possible memory leaks

Lotus:

- Working on the v12 network upgrade, went smoothly, also noticed significant performance improvements
- Current release candidate is v1.9.0-rc2 that supports v12 network, proofs upgrades, and markets upgrade
- v1.9.0-rc3 expected later this week with more proofs fixes
- Working on integrating v5 actors for the v13 upgrade

Foundation & Community:

- [Blog post about the v12 upgrade](https://filecoin.io/blog/posts/filecoin-network-v12/) is live
- Increasing interest from the community about Venus's distributed mining pool
- Venus is having a meeting with some MinerX fellows
- Welcome Dudley and Sonia to the Foundation!

v5 actors scope & timeline:

- De-scoped fixing `CompactPartitions` bug
- Targeting to include FIPs [0008](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0008.md), [0011](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0011.md), [0012](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0012.md), and [0013](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0013.md)
- Test vectors is a major priority 
- Interopnet coming soon