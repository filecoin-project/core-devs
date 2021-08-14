# Filecoin Core Devs Meeting #24 - 2021-08-12

- Meeting Date/Time: **Thursday August 12, 2021, [16:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/16-00)**
- Meeting Recording: https://youtu.be/PrALVljYYGY
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL), Venus (IPFSForce), Filecoin Foundation and Community representatives

### Updates for this week

Forest:

- Prepping for alpha phase, getting documentation ready
- Aiming for release in a month's time
- Running v13 well on mainnet

Lotus:

- v1.11.1 will be shipped today
- Includes MRA (splits Markets out of Lotus miner), which has been tested extensively
- Introduces experimental splitstore, which splits chain store into hot and cold sections
- 1.11.2 release train, which includes Dagstore, will start next week
- Deep dives into these new features will be useful

Venus:

- Incubation program up and running with 15 geographically distributed participants
- Helping small service providers onboard into the system, polishing documentation along the way
- Supporting 2k sectors for testing purposes
- Working on markets implementation, aiming to be ready end of the month
- Draft design for how to share rewards in a distributed mining pool is near ready

Fuhon: 

- Successfully have a Lotus miner running against a Fuhon node on interopnet!
- Miner has 25 GB sealed, power will go up after it gets verified data
- Resolved several critical issues with libp2p connectivity
- Memory related issues are hard to identify / fix
- Talked to Dudley about security audit
- Unfortunately it might not happen in 2021 due to auditor availability
- Fuhon 1.0 might be released this month after an internal audit

FIP-0018:

- Clarifies that so-called miners on Filecoin are actually storage providers
- FIP is in last call, feedback welcome!
- Initial changes will be solely marketing and messaging, not code changes / protocol changes
- Initial proposal came from the Asia working group based on feedback and market research

FIP-0017: 

- Goal is to allow for efficiently upgrading CC sectors without resealing
- Today, adding deals to CC sectors requires resealing, which makes upgrading CC sectors roughly equivalent to sealing a new sector
- Idea is to take the old replica of the sector, R, and update it with the new data and some randomness
- Method has to be both secure and more efficient than resealing
- This also speeds up the process of landing deals on chain, since you no longer have to wait for a full sector sealing
- Three ideas being considered, but only FIP-0017 is fully fleshed out
- FIP-0017 does this fully interactively, requires three on-chain messages
- Still a 2x improvement in time, and a more lightweight process
- Better ideas reduce the interaction, thus needing only 2 or even 1 message(s)
