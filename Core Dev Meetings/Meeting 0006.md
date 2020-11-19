## Meeting #6 - 2020-11-19

Agenda

*   Any latest updates/hurdles from Filecoin implementations
    *   [Lotus](https://github.com/filecoin-project/lotus)
    *   [Forest](https://github.com/ChainSafe/forest)
    *   [Fuhon](https://github.com/filecoin-project/cpp-filecoin)
    *   [Venus](https://github.com/filecoin-project/go-filecoin)
*   Upcoming state upgrades
    *   1.2.0
        *   Contains FIP 5 and 6
*   Test vectors update
*   Review of open FIP PRs
*   Review of changes to FIP Process

Notes

*   Implementations
    *   Forest
        *   fixed issues with interop - more than half way to breeze upgrade, confident achieved interop with actors v1
        *   Started actor v2 upgrade - implemented what needed for staying in sync with network
        *   Working on block production for miner/markets
        *   Aiming for audit early January
        *   Qs - AMT & HAMT updates, panic handling
        *   Syncing perf - seen some areas where faster than Lotus, but not perfect testing yet
    *   Venus
        *   Doing syncing from height 0
        *   Working on chainsync from snapshot / checkpoint
        *   Passed all the unit tests and test vectors
        *   Catching up is slow - need few more days to catch up
        *   Merged a working branch to master on the upgrade to actors v2
        *   Want to add webhook and CI work so can merge big PR
            *   AI: Molly ensure Steven et al have ability to configure CI for venus repo
        *   Expect to have the mining component integrated in 2 weeks
    *   Fuhon
        *   Realized implementation of node sync / graphsync needed refactoring
        *   Decided events model would worked better - now that see flows its easier / cheaper to go to event based architecture straight away
        *   Plan to go to that next week, hope working by EOM
        *   Storage deals working well, working on making retrieval deals compatible - hopefully finished this/next week
        *   Working on payment channel actor, then storage actor
    *   Lotus
        *   Focused on stability - focused on performance broadly
        *   Released 1.1.3 - require less memory, run faster, etc
        *   Just shipped 1.2.0 release that will be second state upgrade since liftoff
        *   More moving pieces in this upgrade - tried to document well in staging PR / milestone
        *   Critical piece is upgrading proofs - new actors version has new proof type
        *   Two state upgrade epochs to introduce new and then remove previous
        *   Plan to be effectively in maintenance mode through winter break
        *   Rust Fil Proofs was 5.4.0
*   Q&A
    *   How are folks approaching gossipsub / drand (CDNs)
        *   Forest - rust gossipsub being used in eth 2 - using normal config in filecoin
            *   For drand - consuming from HTTP CDN
            *   Using bitswap from IPFS embed team (https://github.com/ipfs-rust/ipfs-embed) - older version of library to ensure compatibility (has a new incompatible change)
        *    Fuhon - using http endpoint for drand
            *   Maintainers for cpp gossipsub - also used by polkadot
    *   AMT/HAMT
        *   Inefficiencies on the actors team radar and WIP to improve
        *   Coming in next state upgrade (January)
    *   What we do when actors panics
        *   Lotus traps all panics and uses a reserved exit code
    *   CSCon - coming to give talks on what’s new
*   Upcoming state upgrade
    *   Contains FIP 0005
    *   NOT FIP 0006
    *   0006 needs to be kicked back to draft - some new discussion from Protocol analysis
        *   https://github.com/filecoin-project/FIPs/issues/21
*   Test vectors
    *   Vector rebasing landing right now
    *   Complexity around protocol versions that require migrations
    *   Have some tricks to this that help with automation but require manual review
    *   Building in more intelligence to transplant vectors
    *   Running another sweep against latest chain epochs to refresh corpus
*   FIP PRs
    *   Ongoing conversation around batching sector pre-commit - https://github.com/filecoin-project/FIPs/issues/25
    *   Help miners onboard more storage
    *   Needs more discussion - since won’t be able to land the upgrade until January anyway
    *   Could also make the base fee higher for other operations (like WPost / Deals)
    *   Would like to see in conjunction with a batched prove commit / deal publish
    *   Publish deals would need to be batched in lotus - can aim for next version
*   0-bls address
    *   Private and public key for bls 0 address pretty useless because all 0s
    *   Some messages to/from this address on chain
    *   Disallowing sending to this address in next upgrade
    *   If see addresses failing to verify - this may be why
*   Aayush leading these meetings going forward!
