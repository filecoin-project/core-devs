# Filecoin Core Devs Meeting #4 - 2020-10-22

- Meeting Date/Time: **Thursday 22 October 2020, [16:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/16-00)**
- Meeting Recording: https://youtu.be/ExFBGD3sjHk
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL),  Venus (IPFSForce)

## Agenda

*   Review of open FIP PRs
    *   [filecoin-project/FIPs#18](https://github.com/filecoin-project/FIPs/issues/18)
*   Upcoming state upgrades
    *   Lotus v1.1.0 - epoch 170000
*   New: multi-variant vector support & new commands to simulate messages // migrate vectors across protocol versions
*   Any latest updates/hurdles from Filecoin implementations
    *   [Lotus](https://github.com/filecoin-project/lotus)
    *   [Forest](https://github.com/ChainSafe/forest)
    *   [Fuhon](https://github.com/filecoin-project/cpp-filecoin)
    *   [Venus](https://github.com/filecoin-project/go-filecoin)
*   Review of changes to FIP Process
    *   [filecoin-project/FIPs#16](https://github.com/filecoin-project/FIPs/issues/16)
    *   https://github.com/filecoin-project/FIPs/pull/11

## Notes

*   Review of open FIP PRs
    *   30% of gas is taken by precommit
    *   Stopping vesting during precommit reduces total gas usage by 10%
    *   Basic idea, not unlock vested funds during precommit, low downside (may add a 30min vesting delay, which would require another command)
    *   Implementation, guard the loading/unvesting of funds with a protocol version number bump
    *   No open PR for the change yet - will 
*   Upcoming state upgrades
    *   Lotus v1.1.0 - epoch 170000
*   Any latest updates/hurdles from Filecoin implementations
    *   [Lotus](https://github.com/filecoin-project/lotus)
        *   Monitoring and fixing since mainnet launch
        *   Current upgrade with vesting change most relevant to this group
        *   PR in Filecoin FFI open for testing to drastically improve mining performance
            *   Triggering some issues on some GPU drivers
        *   Improvements to the lotus miner worker - making communications async
            *   Currently under review
            *   Worker to miner comms now use HTTP
    *   [Forest](https://github.com/ChainSafe/forest)
        *   Focused on interop - passing all valid conformance vectors
        *   Upgraded to v0.9.12
        *   Able to sync up to space race export 
        *   Next step to sync by actually connecting to the network
        *   Running a local devnet
        *   Versioning for storage miner and JWT authentication
        *   Adding the paychannel RPC
        *   Holding off on upgradeability - will just do the upgrade to v2 and use a snapshot
        *   Gets us to mainnet as quickly as possible
        *   Also syncing against lotus - running into a chain exchange challenge
    *   [Fuhon](https://github.com/filecoin-project/cpp-filecoin)
        *   Passed all the conformance tests not labeled
        *   Legacy actors for 0.2 that is WIP to become compatible with current lotus version
        *   Able to connect to mainnet and get information - some issues with selecting state head
    *   [Venus](https://github.com/filecoin-project/go-filecoin)
        *   Focusing on interop with lotus
        *   Using the space race and mainnet chain
        *   Right now can sync to epoch 20000
        *   Already made a lot of fixes
        *   Chainsync still very slow - running into io performance issues and upgrading hardware to help
        *   20K-50K just takes more work
        *   Lots of work to sync to 100K, and plan to use snapshot to speed up sync
        *   Working on being able to use a snapshot - would like example tooling to help create snapshots
            *   Lotus chain export command allows exporting chain with desired parameters
            *   Forest been using this - documented
            *   AI: Steven/Magik discuss offline
        *   Separate components - working on chain syncer / validation, CLI with better UX, miner, etc
    *   Testing interop of post-mainnet versions - shared devnet
*   New: multi-variant vector support & new commands to simulate messages // migrate vectors across protocol versions
    *   Great to have both forest and fuhon passing all test vectors!
    *   Multi-variant vectors - now have an array of network versions it needs to run against -- anchor or base epochs
    *   References are offsets on top of that epoch
    *   Run through many protocol versions at once and ensure compatibility
    *   As develop support for new protocol versions - have a selector string to filter out vectors don’t have support for yet
    *   Tvx simulate command should be ready by EOW
        *   Generates a vector and state diff to see impact of that message
        *   Useful for edge cases for synthetic messages that haven’t yet made it on chain
        *   TVX project command - allow take many vectors and project on new protocol version
        *   Then can inplace update vector and add new variant
        *   Know whether particular functionality affected
    *   Chainsync vectors will get more attention next week
*   [https://github.com/filecoin-project/FIPs/issues/16](https://github.com/filecoin-project/FIPs/issues/16)
    *   Decision: Move forward with trial of assigned in github issues
*   [https://github.com/filecoin-project/FIPs/pull/11](https://github.com/filecoin-project/FIPs/pull/11)
    *   Helps keep the spec up to date
    *   Creates space for a spec update associated with the FIP
    *   Assigned unique identifier to each spec section - allows linking front-matter of FIP to the spec section
    *   All the FIP writer needs to do is tag the labels
    *   The release cycle of the spec will also be in parallel with the FIP process
    *   Versioning tied to FIP
        *   Should FIP editors merge spec PRs when accept a FIP?
            *   Yes, or should be in flight
*   Keeping at 4pm UTC going forward
    *   Molly will need to hand off running these meetings to fit with new timing
