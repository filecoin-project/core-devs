# Filecoin Core Devs Meeting #10 - 2021-01-28

- Meeting Date/Time: **Thursday 28 January 2021, [16:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/16-00)**
- Meeting Recording: https://youtu.be/WpizQgmmuSw
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL),  Venus (IPFSForce), Filecoin Foundation

Fuhon:

- Message sync is slow, need to improve
- Profiling to find bottlenecks, cgo actors is about 30% slower than specs-actors right now
- 20 times slower than Lotus right now

Venus:

- Keeping their Venus node and miner on mainnnet alive, fixing issues along the way
- Enhancing documentation for users and developers
- Upgraded Venus to v3 actors, connected to calibration-net
- Improving security of the Venus keystore
- Plan to split out new projects for Venus Miner and Venus Signer

Forest:

- Syncing with interopnet and mainnet!
- Running devnets to iron out kinks with peer management and other subsystems
- Planning to begin audit in early March
- Beginning work on v3 actors integration
- Node is not production-ready, needs hardening, but consensus is looking good

Lotus:

- Testing v1.5.0 release which integrate v3 actors
- Put the release on calibration-net, discovered and fixed some issues
- Release will either go out before or after Lunar New Year holidays
- Ongoing work fon improving the deal-making process, will be the focus for the medium-term

Nicola:

- Working hard on aggregating ProveCommits
- If successful, miners could batch ~1000 ProveCommits, which would cost around the same as a single ProveCommit message today
- Should massively reduce gas costs for miner

FIP-0011:

- Currently reporting consensus faults is based on a Dutch auction
- The Dutch auction is less necessary since rewards for reporting consensus faults has been greatly reduced
- We want consensus faults reported ASAP, since bad miners have an advantage until their consensus faults are rewarded
- Proposal is simply to remove the Dutch auction mechanism; rational reporters will immediately report any faults they detect

Questions:

- What's going on with interopnet?
    - Having a hard time keeping it alive, we have issues with small sectors in proofs code 

- When does everyone think they'll be able to keep a node alive on mainnet for over a week without issues?
    - Forest: A couple weeks; running for a several hours at a time right now
    - Fuhon: About a month
    - Venus: Pretty much already there
