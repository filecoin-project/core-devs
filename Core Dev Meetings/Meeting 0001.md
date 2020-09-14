# Filecoin Core Devs Meeting #1 - 2020-09-11
- Meeting Date/Time: **Friday 11 September 2020, [17:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/17-00)**
- Meeting Recording: https://youtu.be/BB6uiZ0h35g
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL)

## Agenda

*   What is this meeting?
*   The Filecoin Improvement Proposal (FIP) Process
*   Current status update from major implementations
    *   Lotus
    *   Forest
    *   Fuhon
*   Cross-implementation conformance tests
*   Actors Upgrade


## Notes

#### Cross-implementation conformance testing

*   Goal of test vectors - provide a corpus of interoperable test vectors
    *   3 kinds of vectors defined in json schema
        *   Json schema to validate against
        *   Builder api to craft test vectors (generative ex from lotus implementation & extractive approach from live network)
            *   Capture regression tests from live network
            *   Bot-maintained corpus
            *   Commit scripts / dependencies
            *   Bot updates vectors
    *   Forest implementation has adopted this heavily and is providing great feedback
        *   66 vectors conformant with
    *   As create test vectors - finding circumstances where lotus/spec-actors not conformant with spec / expected behavior
        *   Explicitly tag them as incorrect / broken
        *   Can be excluded or tested against implementation (if tested, assertion needs to be flipped)
    *   Coming next
        *   Currently message and tipset
        *   Block sequence vector coming early next week
        *   Addresses set of raw blocks arriving from the network at offsets from genesis
            *   Preconditions: genesis car
            *   Tuples of timestamps with raw block (failed sigs, failed randomness)
            *   Spec-ing out a set of functions for raw byte behavior
            *   Control the output of the test without full past
    *   Question: extraction vectors - how decide what valid to extract from?
        *   When find a message that want to extract, get state tree at that point and prune it to only have the actors touched by that message
            *   Storage and markets actors does have a lot of data
            *   Lowest gotten is 15MB data
            *   Could more explicitly prune to what think is relevant
            *   If alter logic that depends on data that was pruned - lost a vector for testing
            *   Could maybe save traceability information for where extracted from
        *   One eng focused on this as of mid next week
        *   Starting a project to create a dashboard like node.green
            *   Pick up conformance status from impls using the vectors to populate dashboard of realtime conformance

#### FIPs

* https://github.com/filecoin-project/FIPs

#### Impl Status Updates

*   Forest - Chainsafe
    *   Main goal - syncing and full interop
    *   Conformance tests passing (except invalid)
    *   VM and actor almost all matching most recent changes (miner actor remaining)
        *   Pinned to 0.9.3 - also what test vectors pinned to
        *   Watching next week’s actors upgrade too (1.0!)
    *   Making chain syncer production ready
    *   Making changes to message pool to sync w network
    *   Second prio getting a full node
    *   Integrating storage miner and storage/retrieval markets
        *   Another project in chainsafe to add an API on go-fil-markets that almost entirely done
        *   Remaining item - payment channel integration
*   Lotus - PL
    *   In week 3 of Space Race competition
    *   Adding functionality around network upgrade logic
    *   Landing spec actors migration from 0.9.8 to 1.0 (aimed for next week)
    *   Important emergency-preparedness for post-mainnet launch
    *   Syncing current testnet as a baseline works well for evaluating this
    *   New go-state-types repo - created to improve the upgrade process for actors
        *   Expect some types like bigint to never change, so tried to separate these two types
        *   Introduced in 0.9.7 - one-time manual migration
    *   Now concept in actors of network version
        *   Anything running filecoin protocol can inform actors of current network version
        *   Can trigger simple upgrades through these checks
    *   Continuing to work on performance in general
        *   Some improvements - doing pre-commit 1 in 2 hours
        *   In master - faster verification of snarks using blst
        *   Pubsub & chainsync improvements
    *   Plan to keep supporting the Space Race network after competition ends
    *   Blocksync to chain exchange renaming
        *   Plan to support both for a while - once detect enough of network supports both, drop the old one
    *   Actors upgrade - circular dependence of runtime method? Used to tell actors about chain upgrades and set the network schedule
        *   Actors does different things based on network version (not actors version)
*   Fuhon - Soramitsu
    *   C++ implementation
    *   Pushing version to both mine and sync in testnet
    *   Version able to sync
    *   Working to upgrade cpp libp2p implementation to upgrade to correct noise implementation (after secio deprecation)
    *   Testing interop by exporting from own node and re-importing it (?)
    *   Last interoperable version 0.4.2 of lotus
    *   Decided to import spec actors directly from c-go to speed up interop in the short term while finishing cpp implementation
    *   Starting to test miner against testnet
    *   Go-markets ready for quite some time - will check back for any major changes after fully working node
    *   Setting a libp2p agent version so can do a libp2p scrape
        *   Probably yes - will check

#### Actors Upgrade Logic
*   Fast protocol upgrades save networks
*   Specs actors versioning strategies designed and practiced
    *   🔪 “In place” upgrades 
        *   If statements inside specs-actors, quick, messy
        *   🚢 Exercised in Monday’s space race upgrade for new CE params
    *   🔨 Full upgrades
        *   Bump go mod major version, all is possible including state migrations
        *   Coming to testnet next week
*   ❤️🧘Major lotus changes to handle switching protocols 
    *   Coordination between teams to clear the way
        *   I.e. Extracting stable types from actors to third repo
*   3+ engineer weeks (and counting) of design and cleanup fixed cost paid off
    *   🌅 mainnet’s future looks brighter
    
#### Other

*   Aayush - offer to head-bang on consensus issues
*   Idea - as these implementations become interoperable - encouraging the mining community to spread around implementations
    *   Dev hackathons
    *   Grants
    *   Major mining operations running all three for resiliency


#### Todos

*   N/A
