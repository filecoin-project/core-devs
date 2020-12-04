# Filecoin Core Devs Meeting #5 - 2020-11-05

- Meeting Date/Time: **Thursday 05 November 2020, [16:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/16-00)**
- Meeting Recording: https://youtu.be/jCJFhhR0gW8
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL),  Venus (IPFSForce)

## Agenda

*   Review of open FIP PRs
    *   FIP 0006 - [https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0006.md](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0006.md) 
    *   [https://github.com/filecoin-project/FIPs/pull/27](https://github.com/filecoin-project/FIPs/pull/27) 
*   Upcoming state upgrades
    *   (Lotus) Upcoming Proofs Upgrade
*   Test vectors update
*   Any latest updates/hurdles from Filecoin implementations
    *   [Lotus](https://github.com/filecoin-project/lotus)
    *   [Forest](https://github.com/ChainSafe/forest)
    *   [Fuhon](https://github.com/filecoin-project/cpp-filecoin)
    *   [Venus](https://github.com/filecoin-project/go-filecoin)
*   Review of changes to FIP Process
*   (Question from Fuhon) Graphsync - Design rhetoric for retrieval deals
*   External Security Audits for other Impls

Notes


*   FIP
    *   FIP-0006 - when go into debt right now, miners can’t cant call some methods
        *   Ex recover fee debt - wanted miners without power to not be able to mine blocks
        *   Realized bad consequence was that miners in debt accumulate fee
        *   Propose sacrifice a bit of security to help avoid this bad situation
    *   Batched precommits
        *   Drastically reduces the gas costs for precommits, currently a major volume on chain
        *   Why 32 GB vs 1000 GB? - practicality, not strong constraint
        *   Perhaps miners bottlenecked on prove commits right now, which favors miners who can bundle many commits together
        *   TODO: Calculate the relative advantage for large miners
*   Test vectors
    *   In pipeline - some additional tvx commands
    *   Allow migrate existing test vectors to new network version to ensure regression tested
    *   Expected by EOW
    *   Block sequence vectors
*   Graphsync Question
    *   Go-graphsync implementation has a listener to accept incoming questions that reads messages in a loop
    *   Doesn’t do messages in another function, doesn’t cache connections, used only in single direction
    *   Possible you could hold connections to reuse them - but graphsync is designed to not be a request/response protocol (could includ multiple req/response or both) - designed similar to go-bitswap in that way
    *   Don’t hold the connections to respond to them, unidirectional
    *   Important in implementation, need to be able to respond to multiple requests and responses in a single message - can choose to deduplicate sending a block
    *   If two responses to same peer at same time, need to handle possibility on receiving side
    *   Q: How testing interop between go-graphsync and c++ graphsync
        *   Starting lotus node and fuhon node and they do a storage and retrieval deal - graphsync required for dealmaking
        *   Have a number of stress-test testplans for graphsync - if integrate with testground via a c++ SDK could test just interop with graphsync without full dealflow
*   Impls
    *   Lotus
        *   There will be an upgrade with new SDR computation in a few days
            *   5.3.0 merged on to lotus master - speed improvements to verification of snarks - 8-12x - down to 2ms verification
                *   Most improvements enabled by default
                *   If not consuming ffi directly, there’s now an additional rust feature flag in ffi layer which enables blst for curve operations
                *   Supported on 64bit systems
                *   Undergoing audit before the default
                *   Gives another 2x perf improvement at well for most SNARK operations
            *   5.4.0 require impl changes to consume them
                *   Does include proving support on AMD GPUs
                *   Not as optimized as NVIDIA, but does support
                *   Sealing part of proof has incompatible change - happens on both side - proofs code able to verify both versions
                *   Spec actors consume new seal proof types
        *   Some FIPs in the process of being implemented (mostly spec actors)
            *   A few bug fixes
            *   Will have a small migration for power table computation
        *   Fixing problem where run winning post on terminated sectors
        *   Upgrade code available either EOW or early next week
        *   Up for at least a week before upgrade triggers
    *   Venus
        *   Implemented checkpoint / snapshot in venus to sync from snapshot
        *   Integrated test vectors
        *   Passed 75-80% of test cases
        *   Implemented network versions to support forks
        *   Purchased some powerful hardware - in next 2 weeks may be able to sync all the chain to mainnet latest epoch
        *   Next, plan to add support for json API
        *   Can have venus chain syncer and lotus miner into a single system
        *   Will use that while implementing venus miner
        *   Will implement a messenger component
        *   Principle of Venus is to separate different parts of implementation
    *   Forest
        *   Working to sync with space race, mainnet, and storage/markets
        *   Syncd space race through 1963 epoch
        *   Getting a new export to sync through network upgrade
        *   Think getting pretty close on space race milestone
        *   Doing actors v2 upgrade, moved types into another crate but need to do other actors changes after get initial sync done
        *   Also need block processing over gossipsub in realtime - to form tipsets in realtime
        *   Finished implementing paych functionality - will test after v2 actors
        *   Working on storage miner integration, about to be able to get it initialized
        *   Didn’t want to lose test coverage of test vectors have
    *   Fuhon
        *   Busy with big refactoring of chain sync of connectivity (incl graphsync)
        *   Integrated spec actors v2 - but not switched for same reason (test vectors)
        *   Decided to move on with own version of actors - finished market actor, moving on to big ones like miner actor
        *   Making whole retrieval flow work
*   Security Audits
    *   Lotus has had multiple audits from different security firms
    *   Typically come ahead of significant release or change
    *   Right code by right people
    *   Would like to encourage folks we already worked with
    *   Have some ability to sponsor these audits
    *   Some availability in the early Dec timing
    *   Amer will reach out to do scheduling after discussing with team
*   Return value to withdraw balance
    *   Question - need a FIP?
    *   Agree with change, very small - can avoid a FIP
    *   Need to define what goes through process
    *   TODO: Molly add a note to FIP repo
