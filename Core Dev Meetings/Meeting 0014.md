# Filecoin Core Devs Meeting #14 - 2021-03-25

- Meeting Date/Time: **Thursday 25 March 2021, [16:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/16-00)**
- Meeting Recording: https://youtu.be/utHInpSmoxw
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL),  Venus (IPFSForce), Filecoin Foundation

Forest:

- Focus on audit, which starts April 26th
- Message pool being refactored for optimal message selection
- Improving tipset processing
    - Cron actor is slow
    - Flushing blockstore at the end of VM execution is slow
    - Blockstore improvement is ready, cron is proving harder
- Working on RPC endpoints and CLI
- Ongoing work on markets development and integration

Fuhon:

- Focus on stabilization and performance
- Large memory leak in libp2p has been fixed
- Another libp2p issue is causing blocks to be dropped, being investigated

Venus:

- Ongoing work on distributed mining pool
- Integrating the different components (Venus miner, Venus wallet, Venus messenger)
- Initial version aimed for 2 weeks from now, then polishing over the next few sprints
- Some of the extracted components can be used as a service by any project
    - Venus wallet
    - Venus messenger

Lotus:

- More optimistic PoSts were being disputed than expected
- Bug found in how Lotus miner sourced randomness, fixed in 1.5.1
- Focus on putting a thorough Lotus release process and testing checklist in place
- Lotus release minor versions will no longer necessarily mean network upgrades
- Work on FIP-0014

FIP-0014:

- No blockers from security audits (not desirable, but not blocked)
- Running a FILPoll to survey how miners feel about this, currently 96-4 in favour of it
- Poll closes Saturday, March 27
- Tentative timeline: Network upgrade planned for April 12

FIP-0013:

- IPP will now be called "SnarkPack": pack multiple proofs into one
- An economic issue that was causing large miners to gain outsize benefits was resolved by limiting the size of a SnarkPack
- Submission window between PreCommit and ProveCommit being extended from 1 day to 6 days
- FIP has been updated

FIP-0008:

- Batches PreCommits
- Won't be shipped alongside SNARKPack, implementation timeline TBD
