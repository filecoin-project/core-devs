# Filecoin Core Devs Meeting #3 - 2020-10-08
- Meeting Date/Time: **Thursday 8 October 2020, [16:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/16-00)**
- Meeting Recording: https://youtu.be/ExFBGD3sjHk
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL),  Venus (IPFSForce)

## Agenda

*   Welcome IPFS Force, taking maintainership for go-filecoin
*   [Spec Actors v2.0.0](https://github.com/filecoin-project/specs-actors/releases/tag/v2.0.0) and the Lotus 0.9.0 upgrade
    *   What's in the release
    *   How we expect to use it
    *   What it means for other implementations being compatible with the mainnet
*   FIP PRs
    *   [https://github.com/filecoin-project/FIPs/pull/8](https://github.com/filecoin-project/FIPs/pull/8) 
*   Current status update from Filecoin implementations
    *   [Lotus](https://github.com/filecoin-project/lotus)
    *   [Forest](https://github.com/ChainSafe/forest)
    *   [Fuhon](https://github.com/filecoin-project/cpp-filecoin)
    *   [GFC](https://github.com/filecoin-project/go-filecoin)
*   Mainnet Launch Timeline and Phases

## Notes

*   IPFS Force
    *   IPFS Force runs many IPFS meetups
    *   Participate in devnets and testnets
    *   Like to differentiate go-filecoin to add functions around mining functionality (pools, etc)
*   Spec Actors v2
    *   Biggest changes in the miner actor
        *   Balance refactoring to make things less likely to break (debt, fees, etc)
        *   Keep initial pledge always on the miner actor
        *   Consensus faults - avoiding replays and miner termination
        *   Lockout for election
        *   Delays to sector power until first WindowPoSt
        *   Lowering the precommit deposit fee
        *   Less aggressive on faults - no fee on recovery
        *   Prove commit delay separated out
        *   Worker address no longer uses cron -2 stage message invocation
        *   Two stage worker address change
        *   CCUpgrade Fault bug - fixed state and prevented getting back in this state
        *   Change to proving period (avoid starting in future)
    *   Change to baseline function in reward actor
    *   Change to multiply miner penalty if they include bad messages
    *   Create things in the init actor
    *   Some bug fixes and improvements to multisig
    *   Internal node ordering in HAMP violated an invariant - now fixed
    *   Meta about the upgrade
        *   Work to extract out different types to keep things simpler - moved to “go state types” repo
        *   Using go mod major versions to keep track of state breaking changes in spec actors
        *   Consuming a runtime version to check for different computations between different upgrades
    *   Go bigINT division had a truncation issue (#1131)
        *   Austin created an issue about int truncation in go on the spec: [https://github.com/filecoin-project/specs/issues/1188](https://github.com/filecoin-project/specs/issues/1188)
    *   All previous upgrades didn’t actually change state on disk - this one does
    *   Can we do things like caching in simpler upgrades?
        *   Yes, for things like AMT we can upgrade and introduce improvements
    *   Two main components
        *   Right after the height, right before the next height, call the migration itself
        *   Would like to make it more incremental so could pre-cache some (right now can pause for several minutes)
        *   Because changing state have to abstract over it
        *   Have objects that abstract over miner actor and allow performing queries - allow breaking actors apart in the future
        *   Almost all modification to actors come through spec actors and not lotus
        *   Abstraction of messages - lotus didn’t work on this much - current solution has message builder for construction of a message per actors version
    *   Upgrade paths
        *   Can either run old version of world and then atomically switch to new version
        *   Or miners can temporarily switch to an alternate implementation for the upgrade through lookbacks, and then switch back once the implementation supports the new state
        *   Lotus also plans to have checkpoints after which can refactor out old versions
    *   List of various things and epochs that live on the network (Lotus)
        *   If syncing from genesis up to now is a goal - can provide a list of all those epochs and changes
*   Fuhon - Soramitsu
    *   Node & miner
    *   Storage miner compatible with 0.5.4 of Lotus - working on bumping compatibility to 0.9.0
    *   Will take miner and try to add into current testnet
    *   Node more difficult - assessing changes
    *   Integrated test vectors - initial version for 0.5.4
    *   Going to take all versions of test vectors and use to diagnose what differences are needed for 0.9.0
*   Test Vectors
    *   Have embedded execution traces - can compare side by side if wrong
    *   State-diff - allows comparing two state tree car files
    *   CI Jobs use when find a mismatch
    *   Do 3 way diff between pre-condition, post-condition, actual
*   Lotus - PL
    *   Actors v2 upgrade and 0.9.0 release
    *   Hoping to not have more large consensus-breaking releases
    *   Switching addresses from t to f prefix
*   Forest - Chainsafe
    *   Verifying impleemntation without networking (using export and importing to Forest)
    *   Then connecting to Space Race and sync
    *   Resolving failing tests from vectors
    *   State transition fails syncing the whole chain (state diff)
    *   Conformance tests other aspects
    *   Finished merging miner updates to actors 0.9.3
    *   Been running a local devnet
    *   Go-fil-markets ready to go, finishing up payment channel
*   Go-filecoin - IPFSForce
    *   3 eng focusing on this
    *   Go-filecoin had interoperability in mid-June, working to catch up to changes made since then
    *   Schemas and data structures changed
    *   Lots of improvements over past few months
    *   Plan to achieve interoperability with current chain in 2-3 weeks to sync to latest head
    *   Then focus on sealing process and state machine
    *   Market/pay channel future work
*   Timeline
    *   Liftoff epoch on Oct 15
    *   Main launch on Oct  19
    *   Many events during liftoff week Oct 19-23
*   Test vectors
    *   626 vectors now
    *   TBX tooling to extract test vectors from a live chain
    *   Pruning state trees heavily - “light weight mode”
    *   Close to 100% extractability of test vectors
    *   Of all messages on chain, can we extract them and save the correct codes
    *   Relied on real randomness - added matches related to randomness field
    *   Removed fake syscalls and now rely on real signatures
    *   Close to adding another 100 vectors
    *   Make vectors generate different gas usage
    *   Idea - reuse test vectors by upgrading via a tool to new implementation
    *   What about proof verification? 
        *   Not included in coverage - syscalls have enough data to generate the right data
