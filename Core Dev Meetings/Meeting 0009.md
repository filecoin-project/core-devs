# Filecoin Core Devs Meeting #9 - 2021-01-14

- Meeting Date/Time: **Thursday 17 December 2020, [16:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/16-00)**
- Meeting Recording: https://youtu.be/Rrw_y-YLeYM
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL),  Venus (IPFSForce)

[December 19th chain halt]

- Network experienced a chain halt on December 19th due to a nondeterminism bug in specs-actors
- Incident report may be found [here](https://status.filecoin.io/incidents/ffhr434cd14c), and blog can be found [here](https://filecoin.io/blog/posts/resolving-the-dec-19-chain-halt-cause-impact-take-aways/) 
- It is unlikely that a message triggering this bug had landed on chain before
- Other implementations will likely not have to re-implement the bug (to be confirmed)

Fuhon:

- Downloaded a full snapshot, validating messages
- Ran into performance issues, will be profiling to find bottlenecks
- Stability testing
- Working on the last two v2 actor integrations: market actor and miner actor
- Testing node + miner functionality

Venus:

- Venus node and miner running well on calibration-net
- Venus node and miner (f0128788) added to mainnet, has submitted a PreCommit, ProveCommit and WindowedPost!
- Two weeks of stabilization working: minor bugfixing, documentation in both English and Chinese
- Distributed mining pool is in the works

Forest:

- Mechanism to stay in sync complete
- Fully integrated v2 actors
- Interop testing underway on devnets with both Lotus and Forest notes
- Testnets and mainnet will come next
- Updated libp2p to the latest version
- Audit to come soon

Lotus:

- Improving dealmaking and overall performance
- Optional 1.4.1 release to come soon
- Implementing FIP-0010 for the next network upgrade, aimed for early February

Foundation:

- Welcome Megan and Philip!
- Corporate infrastructure is in place

FIP-0010:

- Been actively discussed since November
- FIP is now in draft
- Security concern: Could sending out a wave of dispute messages slow down or halt the network?
    - Dispute messages cost full gas, and therefore this should be the same as any other message
- Implementation overview:
    - PoSts are accepted as valid without checking the proof itself
    - Anyone can validate these PoSts off-chain
    - Anyone can dispute any PoSt they wish to (rational disputers will dispute any proofs they find invalid)
    - Successfully disputed PoSts lead to a fine and the relevant sectors becoming faulty
    - Disputer is awarded a small reward to cover the cost of the message
    - We now need separate windows for disputes and `CompactPartitions`
    - Dispute window is 1800 epochs
    - Recovery PoSts are still validated at submission
- Makes it possible to remove FIP-0009
- Will a disputer be included in Lotus, or easy for the community to implement?
    - Yes to both questions
- Will it be included as part of the v3 actors upgrade?
    - Yes

Interopnet:

- Goal is to create a new network with small chain state to test interop between the various implementations
- 512 MiB sectors
- Ideally will start at actors v2
- Would be great to have implementation teams to run each other's implementations

 
