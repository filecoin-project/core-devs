# Filecoin Core Devs Meeting #21 - 2021-07-01

- Meeting Date/Time: **Thursday July 1, 2021, [16:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/16-00)**
- Meeting Recording: https://youtu.be/N4vSBvSXTMc
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL), Venus (IPFSForce), Filecoin Foundation and Community representatives

HyperDrive:

- Network upgraded 18 hours ago, things look good
- Many `PreCommitBatch` and `ProveCommitAggregate` messages have already landed on chain
- Full impact will become apparent in the next few weeks

Lotus:

- v1.10 which shipped HyperDrive tested and released
- Prepping miner bugfixes in v1.10.1, bug reports very welcome
- v1.11.0-rc1 released with 2-3 months of dev and bugfixes

Fuhon:

- Upgraded to HyperDrive network!
- Fixed many memory leaks, memory consumption is now stable
- Node lives well for 4-5 days, few segfaults left to fix
- Working with security officer to prepare for audit
- Syncing well with interopnet

Community:

- Welcome Longfei, our new community advocate!
- Mining community experimenting with the new HyperDrive features
- Some confusion about the CryptoEcon side of things (when to batch)
- Follow #fil-announcements for updates and clarification
- Chain has been significantly less congested, base fee is low

Foundation:

- Launching Mining Incubation Centre with IPFS-Force

Q&A:

- Interopnet seems to be using the wrong gas pricelist?
- Sounds like a bug in how Lotus handles networks starting from non-v0 actors
- Are there `PreCommitBatch` pr `ProveCommitAggregate` messages on interopnet?
- Probably not, but there are many on `calibnet`