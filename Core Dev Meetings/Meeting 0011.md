# Filecoin Core Devs Meeting #11 - 2021-02-11

- Meeting Date/Time: **Thursday 11 February 2021, [16:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/16-00)**
- Meeting Recording: https://youtu.be/0ac7NT6wiPE
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL),  Venus (IPFSForce), Filecoin Foundation

Forest:

- Two nodes running well on mainnet, save for small discrepancies
- Capable of priducing blocks on devnets
- Ongoing documentation push
- H/AMT done for v3 actors integration, actors work beginning
- Working on achieving close RPC compatibility with Lotus
- Audit planned for early March

Fuhon:

- Working on performance improvements
- Generally able to keep sync now
- Wrapping up work on actors v2, some large refactors needed for v0 -> v2 changes
- Market and miner actors remain
- Audit is planned after a Fuhon node runs well for a week or so
- Miner will be added to testnet in a couple weeks

Venus:

- Working on Venus remote wallet
- Venus miner and Venus sealer are new projects
- Documentation push ongoing

Lotus:

- Testing out the 1.5.0 release (integrates v3 actors)
- Planned to go out second half of February, upgrade early March
- Calibration-net died as part of 1.5.0 release testing
- Will be using actors v3.0.3

FIP-0012:

- Simple FIP that allows for Verified Clients to be able to be "topped up"
- Fixes bad UX